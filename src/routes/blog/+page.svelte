<script>
	import PostList from '$lib/PostList.svelte';

	export let data;
</script>

<svelte:head><title>Mawoka's Blog</title></svelte:head>

<section class="section">
	<div class="container pt-12 text-center">
		<h1 class="text-8xl mt-6 marck-script">Blog</h1>
		<p class="text-xl mt-4">Here I write stuff!</p>
	</div>
</section>

<div class="container mx-auto mt-4">
	<PostList posts={data.posts} />

	<!-- <a href="https://g.co" class="link text-black">LOL</a> -->
</div>

<!-- <style lang="scss">
	.link {
		text-decoration: none;
		color: #111111;
		text-decoration: none;
		//background-image: -webkit-gradient(linear, left top, left bottom, from(#fef5df), to(#fef5df));
		//background-image: linear-gradient(to bottom, #fef5df 0%, #fef5df 100%);
		background: rgb(0, 212, 255);
		background: linear-gradient(
			128deg,
			rgba(0, 212, 255, 1) 15%,
			rgba(190, 190, 190, 1) 20%,
			rgba(0, 212, 255, 1) 25%,
			rgba(0, 212, 255, 1) 100%
		);
		background-repeat: no-repeat;
		background-size: 100% 0;
		background-position: 0 111%;
		-webkit-transition: background-size 0.25s ease-in;
		transition: background-size 0.25s ease-in;
		padding: 2px 2px 0px 0;
		border-bottom: 2px solid #e2ddca;
		-webkit-transition: all 0.3s;
		transition: all 0.3s;
		border-bottom-color: transparent;
		//animation: background_animation 3s ease infinite;
	}
	@keyframes background_animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	.link:hover {
		background-size: 100% 100%;
		cursor: pointer;
		border-bottom: 2px solid #f8cd5f;
		animation: background_animation 3s ease infinite;
	}
</style> -->
