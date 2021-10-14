<script>
	import "../lib/flow-text.css"
</script>

<svelte:head>
	<title>About - Mawoka</title>
	<meta property="og:title" content="About - Mawoka" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
	<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
</svelte:head>

<main>
	<section class="section">
		<div class="container pt-12 text-center">
			<h1 class="text-8xl mt-6">About</h1>
			<p class="text-xl mt-4">Here you can learn something about me!</p>
		</div>
	</section>
	<section>
		<div class="block my-5">
			<div class="space-mobile my-3">
				<h3 class="text-5xl font-bold">Basic facts</h3>
				<p class="flow-text">
					I'm living in Oberhausen, Northrine-Westphalia in Germany and I still visit a school.
				</p>
			</div>
			<div class="my-3 space-mobile">
				<h3 class="text-5xl font-bold">Programming</h3>
				<p class="flow-text">
					I began programming in middle 2020. I started with Python and got better during the
					Corona-pandemic because of homeschooling. I started with Python and worked with it for a
					long time till now. I got started with <a href="https://fastapi.tiangolo.com">FastAPI</a>
					and porgrammed a vocab-learning-platform, with
					<a href="https://github.com/pywebio/PyWebIO">PyWebIO</a>
					too. Then I learned some Java in early 2021 and HTML/CSS/JavaScript. That's what I worked with
					for a bit. Then I discovered <a href="https://svelte.dev">Svelte</a>. Then I used Svelte
					iwth FastAPI and MongoDB and now I am a Junior-Full-Stack-Web-Developer.
				</p>
			</div>
		</div>
	</section>
</main>

<style lang="scss">


	.space-mobile {
		margin-left: 3rem;
		margin-right: 3rem;
	}
	@media only screen and (max-width: 600px) {
		.space-mobile {
			margin-left: 1rem;
			margin-right: 1rem;
		}
	}
</style>
