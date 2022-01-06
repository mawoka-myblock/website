<script context="module">
	import '@fontsource/marck-script/index.css';
	import qs from "qs"
	import tippy from "sveltejs-tippy";
	// import atomOneLight from "svelte-highlight/src/styles/atom-one-light";
	import atelierForest from "svelte-highlight/src/styles/atelier-forest"

	export const load = async ({ params, fetch }) => {
		// The params object will contain all of the parameters in the route.

		// Now, we'll fetch the blog post from Strapi
		const query = qs.stringify({
			filters: {
				slug: {
					$eq: params.slug
				}
			}
		})
		const res = await fetch('https://strapi.myblock.eu.org/api/articles?' + query);

		// A 404 status means "NOT FOUND"
		if (res.status === 404) {
			// We can create a custom error and return it.
			// SvelteKit will automatically show us an error page that we'll learn to customise later on.
			const error = new Error(`The post with ID ${slug} was not found`);
			return { status: 404, error };
		} else {
			const data = await res.json();
			return { props: { post: data,  } };
		}
	};
</script>

<script>
	import { unified } from 'unified';
	import remarkParse from 'remark-parse';
	import remarkGfm from 'remark-gfm';
	import remarkGemoji from 'remark-gemoji'
	import remarkRehype from 'remark-rehype';
	import rehypeStringify from 'rehype-stringify';	
	import rehypeHighlight from 'rehype-highlight'
	import { DateTime } from "luxon";
	const processor = unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeStringify).use(remarkGemoji).use(rehypeHighlight);

	export let post;


	post = post.data[0]

	let content = processor.processSync(post.attributes.content).toString();
	post = post.attributes;
	const dt = DateTime.fromISO(post.updatedAt)
</script>

<svelte:head>
	<!-- {@html atomOneLight}	 -->
	{@html atelierForest}
</svelte:head>

<h1 class="text-center text-8xl marck-script">{post.title}</h1>
<span class="p-2"><p  class="text-center" use:tippy={{content: `In UNIX-Time (Seconds)
	: ${dt.toFormat("X")}`}}>{dt.toFormat("dd LLLL yyyy")}</p></span>

<article
	class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto mt-10 prose-pink text-yellow-50"
>
	{@html content}
</article>

<style lang="scss">
	body {
		color: beige
	}
	#text {
		color: beige;
	}
	.marck-script {
		font-family: 'Marck Script';
	}
</style>
