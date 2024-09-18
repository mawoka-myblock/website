<script lang="ts">
	import '@fontsource/marck-script/index.css';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';
	import { draw, slide } from 'svelte/transition';

	let menuIsClosed = true;
	const toggleMenu = () => {
		menuIsClosed = !menuIsClosed;
	};

	beforeNavigate(() => {
		menuIsClosed = true; // Closes menu to let the user see the page beneath
	});

	let darkMode = false;
	let cart_visible = $page.url.pathname.startsWith('/shop/') ? true : false;
	$: cart_visible = $page.url.pathname.startsWith('/shop/') ? true : false;

	if (browser) {
		darkMode =
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches);
	}

	const switchDarkMode = () => {
		!darkMode ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
		window.location.reload();
	};
</script>

<nav class="w-screen px-4 py-2 fixed backdrop-blur-2xl bg-white/70 shadow-md z-30 top-0">
	<!-- Desktop navbar -->
	<div class="hidden lg:flex lg:items-center lg:flex-row lg:justify-between">
		<div class="lg:flex lg:items-center lg:flex-row gap-1">
			<a
				href="/"
				class="font-black tracking-tight text-xl lg:text-2xl text-black marck-script link-hover px-3"
				>Mawoka</a
			>
			<a class="btn-nav" href="/projects">Projects</a>
			<a class="btn-nav" href="/contact">Contact</a>
			<a class="btn-nav" href="/things-i-do">Stuff I do</a>
			<a class="btn-nav" href="/about">About me</a>
			<a class="btn-nav" href="/blog">Blog</a>
		</div>
		<div class="lg:flex lg:items-center lg:flex-row gap-2">
			<a href="/shop/cart" class="text-black flex flex-row gap-2 border-2 border-black/60 dark:border-white p-1.5 rounded-lg bg-black/20 hover:bg-black/10 transition"
				><span>Cart</span> <svg
					class="inline-block w-6 h-6 my-auto"
					data-slot="icon"
					aria-hidden="true"
					fill="none"
					stroke-width="1.5"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
				</svg></a
			>

			<div class="fit-content flex items-center justify-center gap-2">
				<div class="lg:flex items-center justify-center">
					{#if darkMode}
						<button
							on:click={() => {
								switchDarkMode();
							}}
							aria-label="Activate light mode"
						>
							<!-- Heroicons: sun -->
							<svg
								class="w-6 h-6 text-black"
								fill="none"
								aria-label="Sun-Icon"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									stroke="currentColor"
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
						</button>
					{:else}
						<button
							on:click={() => {
								switchDarkMode();
							}}
							aria-label="Activate darkmode"
						>
							<!-- Heroicons: moon -->
							<svg
								aria-label="Moon-Icon"
								class="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								/>
							</svg>
						</button>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile navbar -->
	<div class="lg:hidden">
		<!-- Navbar header -->
		<div class="flex items-center justify-between">
			<a
				href="/"
				class="font-black tracking-tight text-xl lg:text-2xl text-black marck-script link-hover px-3 lg:px-5"
				>Mawoka</a
			>

			<!-- Dark/Light mode toggle + Open/Close menu -->
			<div class="flex items-center">
				<a href="/shop/cart"
					><svg
						class="inline-block w-6 h-6 text-black"
						data-slot="icon"
						aria-hidden="true"
						fill="none"
						stroke-width="1.5"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg></a
				>
				{#if darkMode}
					<!-- Sun icon -->
					<button
						class="px-3"
						on:click={() => {
							switchDarkMode();
						}}
						aria-label="Activate light mode"
					>
						<!-- Heroicons: sun -->
						<svg
							class="w-6 h-6 text-black"
							fill="none"
							aria-label="Sun-Icon"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								stroke="currentColor"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					</button>
				{:else}
					<!-- Moon icon -->
					<button
						class="px-3"
						on:click={() => {
							switchDarkMode();
						}}
						aria-label="Activate darkmode"
					>
						<!-- Heroicons: moon -->
						<svg
							aria-label="Moon-Icon"
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					</button>
				{/if}

				{#if menuIsClosed}
					<button
						class="px-3"
						id="open-menu"
						on:click={toggleMenu}
						aria-label="Open navbar"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#000000"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M3 6h18M3 12h18M3 18h18" />
						</svg>
					</button>
				{:else}
					<button
						class="px-3"
						id="close-menu"
						on:click={toggleMenu}
						aria-label="Close navbar"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#000000"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path in:draw={{ duration: 300 }} d="M18 6 6 18" /><path
								in:draw={{ duration: 300 }}
								d="m6 6 12 12"
							/></svg
						>
					</button>
				{/if}
			</div>
		</div>

		<!-- Navbar content -->
		{#if !menuIsClosed}
			<div class="flex flex-col" transition:slide={{ duration: 400 }}>
				<a class="btn-nav" href="/projects">Projects</a>
				<a class="btn-nav" href="/contact">Contact</a>
				<a class="btn-nav" href="/things-i-do">Stuff I do</a>
				<a class="btn-nav" href="/about">About me</a>
				<a class="btn-nav" href="/blog">Blog</a>
			</div>
		{/if}
	</div>
</nav>

<style lang="scss">
	.marck-script {
		font-family: 'Marck Script';
	}
</style>
