<script lang="ts">
	import { onMount } from 'svelte';

	let search_query = '';
	import { fade } from 'svelte/transition';

	let search_results = [];

	const search = async () => {
		const url = new URLSearchParams(window.location.search);
		if (search_query === '') {
			search_results = [];
			url.delete('q');
		} else {
			const res = await fetch(
				`https://pbe.mawoka.eu/api/v1/public/search?query=${search_query}`
			);
			search_results = await res.json();
			url.set('q', search_query);
		}
		history.pushState(null, null, '?' + url.toString());
		// window.location.search = url.toString()
	};

	onMount(() => {
		const url = new URLSearchParams(window.location.search);
		search_query = url.get('q') ?? '';
		search();
	});
</script>

<div class="pt-16">
	<div class="flex justify-center">
		<input
			type="search"
			placeholder="Search..."
			class="w-9/12 text-center text-2xl h-14 text-black rounded-lg outline-none"
			bind:value={search_query}
			on:input={search}
		/>
	</div>
	<div class="flex justify-center w-full">
		{#if search_results.length !== 0}
			<ul class="w-9/12">
				{#each search_results as post}
					<li transition:fade={{ duration: 200 }}>
						<a href="/blog/{post.slug}">
							<div
								class="cursor-pointer px-6 py-2 my-8 hover:backdrop-blur-md hover:bg-white/30 transition rounded-lg w-full"
							>
								<p><span><b>{post.title}</b>: {post.intro}</span></p>
								<span class="pt-1"
									>{#each post.tags as tag}
										<a
											href="/blog/tag/{tag}"
											class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
											>#{tag}</a
										>{/each}
								</span>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
