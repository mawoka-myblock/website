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
		}
	];
	const randomTagColor = () => {
		const colors = ['primary', 'link', 'info', 'success', 'danger', 'warning'];
		let index = Math.floor(Math.random() * colors.length);
		return `is-${colors[index]}`;
	};
</script>

<svelte:head>
	<title>Projects - Mawoka</title>
</svelte:head>

<main>
	<section class="section">
		<div class="container">
			<h1 class="title mt-6" style="color:beige;font-size: 500%;">Projects</h1>
			<p class="is-size-3" style="color: beige;">Here are all my Projects!</p>
			<p>Not all projects, but the bigger/more important ones</p>
		</div>
	</section>
	<section class="section">
		<div class="mx-3">
			{#each projects as { name, github, website, tags, description }}
				<div class="card mt-3">
					<div class="card-header">
						<p class="card-header-title">{name}</p>
					</div>
					<div class="card-content">
						<div class="content">
							{description}
						</div>
						<div class="tags are-medium">
							{#each tags as tag}
								<span class="tag is-light">{tag}</span>
							{/each}
						</div>
					</div>
					<div class="card-footer">
						{#if github != ''}
							<a href={github} class="card-footer-item">GitHub</a>
						{/if}
						{#if website != ''}
							<a href={website} class="card-footer-item">Website</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	@use "bulma/bulma.sass";
</style>
