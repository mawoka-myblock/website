<script lang="ts">
	import { loadStripe } from '@stripe/stripe-js';
	import type { Stripe } from '@stripe/stripe-js';
	import { Elements, Card } from 'svelte-stripe';
	import { onMount } from 'svelte';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import type { PageData } from './$types';

	export let data: PageData;

	let stripe: Stripe | null = null;
	let elements;
	let processing = false;
	let cardElement
	const client_secret = data.payment_collection.payment_sessions[0].data.client_secret

	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
	});
	const submit = async () => {
		stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: cardElement,
				
			}
		});
	};
</script>

<Elements {stripe}>
	<Elements
		{stripe}
		clientSecret={client_secret}
		bind:elements
	>
		<form method="POST" on:submit|preventDefault={submit}>
			<Card bind:element={cardElement} />
			<button disabled={processing}>
				{#if processing}
					Processing...
				{:else}
					Pay
				{/if}
			</button>
		</form>
	</Elements>
</Elements>
