<script lang="ts">
	import MaintenanceStatusLists from '$lib/maintenance-status-lists.svelte';
	import json_data from './status.json';

	const maintain_statuses_ids = Object.entries(json_data);
	console.log(maintain_statuses_ids);
</script>

<div>
	<section class="section">
		<div class="pt-12">
			<h1 class="text-8xl mt-6 marck-script text-center">Maintenance-Status</h1>
		</div>
	</section>
	<section class="w-fit flex flex-col mx-auto">
		{#each maintain_statuses_ids as id}
			{@const data = json_data[id[0]]}
			<div class="p-8">
				<a href="/maintenance-status/{id[0]}">
					<div class="border p-8">
						<h3 class="text-3xl text-center">Maintenance-Status ID: {id[0]}</h3>
						<h4 class="text-2xl text-center pt-2">Title: {data.title}</h4>
						<MaintenanceStatusLists {data} />
					</div>
				</a>
			</div>
		{/each}
	</section>
</div>
