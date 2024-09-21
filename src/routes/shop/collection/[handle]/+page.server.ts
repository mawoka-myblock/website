import { MEDUSA_BACKEND_URL, MEDUSA_BASE_HEADER } from '$lib/medusa';
import type { ProductCollectionDTO, ProductDTO } from '@medusajs/types';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	const res = await fetch(`${MEDUSA_BACKEND_URL}/store/collections?handle=${params.handle}`, {
		headers: MEDUSA_BASE_HEADER
	});
	if (!res.ok) {
		return error(500, 'Error communicating with backend');
	}
	const json = await res.json();
	
	const collections: ProductCollectionDTO[] = json?.collections;
	if (!collections || collections.length === 0) {
		return error(404, 'Collection not found');
	}
    const collection = collections[0]

	const res2 = await fetch(`${MEDUSA_BACKEND_URL}/store/products?collection_id[]=${collection.id}`, {
		headers: MEDUSA_BASE_HEADER
	});
    if (!res.ok) {
		return error(500, 'Error communicating with backend');
	}
    const json2 = await res2.json();
    const products: ProductDTO[] = json2?.products;
	if (!products || products.length === 0) {
		return error(404, 'Collection not found');
	}


	return {
	    products,
        collection
	}
};
