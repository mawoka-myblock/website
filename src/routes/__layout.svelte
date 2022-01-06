<script>
	import '../app.css';
	import '@fontsource/marck-script/index.css';
	// import "bulma/css/bulma.css"
	import Navbar from '../lib/navbar.svelte';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import 'nprogress/nprogress.css';
	const randomTagColor = () => {
		const colors = ['#009444', '#39b54a', '#8dc63f'];
		let index = Math.floor(Math.random() * colors.length);
		return colors[index];
	};
	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<svelte:head>
	<meta name="theme-color" content={randomTagColor()} />
</svelte:head>

<Navbar />
<div class="pt-12">
	<slot />
</div>

<style lang="scss">
	.marck-script {
		font-family: 'Marck Script';
	}

	:global(body) {
		background: linear-gradient(to right, #009444, #39b54a, #8dc63f);
		// height: 100%;
		// width: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		/*background: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%); */
		/*background: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%); */
		color: beige;
		background-size: 400% 400%;
		animation: background_animation 30s ease infinite;
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
</style>
