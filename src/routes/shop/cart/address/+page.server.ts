import { MEDUSA_BACKEND_URL, MEDUSA_BASE_HEADER } from '$lib/medusa.js';
import { fail, redirect } from '@sveltejs/kit';



export const actions = {
	default: async ({ request, fetch, cookies }) => {
		const cart_id = cookies.get('shop_cart_id');
		const d = await request.formData();
		const data = {
			first_name: d.get('first_name'),
			last_name: d.get('last_name'),
			address_1: d.get('address_1'),
			company: d.get('company'),
			postal_code: d.get('postal_code'),
			city: d.get('city'),
			country_code: d.get('country_code'),
			province: d.get('province'),
			phone: d.get('phone')
		};
		const res = await fetch(`${MEDUSA_BACKEND_URL}/store/carts/${cart_id}`, {
			credentials: 'include',
			method: 'POST',
			headers: {
				...MEDUSA_BASE_HEADER,
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({
				shipping_address: data,

				billing_address: data
			})
		});
		if (!res.ok) {
			const data = await res.json();
			return fail(res.status, data);
		}
        
        return redirect(307, "/shop/cart/shipping-selection")
        
	}
};