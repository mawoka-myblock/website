<script>
	import '../app.css';
	import '@fontsource/marck-script/index.css';
	import Navbar from '../lib/navbar.svelte';
	import { browser } from '$app/environment';
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

	if (browser) {
		// pathname.set(window.location.pathname);
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		// Whenever the user explicitly chooses light mode
		// 		localStorage.theme = 'light';
		//
		// // Whenever the user explicitly chooses dark mode
		// 		localStorage.theme = 'dark';
		//
		// // Whenever the user explicitly chooses to respect the OS preference
		// 		localStorage.removeItem('theme');
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
	:global(html:not(.dark)) {
		// height: 100%;
		// width: 100%;
		background-color: #d6edc9;
		background-size: cover;
		/*background: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%); */
		/*background: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%); */
		color: black;

		// background-size: 400% 400%;

		//animation: background_animation 5s ease infinite;
	}

	:global(html.dark) {
		//background-color: #0f2702;
		background-color: #4e6e58;
		background-size: cover;
		color: white;
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
