import medusa from '$lib/medusa';

export const load = async ({ cookies }) => {
	const region_cookie = cookies.get('shop_region_id')
	let regions = undefined;
	if (!region_cookie) {
		regions = (await medusa.regions.list()).regions;
	}
	let cart_id = cookies.get("shop_cart_id")
	if (!cart_id && region_cookie) {
		cart_id = (await medusa.carts.create({region_id: region_cookie})).cart.id
	}

	return {
		region_cookie,
		cart_id,
		regions
	};
};
