import { MEDUSA_BACKEND_URL, MEDUSA_BASE_HEADER } from '$lib/medusa';
import type { ProductCollectionDTO, ProductDTO } from '@medusajs/types';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	const res2 = await fetch(`${MEDUSA_BACKEND_URL}/store/products?tag_id[]=${params.handle}`, {
		headers: MEDUSA_BASE_HEADER
	});
    if (!res2.ok) {
		return error(500, 'Error communicating with backend');
	}
    const json2 = await res2.json();
	console.log(json2)
    const products: ProductDTO[] = json2?.products;
	if (!products || products.length === 0) {
		return error(404, 'Collection not found');
	}


	return {
	    products,
	}
};
