<script lang="ts">
	import { browser } from '$app/environment';
	import medusa from '$lib/medusa';
	import Cookies from 'js-cookie';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	let region: string | undefined = undefined;
    let region_selection_open = false

	export let data: PageData;


	const set_region = async (region_id: string) => {
		Cookies.set('shop_region_id', region_id, { expires: 365 });
		region = region_id;
		region_selection_open = false
        const params = new URL(window.location.href).searchParams
		const cart = await medusa.carts.create({region_id})
		Cookies.set("shop_cart_id", cart.cart.id)
        if (params.get("return_to")) {
            window.location.replace(params.get("return_to"))
        }
	};
	if (!data.region_cookie) {
		region_selection_open = true
	}
</script>

<slot></slot>

{#if region_selection_open}
	<div
		class="fixed top-0 left-0 z-20 h-screen w-screen bg-black/60 flex"
		out:fade={{ duration: 150 }}
	>
		<div class="flex lg:w-1/3 h-2/3 bg-white dark:bg-gray-700 rounded flex-col m-auto p-4">
			<h2 class="text-4xl mx-auto">Select your region</h2>
			<div class="w-full flex flex-col gap-4 p-4">
				{#each data.regions as region}
					<button
						class="text-lg border-2 border-black dark:border-white rounded-lg p-2 hover:bg-green-600/50 transition"
						on:click={() => set_region(region.id)}
					>
						{region.name} / {region.currency_code}
					</button>
				{/each}
			</div>
		</div>
	</div>
{/if}
