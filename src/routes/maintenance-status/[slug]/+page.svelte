<script lang="ts">
	import json_data from '../status.json';

	import Maintenance_status_lists from '$lib/maintenance-status-lists.svelte';

	// eslint-disable-next-line ParseError
	export let data
	let status_id = data.status_id;

	interface maintain_statatus {
		title: String;
		fix_bugs: Boolean;
		fix_security_issues: Boolean;
		new_features: Boolean;
		revivie_if_interested: Boolean;
	}

	const data_lol: maintain_statatus = json_data[status_id];
</script>

<div>
	<section class="section">
		<div class="container pt-12 text-center">
			<h1 class="text-8xl mt-6 marck-script">{data_lol.title}</h1>
		</div>
	</section>
	<section>
		<Maintenance_status_lists {data_lol} />
	</section>
</div>
