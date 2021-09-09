<script>
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
</div>

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
<style lang="scss">
	@use "bulma/bulma.sass";

	.marck-script {
		font-family: 'Marck Script';
	}
</style>
