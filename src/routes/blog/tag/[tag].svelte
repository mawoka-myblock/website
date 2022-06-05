<script context="module">
	export const load = async ({ params, fetch }) => {
		const res = await fetch(`https://pbe.mawoka.eu/api/v1/public/tags/${params.tag}?offset=0`);

		// A 404 status means "NOT FOUND"
		if (res.status === 404) {
			// We can create a custom error and return it.
			// SvelteKit will automatically show us an error page that we'll learn to customise later on.
			const error = new Error(`The post with ID ${params.slug} was not found`);
			return { status: 404, error };
		} else {
			const data = await res.json();
			return {
				props: {
					posts: data,
					tag: params.tag
				}
			};
		}
	};
</script>

<script>
	import PostList from '../../../lib/PostList.svelte';

	export let posts;
	export let tag;
</script>

<svelte:head><title>Mawoka's Blog - #{tag}</title></svelte:head>

<section class="section">
	<div class="container pt-12 text-center">
		<h1 class="text-8xl mt-6 marck-script">#{tag}</h1>
		<p class="text-xl mt-4">Every post with the #{tag}-tag!</p>
	</div>
</section>

<div class="container mx-auto mt-4">
	<PostList {posts} />

	<!-- <a href="https://g.co" class="link text-black">LOL</a> -->
</div>
