/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get(req) {
	const links = {
		1: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
	};

	if (links[req.query.get('token')] == undefined) {
		return {
			status: 404,
			body: 'WRONG TOKEN YOU IDIOT!'
		};
	} else {
		return {
			headers: {
				location: links[req.query.get('token')]
			},
			body: {},
			status: 307
		};
	}
}
