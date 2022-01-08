<script context="module">
	import '@fontsource/marck-script/index.css';
	import qs from 'qs';
	import tippy from 'sveltejs-tippy';
	// import atomOneLight from "svelte-highlight/src/styles/atom-one-light";
	import atelierForest from 'svelte-highlight/src/styles/atelier-forest';

	export const load = async ({ params, fetch }) => {
		// The params object will contain all of the parameters in the route.

		// Now, we'll fetch the blog post from Strapi
		const query = qs.stringify({
			filters: {
				slug: {
					$eq: params.slug
				}
			}
		});
		const res = await fetch('https://strapi.myblock.eu.org/api/articles?' + query);

		// A 404 status means "NOT FOUND"
		if (res.status === 404) {
			// We can create a custom error and return it.
			// SvelteKit will automatically show us an error page that we'll learn to customise later on.
			const error = new Error(`The post with ID ${params.slug} was not found`);
			return { status: 404, error };
		} else {
			const data = await res.json();
			return { props: { post: data, slug: params.slug } };
		}
	};
</script>

<script>
	import { unified } from 'unified';
	import remarkParse from 'remark-parse';
	import remarkGfm from 'remark-gfm';
	import remarkGemoji from 'remark-gemoji';
	import remarkRehype from 'remark-rehype';
	import rehypeStringify from 'rehype-stringify';
	import rehypeHighlight from 'rehype-highlight';
	import { DateTime } from 'luxon';
	import python from 'highlight.js/lib/languages/python';
	import javascript from 'highlight.js/lib/languages/javascript';
	import bash from 'highlight.js/lib/languages/bash';
	import diff from 'highlight.js/lib/languages/diff';
	import go from 'highlight.js/lib/languages/go';
	import ini from 'highlight.js/lib/languages/ini';
	import json from 'highlight.js/lib/languages/json';
	import markdown from 'highlight.js/lib/languages/markdown';
	import rust from 'highlight.js/lib/languages/rust';
	import shell from 'highlight.js/lib/languages/shell';
	import typescript from 'highlight.js/lib/languages/typescript';
	import xml from 'highlight.js/lib/languages/xml';
	import "$lib/hljs.css"
	import yaml from 'highlight.js/lib/languages/yaml';
	const processor = unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkRehype)
		.use(rehypeStringify)
		.use(remarkGemoji)
		.use(rehypeHighlight, {
			languages: {
				javascript,
				python,
				bash,
				diff,
				go,
				ini,
				json,
				markdown,
				rust,
				shell,
				typescript,
				xml,
				yaml
			}
		});

	export let post;
	export let slug;
	let content;

	post = post.data[0];
	content = processor.processSync(post.attributes.content).toString();

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
	<!-- <meta name="twitter:image" content="https://www.byeindonesia.com/og-bye-indonesia.png" /> -->
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
