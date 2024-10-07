import { MEDUSA_BACKEND_URL, MEDUSA_BASE_HEADER } from '$lib/medusa.js';
import { error, redirect } from '@sveltejs/kit';
import type { CartDTO } from '@medusajs/types';

export const load = async ({ cookies, fetch, url }) => {
	const shopping_cart_id = cookies.get('shop_cart_id');
	if (!shopping_cart_id) {
		return redirect(307, `/shop?return_to=${url.pathname}`)
	}

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
	console.log(cart)
	return {
		cart
	};
};

