/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ url }) {
	const links = {
		1: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		2: 'https://netcup.de'
	};

	if (links[url.searchParams.get('token')] == undefined) {
		return {
			status: 404,
			body: 'WRONG TOKEN YOU IDIOT!'
		};
	} else {
		return {
			headers: {
				location: links[url.searchParams.get('token')]
			},
			body: {},
			status: 307
		};
	}
}
