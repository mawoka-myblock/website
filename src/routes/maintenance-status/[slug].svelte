<script context="module">
	import json_data from './status.json';
	export const load = async ({ params, fetch }) => {
		if (json_data[params.slug] === undefined) {
			return {
				status: 404
			};
		}
		return {
			props: {
				status_id: params.slug
			}
		};
	};
</script>

<script lang="ts">
  import Maintenance_status_lists from './maintenance-status-lists.svelte';

	export let status_id: string;

	interface maintain_statatus {
		title: String;
		fix_bugs: Boolean;
		fix_security_issues: Boolean;
		new_features: Boolean;
		revivie_if_interested: Boolean;
	}

	const data: maintain_statatus = json_data[status_id];
</script>

<div>
	<section class="section">
		<div class="container pt-12 text-center">
			<h1 class="text-8xl mt-6 marck-script">{data.title}</h1>
		</div>
	</section>
	<section>
		<Maintenance_status_lists data={data} />
	</section>
</div>
