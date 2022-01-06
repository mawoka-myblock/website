<script>
	import TelegramSVG from '../assets/telegram.svg';
	import ThreemaSVG from '../assets/threema.svg';
	import MatrixSVG from '../assets/matrix.svg';
	import RedditSVG from '../assets/reddit.svg';
	import MastodonSVG from '../assets/mastodon.svg';
</script>

<svelte:head>
	<title>Contact - Mawoka</title>
</svelte:head>

<main>
	<section class="section">
		<div class="container pt-12 text-center">
			<h1 class="text-8xl mt-6 marck-script">Contact</h1>
			<p class="text-xl mt-4">You can get in touch with me in many ways!</p>
		</div>
	</section>

	<div class="grid grid-cols-2 gap-4 pt-8">
		<div>
			<h1 class="text-3xl text-center">Contact</h1>
			<div class="mt-4 center">
				<a
					href="https://threema.id/JPMH8MDV"
					on:click={() => {
						plausible('Contact', { props: { media: 'Threema' } });
					}}
				>
					<span class="icon-text">
						<span class="icon">
							<img src={ThreemaSVG} alt="Threema Icon" />
						</span>
					</span>
					<p>Threema</p>
				</a>
			</div>
			<div class="mt-4 center">
				<a
					href="https://matrix.to/#/@mawoka:matrix.org"
					on:click={() => {
						plausible('Contact', { props: { media: 'Matrix' } });
					}}
				>
					<span class="icon-text">
						<span class="icon">
							<img src={MatrixSVG} alt="Matrix Icon" />
						</span>
					</span>
					<p>Matrix</p>
				</a>
			</div>
			<div class="mt-4 center">
				<a
					href="https://t.me/mawokag"
					on:click={() => {
						plausible('Contact', { props: { media: 'Telegram' } });
					}}
				>
					<span class="icon-text">
						<span class="icon">
							<img src={TelegramSVG} alt="Telegram Icon" />
						</span>
					</span>
					<p>Telegram</p>
				</a>
			</div>
		</div>
		<div>
			<h1 class="text-3xl text-center">Social</h1>
			<div class="mt-4 center">
				<a
					href="https://reddit.com/u/Mawoka"
					on:click={() => {
						plausible('Contact', { props: { media: 'Reddit' } });
					}}
				>
					<span class="icon-text">
						<span class="icon">
							<img src={RedditSVG} alt="Reddit Icon" />
						</span>
					</span>
					<p>Reddit</p>
				</a>
			</div>
			<div class="mt-4 center">
				<a
					href="https://mastodon.online/invite/Mhw5dbRx"
					on:click={() => {
						plausible('Contact', { props: { media: 'Mastodon' } });
					}}
				>
					<span class="icon-text">
						<span class="icon">
							<img src={MastodonSVG} alt="Mastodon Icon" />
						</span>
					</span>
					<p>Mastodon</p>
				</a>
			</div>
		</div>
	</div>

	<!-- <div class="columns mr-3 ml-3">
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
	</div> -->
</main>

<style lang="scss">
	@mixin icon() {
		color: black;
		transition: all 0.5s ease-in-out;
	}
	@mixin icon-hover($color: black) {
		color: $color;
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
