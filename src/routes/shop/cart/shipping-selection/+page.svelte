<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const format_money = (money: number): string => {
		return new Intl.NumberFormat(undefined, {
			style: 'currency',
			currency: data.cart.region.currency_code
		}).format(money);
	};

	let selected_shipping_cost = undefined;
    let shipping_tax_included = undefined
</script>

<div class="min-h-screen flex items-center justify-center">
	<div class="max-w-lg w-full bg-white p-8 border border-gray-200 rounded-lg shadow-lg">
		<!-- Title -->
		<h1 class="text-2xl font-bold mb-6 text-gray-800 text-center">Choose Shipping Method</h1>

		<!-- Shipping Methods Form -->
		<form action="#" method="POST">
			<!-- Standard Shipping Option -->
			{#each data.shipping_options as option}
				<div class="mb-4" class:opacity-60={!option.provider.is_enabled}>
					<label
						class="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-100 transition-all"
					>
						<input
							disabled={!option.provider.is_enabled}
							type="radio"
							name="shipping_method"
							value={option.id}
							class="h-5 w-5 text-blue-600"
							on:click={() => {selected_shipping_cost = option.amount; shipping_tax_included = option.is_tax_inclusive}}
						/>
						<div class="ml-4">
							<span class="font-medium text-gray-800">{option.name}</span>
							<p class="text-sm text-gray-500">{option.type.description}</p>
						</div>
						<span class="ml-auto font-semibold text-gray-900"
							>{format_money(option.amount)}</span
						>
					</label>
				</div>
			{/each}
			{#if selected_shipping_cost !== undefined}
				<div class="flex">
					<p class="mx-auto">
						Total would be {format_money(data.cart.total + selected_shipping_cost)}, Tax <b>{#if shipping_tax_included}is included{:else}is NOT included.{/if}</b>
					</p>
				</div>
			{/if}

			<!-- Continue Button -->
			<button
				type="submit"
				class="w-full py-3 mt-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
			>
				Continue to Payment
			</button>
		</form>
	</div>
</div>
