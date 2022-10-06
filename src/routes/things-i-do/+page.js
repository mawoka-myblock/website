export async function load({ fetch }) {
	const response = await fetch('https://late-rice-4828.mawoka.workers.dev');
	let res = await response.json();

	res = res['data']['languages'];
	return {
		res
	};
}
