import { MEDUSA_BACKEND_URL, MEDUSA_BASE_HEADER } from '$lib/medusa.js';
import { error } from '@sveltejs/kit';
import type { CartDTO } from '@medusajs/types';

export const load = async ({ cookies, fetch, url }) => {
	const shopping_cart_id = cookies.get('shop_cart_id');

	const res = await fetch(
		`${MEDUSA_BACKEND_URL}/store/carts/${shopping_cart_id}?fields=+items,+items.thumbnail`,
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
	const cart: CartDTO = json.cart;
	return {
		cart
	};
};

