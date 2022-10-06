import { json } from '@sveltejs/kit';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ url }) {
	const links = {
		1: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		2: 'https://netcup.de'
	};

	if (links[url.searchParams.get('token')] == undefined) {
		return new Response('WRONG TOKEN YOU IDIOT!', { status: 404 });
	} else {
		return json({}, {
			status: 307,
			headers: {
				location: links[url.searchParams.get('token')]
			}
		});
	}
}
