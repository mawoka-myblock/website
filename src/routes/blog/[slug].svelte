<script context="module">
	export const load = async ({ params, fetch }) => {
		const res = await fetch('https://pbe.mawoka.eu/api/v1/public/rendered?slug=' + params.slug);

		// A 404 status means "NOT FOUND"
		if (res.status === 404) {
			// We can create a custom error and return it.
			// SvelteKit will automatically show us an error page that we'll learn to customise later on.
			const error = new Error(`The post with ID ${params.slug} was not found`);
			return { status: 404, error };
		} else {
			const data = await res.json();
			return {
				props: {
					post: data
				}
			};
		}
	};
</script>

<script>
	import { DateTime } from 'luxon';
	import { onMount } from 'svelte';
	import hljs from 'highlight.js/lib/common';
	import tippy from 'sveltejs-tippy';
	import '@fontsource/marck-script/index.css';

	onMount(() => {
		hljs.highlightAll();
	});

	import '$lib/hljs.css';
	// import yaml from 'highlight.js/lib/languages/yaml';
	// import { marked } from 'marked';

	export let post;
	// let content;

	// content = processor.processSync(post.attributes.content).toString();
	// content = marked.parse(post.attributes.content);

	const dt = DateTime.fromISO(post.metadata.updated_at);
</script>

<svelte:head>
	<title>Mawoka's Blog - {post.title}</title>
	<meta name="description" content={post.metadata.description} />

	<meta property="og:url" content="https://mawoka.eu/blog/{post.metadata.slug}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Mawoka's Blog - {post.title}" />
	<meta property="og:description" content={post.description} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:domain" content="mawoka.eu" />
	<meta name="twitter:url" content="https://mawoka.eu/blog/{post.metadata.slug}" />
	<meta name="twitter:title" content="Mawoka's Blog - {post.metadata.title}" />
	<meta name="twitter:description" content={post.metadata.intro} />
	<meta name="twitter:creator" content="@mawoka_" />
</svelte:head>

<h1 class="text-center text-8xl marck-script">{post.metadata.title}</h1>
<span class="p-2"
	><p
		class="text-center"
		use:tippy={{
			content: `In UNIX-Time (Seconds)
	: ${dt.toFormat('X')}`
		}}
	>
		{dt.toFormat('dd LLLL yyyy')}
	</p></span
>

<article
	class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto mt-10 prose-pink text-yellow-50 px-4"
>
	{@html post.content}
</article>

<style lang="scss">
	.marck-script {
		font-family: 'Marck Script';
	}
</style>
