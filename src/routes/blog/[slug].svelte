<script context="module">
	import qs from 'qs';
	import { micromark } from 'micromark';
	import { gfm, gfmHtml } from 'micromark-extension-gfm';

	export const load = async ({ params, fetch }) => {
		const query = qs.stringify({
			filters: {
				slug: {
					$eq: params.slug
				}
			}
		});
		const res = await fetch('https://strapi.mawoka.eu/api/articles?' + query);

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
					post: data,
					slug: params.slug,
					content: micromark(data.data[0].attributes.content, {
						extensions: [gfm()],
						allowDangerousHtml: true,
						htmlExtensions: [gfmHtml()]
					})
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
	export let slug;
	export let content;
	// let content;

	post = post.data[0];
	// content = processor.processSync(post.attributes.content).toString();
	// content = marked.parse(post.attributes.content);

	post = post.attributes;
	const dt = DateTime.fromISO(post.updatedAt);
</script>

<svelte:head>
	<title>Mawoka's Blog - {post.title}</title>
	<meta name="description" content={post.description} />

	<meta property="og:url" content="https://mawoka.eu/blog/{slug}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Mawoka's Blog - {post.title}" />
	<meta property="og:description" content={post.description} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:domain" content="mawoka.eu" />
	<meta name="twitter:url" content="https://mawoka.eu/blog/{slug}" />
	<meta name="twitter:title" content="Mawoka's Blog - {post.title}" />
	<meta name="twitter:description" content={post.description} />
	<meta name="twitter:creator" content="@mawoka_" />
</svelte:head>

<h1 class="text-center text-8xl marck-script">{post.title}</h1>
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
	{@html content}
</article>

<style lang="scss">
	.marck-script {
		font-family: 'Marck Script';
	}
</style>
