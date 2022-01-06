<script>
	export let data;

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

<table class="max-w-5xl mx-auto table-auto border-2 border-gray-200">
	<thead class="justify-between">
		<tr>
			<th class="px-16 py-2"
				><span class="text-gray-100 font-semibold"> Technology</span>
			</th>
			<th on:click={sortarr} class="px-16 py-2"
				><span class="text-gray-100 font-semibold">Level</span>
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
						<path
							d="M6 6H2"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
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
			<tr class="border-b-2 border-gray-200">
				{#if link == ''}
					{#if level == 1}
						<td class="px-16 py-2 flex flex-row items-center"
							><span class="text-center ml-2 font-semibold">{tech}</span></td
						>
						<td><span class="text-center ml-2 font-semibold">Child</span></td>
					{:else if level == 2}
						<td class="px-16 py-2 flex flex-row items-center"
							><span class="text-center ml-2 font-semibold">{tech}</span></td
						>
						<td><span class="text-center ml-2 font-semibold">Junior</span></td>
					{:else if level == 3}
						<td class="px-16 py-2 flex flex-row items-center"
							><span class="text-center ml-2 font-semibold">{tech}</span></td
						>
						<td><span class="text-center ml-2 font-semibold">Teenager</span></td>
					{:else if level == 4}
						<td class="px-16 py-2 flex flex-row items-center"
							><span class="text-center ml-2 font-semibold">{tech}</span></td
						>
						<td><span class="text-center ml-2 font-semibold">Adult</span></td>
					{:else if level == 5}
						<td class="px-16 py-2 flex flex-row items-center"
							><span class="text-center ml-2 font-semibold">{tech}</span></td
						>
						<td><span class="text-center ml-2 font-semibold">Senior</span></td>
					{/if}
				{:else if level == 1}
					<td class="px-16 py-2 flex flex-row items-center"
						><span class="text-center ml-2 font-semibold"
							><a href={link}>{tech}</a></span
						></td
					>
					<td><span class="text-center ml-2 font-semibold">Child</span></td>
				{:else if level == 2}
					<td class="px-16 py-2 flex flex-row items-center"
						><span class="text-center ml-2 font-semibold"
							><a href={link}>{tech}</a></span
						></td
					>
					<td><span class="text-center ml-2 font-semibold">Junior</span></td>
				{:else if level == 3}
					<td class="px-16 py-2 flex flex-row items-center"
						><span class="text-center ml-2 font-semibold"
							><a href={link}>{tech}</a></span
						></td
					>
					<td><span class="text-center ml-2 font-semibold">Teenager</span></td>
				{:else if level == 4}
					<td class="px-16 py-2 flex flex-row items-center"
						><span class="text-center ml-2 font-semibold"
							><a href={link}>{tech}</a></span
						></td
					>
					<td><span class="text-center ml-2 font-semibold">Adult</span></td>
				{:else if level == 5}
					<td class="px-16 py-2 flex flex-row items-center"
						><span class="text-center ml-2 font-semibold"
							><a href={link}>{tech}</a></span
						></td
					>
					<td><span class="text-center ml-2 font-semibold">Senior</span></td>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>
