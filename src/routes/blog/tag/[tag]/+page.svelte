<script>

	import PostList from '$lib/PostList.svelte';
	export let data
	let posts = data.posts;
	let tag = data.tag;
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
