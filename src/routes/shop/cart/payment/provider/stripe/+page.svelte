<script lang="ts">
	import { loadStripe } from '@stripe/stripe-js';
	import type { Stripe } from '@stripe/stripe-js';
	import { Elements, PaymentElement } from 'svelte-stripe';
	import { onMount } from 'svelte';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import type { PageData } from './$types';

	export let data: PageData;

	let stripe: Stripe | null = null;
	let elements;
	let processing = false;
	let cardElement;
	const client_secret = data.payment_collection.payment_sessions[0].data.client_secret;

	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
	});
	const submit = async () => {
		stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: cardElement
			}
		});
	};
</script>

<div class="min-h-screen flex items-center justify-center">
	<div
		class="max-w-lg w-full bg-white p-8 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:border-none"
	>
		<!-- Title -->
		<h1 class="text-2xl font-bold mb-6 text-gray-800 text-center dark:text-white">
			Choose Payment Method
		</h1>

		<Elements {stripe}>
			<Elements {stripe} clientSecret={client_secret} bind:elements>
				<PaymentElement />
			</Elements>
		</Elements>
	</div>
</div>
