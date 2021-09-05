<script>
</script>

<main>
	<section class="section">
		<div class="container">
			<h1 class="title mt-6" style="color:beige;font-size: 500%;">About</h1>
			<p class="is-size-3" style="color: beige;">Here you can learn something about me!</p>
		</div>
	</section>
	<section>
		<div class="block">
			<div class="content has-text-centered space-mobile">
				<h3 class="is-size-3">Basic facts</h3>
				<p class="flow-text">
					I'm living in Oberhausen, Northrine-Westphalia in Germany and I still visit a school.
				</p>
			</div>
			<div class="content has-text-centered space-mobile">
				<h3 class="is-size-3">Programming</h3>
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
	@use "bulma/bulma.sass";
	@use "../lib/flow-text.scss";

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
