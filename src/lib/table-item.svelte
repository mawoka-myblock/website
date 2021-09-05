<script>
	export let data;

	console.log(data);
	let sortdir = 'ascending';

	const sortarr = () => {
		if (sortdir == 'descending') {
			data.sort((a, b) => parseFloat(a.level) - parseFloat(b.level));
			sortdir = 'ascending';
		} else {
			data.sort((a, b) => parseFloat(b.level) - parseFloat(a.level));
			sortdir = 'descending';
		}
		data = data;
	};

	sortarr();
</script>

<table class="table is-striped has-text-centered">
	<thead>
		<tr>
			<th>Technology</th>
			<th on:click={sortarr}
				><p>Level</p>
				{#if sortdir == 'descending'}
					<svg
						width="24"
						height="24"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14 14L2 14"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10 10H2"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path d="M6 6H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
						<path
							d="M18 18H2"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M19 14V4M19 4L22 7M19 4L16 7"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				{:else}
					<svg
						width="24"
						height="24"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14 10L2 10"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10 14H2"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M6 18H2"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M18 6L2 6"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M19 10V20M19 20L22 17M19 20L16 17"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				{/if}
			</th>
		</tr>
	</thead>
	<tbody>
		{#each data as { tech, link, level }}
			<tr>
				{#if link == ''}
					{#if level == 1}
						<td>{tech}</td>
						<td>Child</td>
					{:else if level == 2}
						<td>{tech}</td>
						<td>Junior</td>
					{:else if level == 3}
						<td>{tech}</td>
						<td>Teenager</td>
					{:else if level == 4}
						<td>{tech}</td>
						<td>Adult</td>
					{:else if level == 5}
						<td>{tech}</td>
						<td>Senior</td>
					{/if}
				{:else if level == 1}
					<td><a href={link}>{tech}</a></td>
					<td>Child</td>
				{:else if level == 2}
					<td><a href={link}>{tech}</a></td>
					<td>Junior</td>
				{:else if level == 3}
					<td><a href={link}>{tech}</a></td>
					<td>Teenager</td>
				{:else if level == 4}
					<td><a href={link}>{tech}</a></td>
					<td>Adult</td>
				{:else if level == 5}
					<td><a href={link}>{tech}</a></td>
					<td>Senior</td>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>

<style lang="scss">
	@use "bulma/bulma.sass";
</style>
