<script lang="ts">
	import type { PageData } from './$types';
	import { MEDUSA_BACKEND_URL, MEDUSA_BASE_HEADER } from '$lib/medusa';
	import { fade } from 'svelte/transition';
	export let data: PageData;

	let cart = data.cart;
	let status: 'idle' | 'loading' = 'idle';
	let checkout_email = '';
	console.log(cart);

	const remove_from_cart = async (item_id: string) => {
		status = 'loading';
		const res = await fetch(
			`${MEDUSA_BACKEND_URL}/store/carts/${cart.id}/line-items/${item_id}?fields=+items,+items.thumbnail`,
			{
				method: 'DELETE',
                credentials: "include",
				headers: MEDUSA_BASE_HEADER
			}
		);
		if (!res.ok) {
			confirm('Error updating cart!');
			window.location.reload();
		}
		const json = await res.json();
		cart = json.parent;
		status = 'idle';
	};

	const format_money = (money: number): string => {
		return new Intl.NumberFormat(undefined, {
			style: 'currency',
			currency: cart.region.currency_code
		}).format(money);
	};

	const quantity_modify = async (item_id: string, quantity: number) => {
		status = 'loading';
		const res = await fetch(
			`${MEDUSA_BACKEND_URL}/store/carts/${cart.id}/line-items/${item_id}?fields=+items,+items.thumbnail`,
			{
				method: 'POST',
                credentials: "include",
				headers: { ...MEDUSA_BASE_HEADER, 'Content-Type': 'application/json' },
				body: JSON.stringify({
					quantity
				})
			}
		);
		if (!res.ok) {
			confirm('Error updating cart!');
			window.location.reload();
		}
		const json = await res.json();
		cart = json.cart;
		status = 'idle';
	};

	const submit_checkout_form = async () => {
        if (checkout_email.length < 7) {
            return
        }
        if (cart.items.length < 1) {
            return
        }
        if (status === "loading") {
            return
        }
		status = 'loading';
		const res = await fetch(
			`${MEDUSA_BACKEND_URL}/store/carts/${cart.id}?fields=+items,+items.thumbnail`,
			{
				method: 'POST',
                credentials: "include",
				headers: { ...MEDUSA_BASE_HEADER, 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: checkout_email
				})
			}
		);
        if (!res.ok) {
            confirm('Error setting email!');
			window.location.reload();
        }
        status = 'idle';
	};
</script>

<div class="flex w-full">
	<h1 class="mx-auto text-4xl mt-8">Your shopping cart</h1>
</div>

<section class="lg:grid grid-cols-3 p-4 gap-4">
	<table class="min-w-full bg-white/80 border border-gray-200 rounded-lg col-span-2">
		<thead class="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
			<tr>
				<th class="py-3 px-6 text-left">Item</th>
				<th class="py-3 px-6 text-left">Quantity</th>
				<th class="py-3 px-6 text-left">Total</th>
			</tr>
		</thead>
		<tbody class="text-gray-600 text-sm font-light">
			{#each cart.items as item}
				<tr class="border-b border-gray-200 hover:bg-gray-100 transition">
					<!-- Item Column: Includes Image, Title, and Variant -->
					<td class="py-3 px-6 text-left whitespace-nowrap flex items-center space-x-4">
						<img
							src={item.thumbnail}
							alt={item.product_title}
							class="w-12 h-12 rounded-md"
						/>
						<div>
							<div class="font-medium">{item.product_title}</div>
							<div class="text-sm text-gray-500">{item.variant_title}</div>
						</div>
					</td>

					<!-- Quantity Column: Includes Modify Quantity and Delete Button -->
					<td class="py-3 px-6 text-left">
						<div class="flex items-center space-x-2">
							<!-- Decrease quantity button -->
							<button
								class="text-gray-500 hover:text-gray-700 focus:outline-none"
								disabled={item.quantity < 2}
								on:click={() => quantity_modify(item.id, item.quantity - 1)}
							>
								<svg
									class="w-5 h-5"
									data-slot="icon"
									aria-hidden="true"
									fill="none"
									stroke-width="1.5"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5 12h14"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</svg>
							</button>

							<!-- Display quantity -->
							<span class="px-3 py-1 border rounded">{item.quantity}</span>

							<!-- Increase quantity button -->
							<button
								class="text-gray-500 hover:text-gray-700 focus:outline-none"
								on:click={() => quantity_modify(item.id, item.quantity + 1)}
							>
								<svg
									class="w-5 h-5"
									data-slot="icon"
									aria-hidden="true"
									fill="none"
									stroke-width="1.5"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 4.5v15m7.5-7.5h-15"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</svg>
							</button>

							<!-- Delete item button -->
							<button
								class="text-red-500 hover:text-red-700 focus:outline-none ml-4"
								on:click={() => remove_from_cart(item.id)}
							>
								<svg
									class="w-6 h-6"
									data-slot="icon"
									aria-hidden="true"
									fill="none"
									stroke-width="1.5"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6 18 18 6M6 6l12 12"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</svg>
							</button>
						</div>
					</td>

					<!-- Total Column: Displays the calculated total price -->
					<td class="py-3 px-6 text-left"
						>{format_money(item.unit_price * item.quantity)}</td
					>
				</tr>
			{/each}
			<tr class="bg-gray-200 text-gray-700 uppercase text-sm leading-normal font-semibold">
				<td class="py-3 px-6 text-left"></td>
				<td class="py-3 px-6 text-left"></td>
				<td class="py-3 px-6 text-left">{format_money(cart.total)}</td>
			</tr>
		</tbody>
	</table>
	<div>
		<form on:submit|preventDefault={submit_checkout_form}>
			<!-- Email Input -->
			<label for="email" class="block text-sm font-medium text-gray-700 mb-2"
				>Email Address</label
			>
			<input
				type="email"
				id="email"
				class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
				placeholder="you@nextgen.makers"
				bind:value={checkout_email}
				required
			/>

			<!-- Continue Button -->
			<button
				type="submit"
				disabled={checkout_email.length < 7 || cart.items.length < 1}
				class="w-full mt-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out disabled:opacity-75"
			>
				Continue to Checkout
			</button>
		</form>

		<!-- Shipping and Total Overview Section -->
		<div class="mt-8 bg-gray-50 p-4 rounded-lg">
			<div class="flex justify-between items-center mb-2">
				<span class="text-gray-600">Shipping Costs:</span>
				<span class="font-medium text-gray-900"
					>{#if cart.shipping_total == 0}
						<i>To be calculated</i>
					{:else}
						{format_money(cart.shipping_total)}
					{/if}
				</span>
			</div>
			<div class="flex justify-between items-center">
				<span class="text-gray-600">Total Costs:</span>
				<span class="font-semibold text-gray-900"
					>{format_money(cart.total)}
					{#if cart.shipping_total == 0}<i>+ shipping</i>{/if}</span
				>
			</div>
		</div>
	</div>
</section>

{#if status === 'loading'}
	<div
		class="fixed top-0 left-0 w-screen h-screen z-50 bg-black/40"
		transition:fade={{ duration: 100 }}
	></div>
{/if}
