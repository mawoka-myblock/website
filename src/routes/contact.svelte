<script>
	import TelegramSVG from "$lib/assets/telegram.svg"
	import ThreemaSVG from "$lib/assets/threema.svg"
	import MatrixSVG from "$lib/assets/matrix.svg"
	import RedditSVG from "$lib/assets/reddit.svg"
	import MastodonSVG from "$lib/assets/mastodon.svg"
</script>
<svelte:head>
	<title>Contact - Mawoka</title>
</svelte:head>

<main>
	<section class="section">
		<div class="container">
			<h1 class="title mt-6" style="color:beige;font-size: 500%;">Contact</h1>
			<p class="is-size-3" style="color: beige;">You can get in touch with me in many ways!</p>
		</div>
	</section>

	<div class="columns mr-3 ml-3">
		<div class="column">
			<h2 class="is-size-2 center">Social</h2>
			<div class="mt-4 is-size-4 center">
				<span class="icon-text">
					<span class="icon">
						<img src="{RedditSVG}" alt="Reddit Icon" />
					</span>
					<a href="https://reddit.com/u/Mawoka">Reddit</a>
				</span>
			</div>
			<div class="mt-4 is-size-4 center">
				<span class="icon-text">
					<span class="icon">
						<img src="{MastodonSVG}" alt="Mastodon Icon" />
					</span>
					<a href="https://mastodon.online/invite/Mhw5dbRx">Mastodon</a>
				</span>
			</div>
		</div>
		<div class="column">
			<h2 class="is-size-2 center">Contact</h2>
			<div class="mt-4 is-size-4 center">
				<span class="icon-text">
					<span class="icon">
						<img src="{ThreemaSVG}" alt="Threema Icon" />
					</span>
					<a href="https://threema.id/JPMH8MDV">Threema</a>
				</span>
			</div>
			<div class="mt-4 is-size-4 center">
				<span class="icon-text">
					<span class="icon">
						<img src="{MatrixSVG}" alt="Matrix Icon" />
					</span>
					<a href="https://matrix.to/#/@mawoka:matrix.org">Matrix</a>
				</span>
			</div>
			<div class="mt-4 is-size-4 center">
				<span class="icon-text">
					<span class="icon">
						<img src="{TelegramSVG}" alt="Telegram Icon" />
					</span>
					<a href="https://t.me/mawoka">Telegram</a>
				</span>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	@use "bulma/bulma.sass";
	@mixin icon() {
		color: black;
		transition: all 0.5s ease-in-out;
	}
	@mixin icon-hover($color: black) {
		color: $color;
	}

	.reddit-icon {
		@include icon();
	}
	.reddit-icon:hover {
		@include icon-hover($color: #ff4500);
	}
	.center {
		display: flex;
		justify-content: center;
	}

	a {
		color: beige;
		text-decoration: underline;
		transition: all 0.5s ease-in-out;
	}

	a:hover {
		text-decoration: none;
		color: black;
	}
</style>
