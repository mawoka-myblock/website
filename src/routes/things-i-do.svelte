<script>
	import TableItem from '../lib/table-item.svelte';

	const getLanguageData = async (type) => {
		const response = await fetch('https://late-rice-4828.mawoka.workers.dev/');
		const res = await response.json();
		if (type == 'table') {
			return res['data']['languages'];
		} else {
			return res;
		}
	};

	const skills = [
		{ tech: 'FastAPI', link: 'https://fastapi.tiangolo.com', level: 5 },
		{ tech: 'Python', link: 'https://python.org', level: 4 },
		{ tech: 'MongoDB', link: 'https://mongodb.com', level: 3 },
		{ tech: 'Svelte', link: 'https://svelte.dev', level: 2 },
		{ tech: 'Linux', link: '', level: 3 },
		{ tech: 'Java', link: '', level: 1 }
	];
</script>

<main>
	<section class="section">
		<div class="container">
			<h1 class="title mt-6" style="color:beige;font-size: 500%;">Things I do</h1>
			<p class="is-size-3" style="color: beige;">Here you can see what I do!</p>
		</div>
	</section>
	<div class="columns mr-3 ml-3">
		<div class="column">
			<h3 class="is-size-3 has-text-centered">Where I spent my time on</h3>
			<h5 class="is-size-5 has-text-centered">Where I spent the majority of my time</h5>
			<div class="center mt-4">
				<table class="table is-striped has-text-centered">
					<thead>
						<tr>
							<th>Language</th>
							<th>Time</th>
							<th>Percent</th>
						</tr>
					</thead>
					<tbody>
						{#await getLanguageData('table')}
							<p>...waiting</p>
						{:then prom}
							{#each prom as { name, percent, text }}
								{#if Math.round(percent) >= 5}
									<tr>
										<td>{name}</td>
										<td>{text}</td>
										<td>{Math.round(percent)}%</td>
									</tr>
								{/if}
							{/each}
						{:catch error}
							<p style="color: red">{error.message}</p>
						{/await}
					</tbody>
				</table>
			</div>
		</div>
		<div class="column" style="overflow-x: hidden;">
			<h3 class="is-size-3 has-text-centered">Stuff I'm familiar with</h3>
			<h5 class="is-size-5 has-text-centered">Child -> Junior -> Teenager -> Adult -> Senior</h5>
			<!--        1          2          3         4          5 -->
			<div class="center mt-4">
				<TableItem data={skills} />
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	@use "bulma/bulma.sass";
	$table-row-hover-background-color: #009444;
	.center {
		display: flex;
		justify-content: center;
	}

	.lang-table {
		border-radius: 25px;
		border: 2px;
		//background: #73ad21;
		padding: 20px;
	}
</style>
