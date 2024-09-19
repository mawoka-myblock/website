import { MEDUSA_BACKEND_URL, MEDUSA_BASE_HEADER } from '$lib/medusa.js';
import { error, fail, redirect } from '@sveltejs/kit';
import type { ShippingOptionDTO, CartDTO } from '@medusajs/types';

export const load = async ({ cookies, fetch, url }) => {
	const shopping_cart_id = cookies.get('shop_cart_id');

	const res = await fetch(
		`${MEDUSA_BACKEND_URL}/store/shipping-options?cart_id=${shopping_cart_id}`,
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
	const shipping_options: ShippingOptionDTO[] = json.shipping_options;
	return {
		shipping_options,
	};
};

export const actions = {
	default: async ({ request, fetch, cookies }) => {
		const cart_id = cookies.get('shop_cart_id');
		const d = await request.formData();
		const shipping_method_id = d.get('shipping_method');
		if (!shipping_method_id) {
			return fail(400, { detail: 'shipping_id not provided' });
		}
		const res = await fetch(`${MEDUSA_BACKEND_URL}/store/carts/${cart_id}/shipping-methods`, {
			method: 'POST',
			credentials: 'include',
			headers: { ...MEDUSA_BASE_HEADER, 'Content-Type': 'application/json' },
			body: JSON.stringify({
				option_id: shipping_method_id
			})
		});
		if (!res.ok) {
			const text = await res.text();
			console.log(text);
			return fail(res.status);
		}
		return redirect(307, '/shop/cart/payment');
	}
};
