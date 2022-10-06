<script>
    import TableItem from '$lib/table-item.svelte';

    const skills = [
        {tech: 'FastAPI', link: 'https://fastapi.tiangolo.com', level: 5},
        {tech: 'Python', link: 'https://python.org', level: 4},
        {tech: 'MongoDB', link: 'https://mongodb.com', level: 3},
        {tech: 'TailwindCSS', link: 'https://tailwindcss.com', level: 5},
        {tech: 'Rust', link: 'https://rust-lang.org', level: 2},
        {tech: 'Svelte', link: 'https://svelte.dev', level: 4},
        {tech: 'JavaScript', link: '', level: 3},
        {tech: 'Linux', link: '', level: 3}
        // { tech: 'Java', link: '', level: 1 }
    ];
    export let data
    let res = data.res;
</script>

<svelte:head>
    <title>Things I do - Mawoka</title>
</svelte:head>

<main>
    <section class="section">
        <div class="container pt-12 text-center">
            <h1 class="text-8xl mt-6 marck-script">Things I do</h1>
            <p class="text-xl mt-4">Here you can see what I do!</p>
        </div>
    </section>
    <div class="mr-3 ml-3 my-8">
        <div class="column">
            <h3 class="text-3xl text-center">Where I spent my time on</h3>
            <h5 class="text-xl text-center">Where I spent the majority of my time</h5>
            <div class="center mt-4">
                <table class="max-w-5xl mx-auto table-auto border-2 border-black">
                    <thead class="justify-between">
                    <tr>
                        <th class="px-16 py-2">
                            <span class="text-gray-900 dark:text-gray-100 font-semibold">Language</span>
                        </th>
                        <th class="px-16 py-2">
                            <span class="text-gray-900 dark:text-gray-100 font-semibold">Time</span>
                        </th>
                        <th class="px-16 py-2">
                            <span class="text-gray-900 dark:text-gray-100 font-semibold">Percent</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each res as {name, percent, text}}
                        {#if Math.round(percent) >= 5}
                            <tr class="border-b-2 border-black">
                                <td class="px-16 py-2 flex flex-row items-center">
                                    <span class="text-center ml-2 font-semibold">{name}</span>
                                </td>
                                <td>{text}</td>
                                <td>{Math.round(percent)}%</td>
                            </tr>
                        {/if}
                    {/each}
                    </tbody>
                </table>
            </div>
        </div>
        <div class="column mt-8" style="overflow-x: hidden;">
            <h3 class="text-3xl text-center">Stuff I'm familiar with</h3>
            <h5 class="text-xl text-center">Child -> Junior -> Teenager -> Adult -> Senior</h5>
            <!--        1          2          3         4          5 -->
            <div class="center mt-4">
                <TableItem data={skills}/>
            </div>
        </div>
    </div>
</main>

<style lang="scss">
  .center {
    display: flex;
    justify-content: center;
  }
</style>
