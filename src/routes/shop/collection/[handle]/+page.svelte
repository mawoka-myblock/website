<script lang="ts">
	import type { PageData } from './$types';
	import ProductDisplay from '$lib/ProductDisplay.svelte';

	export let data: PageData;
	console.log(data.collection);
</script>

<section>
	<h1 class="text-center text-5xl">Products</h1>
	<div class="flex justify-center">
		<p>Curated products from the {data.collection.title}</p>
	</div>
</section>

<ProductDisplay products={data.products} />
