import { error } from '@sveltejs/kit'

export const load = async ({ params, fetch }) => {
	const res = await fetch('https://pbe.mawoka.eu/api/v1/public/rendered?slug=' + params.slug);

	// A 404 status means "NOT FOUND"
	if (res.status === 404) {
		// We can create a custom error and return it.
		// SvelteKit will automatically show us an error page that we'll learn to customise later on.
		throw error(404, `The post with ID ${params.slug} was not found`)
	} else {
		const data = await res.json();
		return {
			post: data
		};
	}
};
