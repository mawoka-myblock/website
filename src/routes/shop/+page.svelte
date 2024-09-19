<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
    console.log(data.products)
</script>

<section>
	<h1 class="text-center text-5xl">Products</h1>
</section>

<section class="grid grid-cols-3 m-12">
	{#each data.products as product}
		<div class="m-2 bg-black/60 h-full rounded-lg shadow-md flex flex-col gap-2">
			<h3 class="mx-auto text-2xl">{product.title}</h3>
			<img src={product.thumbnail} class="h-32 w-32 mx-auto rounded shadow hover:grayscale transition" alt="Image of {product.title}" />
			<a href="/shop/item/{product.handle}" class="mx-auto flex items-center gap-2 p-1.5 border rounded-lg bg-white/10 hover:bg-white/30 transition w-1/3 justify-center"
				>View</a
			>
		</div>
	{/each}
</section>
