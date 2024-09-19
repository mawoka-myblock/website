import { MEDUSA_BACKEND_URL, MEDUSA_BASE_HEADER } from '$lib/medusa.js';
import { error, fail, redirect } from '@sveltejs/kit';
import type { PaymentCollectionDTO, PaymentProviderDTO } from '@medusajs/types';
import { pp_id_to_provider } from '$lib/helpers';

export const load = async ({ fetch, parent, cookies }) => {
	const parent_data = await parent();

	const res = await fetch(
		`${MEDUSA_BACKEND_URL}/store/payment-providers?region_id=${parent_data.cart.region_id}`,
		{
			credentials: 'include',
			headers: MEDUSA_BASE_HEADER
		}
	);
	if (!res.ok) {
		console.log(await res.text());
		error(res.status);
	}
	const json = await res.json();
	const payment_providers: PaymentProviderDTO[] = json.payment_providers;

	const res2 = await fetch(`${MEDUSA_BACKEND_URL}/store/payment-collections`, {
		method: 'POST',
		credentials: 'include',
		headers: { ...MEDUSA_BASE_HEADER, 'Content-Type': 'application/json' },
		body: JSON.stringify({
			cart_id: parent_data.cart.id
		})
	});
	if (!res2.ok) {
		console.log(await res2.text());
		error(res2.status);
	}
	console.log(res2.status);
	const json2 = await res2.json();
	const payment_collection: PaymentCollectionDTO = json2.payment_collection;

	return {
		payment_providers,
		payment_collection
	};
};

export const actions = {
	set_payment_provider: async ({ fetch, request }) => {
		const formData = await request.formData();
		console.log(JSON.stringify(formData));
		const selected_payment_provider = formData.get('payment_provider_id');
		const payment_collection_id = formData.get('payment_collection_id');
		if (!selected_payment_provider) {
			return fail(400, { detail: 'Payment Provider ID unset' });
		}
		if (!payment_collection_id) return fail(400, { detail: 'Payment Collection ID unset' });
		if (!selected_payment_provider) return;
		const res = await fetch(
			`${MEDUSA_BACKEND_URL}/store/payment-collections/${payment_collection_id}/payment-sessions`,
			{
				method: 'POST',
				credentials: 'include',
				headers: { ...MEDUSA_BASE_HEADER, 'Content-Type': 'application/json' },
				body: JSON.stringify({
					provider_id: selected_payment_provider
				})
			}
		);
		if (!res.ok) {
			console.log(await res.text());
			error(res.status);
		}
		const payment_provider = pp_id_to_provider(selected_payment_provider);
		return redirect(307, `/shop/cart/payment/provider/${payment_provider}`);
	}
};
