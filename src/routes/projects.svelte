<script>
	const projects = [
		{
			name: 'Sd-Replacement',
			github: 'https://github.com/mawoka-myblock/sd-replacement',
			website: 'https://sdreplacement.mawoka.eu.org',
			tags: ['javascript', 'fastapi', 'web'],
			description: 'A macrosystem for the real-life like the StreamDeck by elgato.'
		},
		{
			name: 'Dienste-App',
			github: '',
			website: '',
			tags: ['javascript', 'svelte', 'framework7', 'mongodb', 'fastapi', 'web'],
			description:
				'An app for a class to manage services in class like cleaning the board or mopping.'
		},
		{
			name: 'Vocab-Server',
			github: '',
			website: '',
			tags: ['pywebio', 'fastapi', 'mongodb'],
			description: 'A program to learn vocab'
		},
		{
			name: 'uptime-kuma-static',
			github: 'https://github.com/mawoka-myblock/uptime-kuma-static',
			website: '',
			tags: ['bulma', 'python', 'jinja2', 'uptime-kuma'],
			description:
				'A python-script (with docker-container) that generates a static status-page from data collected by Uptime-Kuma.'
		},
		{
			name: 'Rss2Apprise',
			github: 'https://github.com/mawoka-myblock/rss2apprise',
			website: '',
			tags: ['python', 'apprise', 'deta'],
			description:
				'A script that can send you a notification via apprise if a rss-feed changes.'
		}
	];
</script>

<svelte:head>
	<title>Projects - Mawoka</title>
</svelte:head>

<main>
	<section class="section">
		<div class="container pt-12 text-center">
			<h1 class="text-8xl mt-6 marck-script">Projects</h1>
			<p class="text-xl mt-4">Not all projects, but the bigger/more important ones</p>
		</div>
	</section>

	<section class="section p-12">
		{#each projects as { name, github, website, tags, description }}
			<div class="flex justify-center mx-3">
				<div class="w-full rounded overflow-hidden shadow-lg bg-white my-8">
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2 text-black">{name}</div>
						<p class="text-gray-700 text-base">
							{description}
						</p>
					</div>
					<div class="px-6 pt-4 pb-2">
						{#each tags as tag}
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#{tag}</span
							>
						{/each}
					</div>
					<!-- <div class="border-black border-t-2 items-stretch flex">
						{#if github != ''}
							<a href={github} class="items-stretch justify-center">GitHub</a>
						{/if}
						{#if website != ''}
							<a href={website} class="flex items-stretch justify-center">Website</a>
						{/if}
					</div> -->

					<div class="items-stretch bg-transparent flex border-t">
						{#if github != ''}
							<div class="flex w-0 flex-grow justify-center p-3">
								<a href={github} class="text-black link-hover">GitHub</a>
							</div>
							{#if website != ''}
								<div class="flex w-0 flex-grow justify-center p-3">
									<a href={website} class="text-black link-hover">Website</a>
								</div>
							{/if}
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</section>
</main>
