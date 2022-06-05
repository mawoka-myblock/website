<script>
	export let posts;
</script>

{#each posts as post}
	<a href="/blog/{post.slug}">
		<div
			class="cursor-pointer px-6 py-2 my-8 hover:backdrop-blur-md hover:bg-white/30 transition rounded-lg"
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
{/each}
