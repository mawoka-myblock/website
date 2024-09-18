<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData

</script>


<section>
    <h1 class="text-center text-5xl">Products</h1>
</section>

<section class="grid grid-cols-3 m-12">
    {#each data.products as product}
        <div class="m-2 bg-black/60 h-full rounded-lg shadow-md">
            <h3>{product.title}</h3>
            <img src={product.thumbnail} class="h-33 w-32">
            <a href="/shop/item/{product.handle}">View</a>
        </div>

    {/each}

</section>