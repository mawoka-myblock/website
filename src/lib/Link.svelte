<script>
	export let href;
	export let nofollow = false;
</script>

{#if nofollow}
	<a {href} class="hover:underline text-gray-300 transition-transform" rel="nofollow">
		<slot /></a
	>
{:else}
	<a {href} class="hover:underline text-gray-300 transition-transform"> <slot /></a>
{/if}
