// eslint-disable-next-line ParseError
import type { PageLoad } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('https://pbe.mawoka.eu/api/v1/public/posts?offset=0&origin=*');
	const data = await res.json();

	return { posts: data };
};
