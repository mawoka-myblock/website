import medusa, { MEDUSA_BACKEND_URL, MEDUSA_PUBLISHABLE_API_KEY } from '$lib/medusa';
import type { ProductDTO } from '@medusajs/types';
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ params, cookies, fetch, url }) => {
    const region_id = cookies.get('shop_region_id')
    if (!region_id) {
        redirect(307, `/shop?return_to=${url.pathname}`)
    }
	const queryParams = new URLSearchParams({
		fields: `*variants.calculated_price,+variants.inventory_quantity`,
		region_id,
		handle: params.id
	});
	const req = await fetch(`${MEDUSA_BACKEND_URL}/store/products?${queryParams.toString()}`, {
		credentials: 'include',
		headers: {
			'x-publishable-api-key': MEDUSA_PUBLISHABLE_API_KEY
		}
	});
    if (req.status === 404) {
        throw error(404)
    }
    const json = await req.json()
	const product: ProductDTO = json.products[0];
    console.log(json)
	return {
		product, region_id
	};
};
