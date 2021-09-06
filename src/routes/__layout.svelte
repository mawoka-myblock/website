<script>
	import Navbar from '../lib/navbar.svelte';
	const randomTagColor = () => {
		const colors = ['#009444', '#39b54a', '#8dc63f'];
		let index = Math.floor(Math.random() * colors.length);
		return `is-${colors[index]}`;
	};
</script>
<svelte:head>
	<meta name="theme-color" content={randomTagColor}/>
</svelte:head>

<Navbar />
<slot />

<style lang="scss">
	:global(body) {
		overflow-x: hidden;
		background: linear-gradient(to right, #009444, #39b54a, #8dc63f);
		height: 100%;
		width: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		/*background: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%); */
		/*background: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%); */
		color: beige;
		background-size: 400% 400%;
		animation: background_animation 15s ease infinite;
	}
	$table-row-hover-background-color: #009444;
</style>
