import { MEDUSA_BACKEND_URL, MEDUSA_BASE_HEADER } from '$lib/medusa';
import type { CartDTO, PaymentCollectionDTO } from '@medusajs/types';
import { error, fail } from '@sveltejs/kit';

export const load = async ({ fetch, parent, cookies }) => {
    const parent_data = await parent()
    
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
	const json2 = await res2.json();
	const payment_collection: PaymentCollectionDTO = json2.payment_collection;
    return {
        payment_collection
    }
};
