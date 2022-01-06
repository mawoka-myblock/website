<script>
	//import '../assets/font.css';
	import '../lib/flow-text.css';
	import '@fontsource/marck-script/index.css';
	import Link from '../lib/Link.svelte';
</script>

<svelte:head>
	<title>Home - Mawoka</title>
</svelte:head>

<main>
	<section class="section">
		<div class="container pt-12 text-center">
			<h1 class="" style="color:beige;font-size: 500%;">
				Hello, I'm <span class="marck-script">Mawoka</span>. <span class="hand">👋</span>
			</h1>
		</div>
	</section>
	<section>
		<div class="container lg:px-96 px-8">
			<p class="flow-text">
				Nice to meet you here. I build stuff and I got a list of them, <Link
					href="/projects">here</Link
				>. If you're interested in what I'm spending my time on, you can see that <Link
					href="/things-i-do">here</Link
				>. I also self-host things like <Link
					href="https://tasks.mawoka.eu.org"
					nofollow={true}>Vikunja</Link
				>, <Link href="https://doc.mawoka.eu.org" nofollow={true}>HedgeDoc</Link>
			</p>
		</div>
	</section>
</main>

<style lang="scss">
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
	.marck-script {
		font-family: 'Marck Script';
	}
	.hand {
		animation-name: wave-animation;
		animation-duration: 2.5s;
		animation-iteration-count: infinite;
		transform-origin: 80% 80%;
		display: inline-block;
	}
	@keyframes wave-animation {
		0% {
			transform: rotate(0deg);
		}

		10% {
			transform: rotate(14deg);
		}

		20% {
			transform: rotate(-8deg);
		}

		30% {
			transform: rotate(14deg);
		}

		40% {
			transform: rotate(-4deg);
		}

		50% {
			transform: rotate(10deg);
		}

		60% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(0deg);
		}
	}
</style>
