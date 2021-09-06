<script>
	//import '../assets/font.css';
	import '@fontsource/marck-script/index.css';
</script>
<svelte:head>
	<title>Home - Mawoka</title>
</svelte:head>

<main>
	<section class="section">
		<div class="container">
			<h1 class="title mt-6" style="color:beige;font-size: 500%;">
				Hello, I'm <span class="marck-script">Mawoka</span>. <span class="hand">👋</span>
			</h1>
			<p class="is-size-3" style="color: beige;">How are you?</p>
		</div>
	</section>
	<section class="columns mr-3 ml-3">
		<div class="column is-size-1">
			<div class="container center">
				<a href="/projects">Projects</a>
			</div>
		</div>
		<div class="column is-size-1">
			<div class="container center">
				<a href="/contact">Contact</a>
			</div>
		</div>
	</section>
</main>

<style lang="scss">
	@use "bulma/bulma.sass";
	.center {
		display: flex;
		justify-content: center;
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
