<!-- <script>
	import '@fontsource/marck-script/index.css';

	let NavbarOpen = false;
	let BurgerOpen = false;

	const changeNavbar = () => {
		if (BurgerOpen) {
			BurgerOpen = false;
		} else {
			BurgerOpen = true;
		}
		if (NavbarOpen) {
			NavbarOpen = false;
		} else {
			NavbarOpen = true;
		}
		console.log(BurgerOpen, NavbarOpen);
	};
</script>

<div
	style="position: absolute; left: 0; top: 0; background: white; min-width: 100%; overflow-x: hidden; max-width: 100%; margin-right: 0; padding-left: 0;"
>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<strong class="marck-script">Mawoka</strong>
			</a>

			<a
				role="button"
				class="navbar-burger"
				aria-label="menu"
				aria-expanded="false"
				on:click={changeNavbar}
				class:is-active={BurgerOpen}
				href=""
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</a>
		</div>
		<div class="navbar-menu" class:is-active={NavbarOpen}>
			<div class="navbar-start">
				<a class="navbar-item" href="/projects"> Projects </a>
				<a class="navbar-item" href="/contact"> Contact </a>
				<a href="/things-i-do" class="navbar-item"> Stuff I do </a>
				<a href="/about" class="navbar-item"> About me </a>
			</div>
		</div>
	</nav>
</div> -->

<!--
	<div style="position: fixed; left: 0; top: 0; background: white; width: 100%; overflow-x: hidden;" class:transparent={!BurgerOpen}>
	<nav
		class="navbar"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<strong class="marck-script">Mawoka</strong>
			</a>

			<a
				role="button"
				class="navbar-burger"
				aria-label="menu"
				aria-expanded="false"
				on:click={changeNavbar}
				class:is-active={BurgerOpen}
				href=""
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</a>
		</div>
		<div class="navbar-menu" class:is-active={NavbarOpen} style="z-index: 2;">
			<div class="navbar-start">
				<a class="navbar-item" href="/projects"> Projects </a>
				<a class="navbar-item" href="/contact"> Contact </a>
				<a href="/things-i-do" class="navbar-item"> Stuff I do </a>
				<a href="/about" class="navbar-item"> About me </a>
			</div>
		</div>
	</nav>
</div>
-->

<script>
	import '@fontsource/marck-script/index.css';
	let openMenu = true;
	let closeMenu = false;
	let menuItems = false;
	const toggleMenu = () => {
		console.log(openMenu, closeMenu, menuItems);
		openMenu = !openMenu;
		closeMenu = !closeMenu;
		menuItems = !menuItems;
	};
</script>

<nav
	class="w-screen px-4 lg:px-10 py-2 flex flex-col lg:flex-row lg:items-center fixed navbar shadow-md z-50 top-0"
>
	<!-- Our logo and button -->
	<section class="w-full lg:w-max flex justify-between">
		<!-- Logo -->
		<a href="/" class="font-black tracking-tight text-xl text-black marck-script">Mawoka</a>

		<!-- Our open/close buttons -->
		<!-- Open menu -->
		<button class="lg:hidden" id="open-menu" on:click={toggleMenu} class:hidden={!openMenu}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				display="block"
				id="TextAlignJustified"
			>
				<path d="M3 6h18M3 12h18M3 18h18" />
			</svg>
		</button>

		<!-- Close menu -->
		<button class="hidden" id="close-menu" class:hidden={!closeMenu} on:click={toggleMenu}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="14"
				height="14"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
				display="block"
				id="Cross"
			>
				<path d="M20 20L4 4m16 0L4 20" />
			</svg>
		</button>
	</section>

	<!-- Our list of items -->
	<ul id="menu-items" class="lg:flex w-full flex-col lg:flex-row lg:pl-6" class:hidden={!menuItems}>
		<li class="py-2">
			<a
				class="text-lg font-medium lg:px-4 text-gray-600 hover:text-green-600"
				href="/projects">Projects</a
			>
		</li>
		<li class="py-2">
			<a
				class="text-lg font-medium lg:px-4 text-gray-600 hover:text-green-600"
				href="/contact">Contact</a
			>
		</li>
		<li class="py-2">
			<a
				class="text-lg font-medium lg:px-4 text-gray-600 hover:text-green-600"
				href="/things-i-do">Stuff I do</a
			>
		</li>
		<li class="py-2">
			<a
				class="text-lg font-medium lg:px-4 text-gray-600 hover:text-green-600"
				href="/about">About me</a
			>
		</li>
	</ul>
</nav>


<style lang="scss">

	.marck-script {
		font-family: 'Marck Script';
	}
	.navbar {
		background: rgba(255, 255, 255, 0.836);
	}
</style>
