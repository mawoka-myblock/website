<script lang="ts">
	import medusa, { MEDUSA_BACKEND_URL, MEDUSA_PUBLISHABLE_API_KEY } from '$lib/medusa';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import JSConfetti from 'js-confetti';
	import { fade, slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import type { ProductVariantDTO } from '@medusajs/types';

	export let data: PageData;
	let product = data.product;

	let selectedOptions: Record<string, string> = {};
	let variant: ProductVariantDTO = undefined;
	let variant_id = undefined;
	let jsConfetti = undefined;
	let selected_image = 0;
	let add_to_cart_disabled = true;

	let cart_status: 'idle' | 'loading' | 'finished' = 'idle';

	const find_variant = async () => {
		variant_id = product.variants.find((variant) =>
			variant.options?.every(
				(optionValue) => optionValue.value === selectedOptions[optionValue.option_id!]
			)
		).id;
		load_variant();
		let base_url = '?';
		console.log(selectedOptions);
		for (const [key, value] of Object.entries(selectedOptions)) {
			base_url += `${key}=${value},`;
		}
		await goto(base_url.slice(0, -1));
	};

	const load_variant = () => {
		variant = product.variants.find((v) => v.id === variant_id);
	};

	const get_region = async () => {
		return (await medusa.regions.retrieve(data.region_id)).region;
	};

	const add_to_cart = async () => {
		if (add_to_cart_disabled) return;
		cart_status = 'loading';
		await medusa.carts.lineItems.create(data.cart_id, { variant_id: variant.id, quantity: 1 });
		cart_status = 'finished';
		jsConfetti.addConfetti();
		setTimeout(() => {
			cart_status = 'idle';
		}, 1000);
	};
	const set_add_to_cart_status = () => {
		if (!variant) {
			add_to_cart_disabled = true;
			return;
		}
		if (cart_status !== 'idle') {
			add_to_cart_disabled = true;
			return;
		}
		if (variant.inventory_quantity === undefined && !variant.allow_backorder) {
			add_to_cart_disabled = true;
			return;
		}
		if (variant.inventory_quantity === 0 && !variant.allow_backorder) {
			add_to_cart_disabled = true;
			return;
		}
		add_to_cart_disabled = false;
	};
	$: {
		set_add_to_cart_status();
		variant;
		cart_status;
	}
	onMount(() => {
		const path = $page.url.searchParams.toString();
		const pairs = decodeURIComponent(path).split(',');
		// Iterate over each pair and split by '=' to extract keys and values
		pairs.forEach((pair) => {
			const [key, value] = pair.split('=');
			selectedOptions[key] = value;
		});
		console.log(selectedOptions)
		find_variant();

		jsConfetti = new JSConfetti();
	});
</script>

<div class="flex justify-center mb-4">
	<h1 class="text-6xl">{product.title}</h1>
</div>

<div class="grid grid-cols-2">
	<div class="flex justify-center">
		<div class="relative w-fit group">
			<button
				class="absolute h-full flex items-center top-0 left-0 opacity-50 group-hover:opacity-100 transition disabled:group-hover:opacity-60 disabled:opacity-30"
				disabled={selected_image < 1}
				on:click={() => (selected_image -= 1)}
			>
				<span class="bg-gradient-to-r from-black/90 via-black/60 to-transparent py-8">
					<svg
						class="w-8 h-8"
						data-slot="icon"
						aria-hidden="true"
						fill="none"
						stroke-width="1.5"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15.75 19.5 8.25 12l7.5-7.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
				</span>
			</button>
			<button
				class="absolute h-full flex items-center top-0 right-0 opacity-50 group-hover:opacity-100 transition disabled:group-hover:opacity-60 disabled:opacity-30"
				disabled={selected_image > product.images.length - 2}
				on:click={() => (selected_image += 1)}
			>
				<span class="bg-gradient-to-l from-black/90 via-black/60 to-transparent py-8">
					<svg
						class="w-8 h-8"
						data-slot="icon"
						aria-hidden="true"
						fill="none"
						stroke-width="1.5"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="m8.25 4.5 7.5 7.5-7.5 7.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
				</span>
			</button>
			{#if selected_image > 0}
				<link rel="prefetch" href={product.images[selected_image - 1].url} />
			{/if}
			{#key selected_image}
				<img
					src={product.images[selected_image].url}
					transition:slide={{ axis: 'x', duration: 200 }}
					class="max-h-[80vh] transition-all"
					alt="Imagesad"
				/>
				<link rel="prefetch" href="next.html" />
			{/key}
			{#if selected_image + 1 < product.images.length}
				<link rel="prefetch" href={product.images[selected_image + 1].url} />
			{/if}
		</div>
	</div>

	<div>
		{#if product.description}
			<div class="flex flex-col gap-4 m-4 bg-black/30 rounded p-2">
				<p>{product.description}</p>
			</div>
		{/if}
		<div class="flex flex-col gap-4 m-4 bg-black/30 rounded p-2">
			{#each product.options as option, i}
				<div class="w-full flex flex-col">
					<p>{option.title}</p>
					<select
						class="p-2 dark:bg-gray-700 rounded-lg"
						bind:value={selectedOptions[option.id]}
						on:change={find_variant}
					>
						{#each option.values as val}
							<option value={val.value}>{val.value}</option>
						{/each}
					</select>
				</div>
			{/each}
		</div>
		{#if variant?.calculated_price}
			<div class="flex flex-col gap-4 m-4 bg-black/30 rounded p-2">
				{#await get_region()}
					Loading...
				{:then region}
					<p class="text-center text-2xl">
						{new Intl.NumberFormat(undefined, {
							style: 'currency',
							currency: region.currency_code
						}).format(variant.calculated_price.calculated_amount)}
					</p>
					<p>
						Currently in stock{#if variant.inventory_quantity !== undefined}: {variant.inventory_quantity}{/if}
					</p>
					<p class="block">
						{#if variant.allow_backorder}
							<svg
								class="h-8 w-8 inline-block"
								data-slot="icon"
								aria-hidden="true"
								fill="none"
								stroke-width="1.5"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg> Backorders available
						{:else}
							<svg
								class="h-8 w-8 inline-block"
								data-slot="icon"
								aria-hidden="true"
								fill="none"
								stroke-width="1.5"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg> Backorders unavailable
						{/if}
					</p>
				{/await}
			</div>
			<div class="flex flex-col gap-4 m-4 bg-black/30 rounded p-2">
				<button
					class="bg-[#B07156] rounded p-4 flex justify-center hover:bg-opacity-80 transition duration-200 outline-none disabled:opacity-60"
					on:click={add_to_cart}
					disabled={add_to_cart_disabled}
				>
					{#if cart_status === 'idle'}
						<svg
							class="h-8 w-8 inline-block"
							data-slot="icon"
							aria-hidden="true"
							fill="none"
							stroke-width="1.5"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
						</svg><span class="my-auto">Add to cart!</span>
					{:else if cart_status === 'loading'}
						Loading...
					{:else}
						Success!
					{/if}
				</button>
			</div>
		{/if}
	</div>
</div>
