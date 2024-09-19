<script lang="ts">
	import { enhance } from '$app/forms';
	import { MEDUSA_BACKEND_URL, MEDUSA_BASE_HEADER } from '$lib/medusa';
	import type { PageData, ActionData } from './$types';
	import {pp_id_to_provider} from "$lib/helpers"

	export let data: PageData;
	export let form: ActionData;

	let selected_payment_provider = '';
	let cart = data.cart;

	const payment_provider_details: Record<string, { name: string; description: string }> = {
		default: {
			name: 'Manual',
			description: "Don't choose this!"
		},
		stripe: {
			name: 'Stripe',
			description: "Don't choose this!"
		},
		not_found: {
			name: 'Not available',
			description: "If you see this, don't continue!"
		}
	};




	const update_cart = async () => {
		const res = await fetch(
			`${MEDUSA_BACKEND_URL}/store/carts/${cart.id}?fields=+items,+items.thumbnail`,
			{
				credentials: 'include',
				headers: MEDUSA_BASE_HEADER
			}
		);
		if (!res.ok) {
			confirm('Error fetching cart!');
			window.location.reload();
		}
		cart = (await res.json()).cart;
	};
</script>

<div class="min-h-screen flex items-center justify-center">
	<div class="max-w-lg w-full bg-white p-8 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:border-none">
			<!-- Title -->
			<h1 class="text-2xl font-bold mb-6 text-gray-800 text-center dark:text-white">
				Choose Payment Method
			</h1>

			<!-- Shipping Methods Form -->
			<form use:enhance method="POST" action="?/set_payment_provider">
				<!-- Standard Shipping Option -->
				{#each data.payment_providers as base_provider}
					{@const provider =
						payment_provider_details[pp_id_to_provider(base_provider.id)]}
					<div class="mb-4" class:opacity-60={!base_provider.is_enabled}>
						<label
							class="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-100 transition-all dark:bg-gray-900 dark:border-none"
						>
							<input
								disabled={!base_provider.is_enabled}
								type="radio"
								name="payment_provider_id"
								value={base_provider.id}
								class="h-5 w-5 text-blue-600"
								on:click={() => {
									selected_payment_provider = base_provider.id;
								}}
							/>
							<div class="ml-4">
								<span class="font-medium text-gray-800 dark:text-white">{provider.name}</span>
								<p class="text-sm text-gray-500 dark:text-gray-300">{provider.description}</p>
							</div>
						</label>
					</div>
					<input
						value={data.payment_collection.id}
						id="payment_collection_id"
						name="payment_collection_id"
						type="hidden"
						class="hidden invisible"
					/>
				{/each}

				<!-- Continue Button -->
				<button
					disabled={!selected_payment_provider}
					type="submit"
					class="w-full py-3 mt-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out disabled:opacity-60"
				>
					Continue to Payment
				</button>
			</form>
	</div>
</div>
