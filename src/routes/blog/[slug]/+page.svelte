<script lang="ts">

	import { DateTime } from 'luxon';
	import { onMount } from 'svelte';
	import hljs from 'highlight.js/lib/common';
	import tippy from 'sveltejs-tippy';
	import '@fontsource/marck-script/index.css';

	onMount(() => {
		hljs.highlightAll();
	});

	import '$lib/hljs.css';
	import Hoverable from '../../../lib/Hoverable.svelte';

	export let data;

	let post = data.post

	let FeedBackButtonsHovered = {
		dislike: false,
		like: false
	};

	const submitFeedback = async (like: boolean): Promise<void> => {
		let feedback_text = undefined;
		if (!like) {
			feedback_text = prompt("What don't you like?");
			if (feedback_text === '') {
				feedback_text = undefined;
			}
		}
		const res = await fetch('https://pbe.mawoka.eu/api/v1/feedback/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				thumbs_up: like,
				post_slug: post.metadata.slug,
				feedback: feedback_text
			})
		});
		if (res.status === 200) {
			alert('Your feedback has been recorded!');
			window.location.reload();
			return;
		}
		if (res.status === 409) {
			alert('Only 1 vote per IP-address per post is allowed!');
			return;
		}
	};

	const dt = DateTime.fromISO(post.metadata.updated_at);
</script>

<svelte:head>
	<title>Mawoka's Blog - {post.metadata.title}</title>
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

<h1 class="text-center text-8xl marck-script pt-14">{post.metadata.title}</h1>
<div class="flex justify-center">
	<span
		class="p-2"
		use:tippy={{
			content: `In UNIX-Time (Seconds)
	: ${dt.toFormat('X')}`
		}}
	>
		{dt.toFormat('dd LLLL yyyy')}
	</span>
</div>
<div class="flex justify-center">
	{#each post.metadata.tags as tag}
		<a
			href="/blog/tag/{tag}"
			class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
			>#{tag}</a
		>
	{/each}
</div>
<article
	class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto mt-10 prose-slate px-4 dark:prose-invert"
>
	{@html post.content}
</article>
<div class="flex justify-items-center justify-center mb-8">
	<div class="grid grid-cols-2 gap-2 group">
		<Hoverable bind:hovering={FeedBackButtonsHovered.like}>
			<button
				class="bg-green-500 rounded-full h-12 w-12 transition"
				class:opacity-40={FeedBackButtonsHovered.dislike}
				on:click={() => submitFeedback(true).then()}
			>
				<!-- heroicons/thumb-up -->
				<svg
					class="inline-block h-8 w-8 align-middle text-black"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
					/>
				</svg>
			</button>
		</Hoverable>
		<Hoverable bind:hovering={FeedBackButtonsHovered.dislike}>
			<button
				class="rounded-full bg-red-500 h-12 w-12 transition"
				class:opacity-40={FeedBackButtonsHovered.like}
				on:click={() => submitFeedback(false).then()}
			>
				<!-- heroicons/thumb-down -->
				<svg
					class="inline-block h-8 w-8 align-middle text-black"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
					/>
				</svg>
			</button>
		</Hoverable>
		<span class="text-center">{post.metadata.thumbs_up}</span>
		<span class="text-center">{post.metadata.thumbs_down}</span>
	</div>
</div>

<style lang="scss">
	.marck-script {
		font-family: 'Marck Script';
	}
</style>
