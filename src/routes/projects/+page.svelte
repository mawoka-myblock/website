<script>
	const projects = [
		{
			name: 'ClassQuiz',
			github: 'https://github.com/mawoka-myblock/ClassQuiz',
			website: 'https://classquiz.de?utm_source=projects&utm_medium=website',
			tags: ['Kahoot!', 'svelte', 'ormar', 'fastapi', 'tailwindcss', 'postgres'],
			description:
				'A quiz-app, like Kahoot!. Create quizzes and play in real-time against your friends or in class!'
		},
		{
			name: "APsystems EZ1 Home Assistant Local API Integration",
			description: "Integrate your APsystems EZ1 series inverters easily into Home Assistant!",
			github: "https://www.home-assistant.io/integrations/apsystems",
			tags: ["python", "homeassistant"]
		},
		{
			name: "APsystems EZ1 Python API",
			description: "Interface with your APsystems EZ1 inverters using Python.",
			github: "https://github.com/SonnenladenGmbH/APsystems-EZ1-API",
			tags: ["python", "homeassistant"]
		},
		{
			name: 'SimpleSelfhostAuth',
			github: 'https://github.com/mawoka-myblock/SimpleSelfhostAuth',
			tags: ['rust', 'actix', 'actix', 'auth', 'svelte', 'tailwind', 'nginx'],
			website: 'https://ssa.mawoka.eu/',
			description:
				'An app which you can use to protect your self-hosted websites with an authentication.'
		},
		{
			name: 'PersonalBlogEngine',
			github: 'https://github.com/mawoka-myblock/personalblogengine/',
			tags: ['rust', 'actix', 'postgres', 'svelte', 'tailwind'],
			website: '',
			description:
				'PersonalBlogEngine is a markdown-based headless CMS for your own personal blog.'
		},
		{
			name: 'Envwoman',
			github: 'https://github.com/mawoka-myblock/envwoman',
			website: 'https://envwoman.mawoka.eu?utm_source=projects&utm_medium=website',
			tags: ['rust', 'python', 'tailwindcss', 'python', 'mongodb', 'dotenv'],
			description:
				'An application to sync your dotenv-files securely. This is my first project done with rust.'
		},
		{
			name: 'ImNote',
			github: 'https://github.com/mawoka-myblock/imnote',
			website: 'https://imnote.mawoka.eu?utm_source=projects&utm_medium=website',
			tags: ['javascript', 'sveltekit', 'svelte', 'prismajs', 'tailwindcss'],
			description: 'Notes, but focused on images, not text'
		},
		{
			name: 'Sd-Replacement',
			github: 'https://github.com/mawoka-myblock/sd-replacement',
			website: 'https://sdreplacement.mawoka.eu.org',
			tags: ['flutter', 'socket.io', 'web', 'dart', 'rust'],
			description: 'A macrosystem for the real-life like the StreamDeck by elgato.'
		},
		{
			name: 'Rss2Apprise',
			github: 'https://github.com/mawoka-myblock/rss2apprise',
			website: '',
			tags: ['python', 'apprise', 'deta'],
			description:
				'A script that can send you a notification via apprise if a rss-feed changes.'
		},
		{
			name: 'uptime-kuma-static',
			github: 'https://github.com/mawoka-myblock/uptime-kuma-static',
			website: '',
			tags: ['bulma', 'python', 'jinja2', 'uptime-kuma'],
			description:
				'A python-script (with docker-container) that generates a static status-page from data collected by Uptime-Kuma.'
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
				<div class="w-full rounded overflow-hidden shadow-lg bg-white dark:bg-gray-700 my-8">
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2 text-black dark:text-white">{name}</div>
						<p class="text-gray-700 dark:text-gray-100 text-base">
							{description}
						</p>
					</div>
					<div class="px-6 pt-4 pb-2">
						{#each tags as tag}
							<span
								class="inline-block bg-[#B07156] rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2"
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
								<a href={github} class="text-black dark:text-gray-100 hover:dark:text-[#d6edc9] hover:text-[#4e6e58] transition">GitHub</a>
							</div>
							{#if website != ''}
								<div class="flex w-0 flex-grow justify-center p-3">
									<a href={website} class="text-black dark:text-gray-100 hover:dark:text-[#d6edc9] hover:text-[#4e6e58] transition">Website</a>
								</div>
							{/if}
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</section>
</main>
