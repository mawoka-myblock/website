<script lang="ts">
	import type { ProductDTO } from '@medusajs/types';

	export let products: ProductDTO[];
	console.log(products);
</script>

<section class="grid lg:grid-cols-3 grid-cols-1 m-12 gap-4">
	{#each products as product}
		<div class="m-2 bg-white/40 h-full rounded-lg shadow-md flex flex-col gap-2">
			<h3 class="mx-auto text-2xl">{product.title}</h3>
			<img
				src={product.thumbnail}
				class="h-32 w-32 mx-auto rounded shadow-2xl hover:grayscale transition"
				alt="Image of {product.title}"
			/>
			{#if product.variants.length}
				<p class="flex justify-center">{product.variants.length} Variants available</p>
			{/if}

			{#if product.collection?.handle}
				<div class="flex justify-center">
					<p>
						Part of the <a
							href="/shop/collection/{product.collection.handle}"
							class="underline hover:decoration-dotted transition-all"
							>{product.collection.title}</a
						> collection
					</p>
				</div>
			{/if}
			<div class="flex justify-center">
				{#each product.tags as tag}<a
						href="/shop/tag/{tag.id}"
						class="inline-block bg-[#B07156] rounded-full px-3 py-1 text-sm text-black mr-2 mb-2"
						>#{tag.value}</a
					>{/each}
			</div>
			<a
				href="/shop/item/{product.handle}"
				class="mx-auto mt-auto mb-4 flex items-center gap-2 p-1.5 bg-[#B07156] rounded hover:bg-opacity-80 duration-200 outline-none disabled:opacity-60 transition w-1/3 justify-center "
				>View</a
			>
		</div>
	{/each}
</section>
