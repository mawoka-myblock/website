<script lang="ts">
	// eslint-disable-next-line ParseError
	export let data: maintain_statatus;

	interface maintain_statatus {
		title: String;
		fix_bugs: Boolean;
		fix_security_issues: Boolean;
		new_features: Boolean;
		revivie_if_interested: Boolean;
	}
</script>

<div class="mx-auto flex pt-8 flex-col">
	<h1 class="text-4xl mx-auto underline">What I will do</h1>
	<ul class="list-disc mx-auto pt-4">
		{#if data.fix_bugs}
			<li class="text-2xl">🐛 I'll fix non-critical bugs</li>
		{/if}
		{#if data.fix_security_issues}
			<li class="text-2xl">🔒 I'll fix critical security issues and bugs</li>
		{/if}
		{#if data.new_features}
			<li class="text-2xl">✨ I'll add new features</li>
		{/if}
		{#if data.revivie_if_interested}
			<li class="text-2xl">🧟 I'll revive the project, if you want me to do so</li>
		{/if}
		{#if !Object.values(data).every(Boolean)}
			<li class="text-2xl">That's doesn't look good!</li>
		{/if}
	</ul>
</div>
<div class="mx-auto flex pt-8 flex-col">
	<h1 class="text-4xl mx-auto underline">What I will <b>NOT</b> do</h1>
	<ul class="list-disc mx-auto pt-4">
		{#if data.fix_bugs === false}
			<li class="text-2xl">🐛 I won't fix non-critical bugs</li>
		{/if}
		{#if data.fix_security_issues === false}
			<li class="text-2xl">🔒 I won't fix any critical security issues or bugs</li>
		{/if}
		{#if data.new_features === false}
			<li class="text-2xl">✨ I won't add new features</li>
		{/if}
		{#if data.revivie_if_interested === false}
			<li class="text-2xl">⚰️ I won't revive the project</li>
		{/if}
		{#if Object.values(data).every(Boolean)}
			<li class="text-2xl">Here's nothing!</li>
		{/if}
	</ul>
</div>
