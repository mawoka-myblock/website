<script lang="ts">
    import '@fontsource/marck-script/index.css';
    import {browser} from '$app/environment';

    let openMenu = true;
    const toggleMenu = () => {
        openMenu = !openMenu;
    };

    let darkMode = false;
    if (browser) {
        darkMode =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    const switchDarkMode = (on: boolean): void => {
        if (on) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        window.location.reload();
    };
</script>

<nav
        class="w-screen px-4 lg:px-10 py-2 flex flex-col lg:flex-row lg:items-center fixed backdrop-blur-sm bg-white/60 shadow-md z-50 top-0"
>
    <!-- Our logo and button -->
    <section class="w-full lg:w-max flex justify-between">
        <!-- Logo -->
        <a href="/" class="font-black tracking-tight text-xl text-black marck-script link-hover"
        >Mawoka</a
        >

        <!-- Our open/close buttons -->
        <!-- Open menu -->
        <button class="lg:hidden" on:click={toggleMenu} class:hidden={!openMenu}>
            <svg
                    class="text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    display="block"
            >
                <path d="M3 6h18M3 12h18M3 18h18"/>
            </svg>
        </button>

        <!-- Close menu -->
        <button class="hidden" class:hidden={openMenu} on:click={toggleMenu}>
            <svg
                    class="text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    display="block"
            >
                <path d="M20 20L4 4m16 0L4 20"/>
            </svg>
        </button>
    </section>

    <!-- Our list of items -->
    <ul class="lg:flex w-full flex-col lg:flex-row lg:pl-6" class:hidden={openMenu}>
        <li class="py-2">
            <a
                    class="text-lg font-medium lg:px-4 text-gray-600 hover:text-green-600 link-hover"
                    href="/projects">Projects</a
            >
        </li>
        <li class="py-2">
            <a
                    class="text-lg font-medium lg:px-4 text-gray-600 hover:text-green-600 link-hover"
                    href="/contact">Contact</a
            >
        </li>
        <li class="py-2">
            <a
                    class="text-lg font-medium lg:px-4 text-gray-600 hover:text-green-600 link-hover"
                    href="/things-i-do">Stuff I do</a
            >
        </li>
        <li class="py-2">
            <a
                    class="text-lg font-medium lg:px-4 text-gray-600 hover:text-green-600 link-hover"
                    href="/about">About me</a
            >
        </li>
        <li class="py-2">
            <a
                    class="text-lg font-medium lg:px-4 text-gray-600 hover:text-green-600 link-hover"
                    href="/blog">Blog</a
            >
        </li>
        <li class="py-2">
            <a
                    class="text-lg font-medium lg:px-4 text-gray-600 hover:text-green-600 link-hover"
                    href="/blog/search">Search</a
            >
        </li>
    </ul>
    <div class="flex w-full justify-end">
        {#if darkMode}
            <button
                    on:click={() => {
					switchDarkMode(false);
				}}
                    aria-label="Activate light mode"
            >
                <!-- Heroicons: sun -->
                <svg
                        class="w-6 h-6 text-black"
                        fill="none"
                        aria-label="Sun-Icon"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            stroke="currentColor"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            </button>
        {:else}
            <button
                    on:click={() => {
					switchDarkMode(true);
				}}
                    aria-label="Activate darkmode"
            >
                <!-- Heroicons: moon -->
                <svg
                        aria-label="Moon-Icon"
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            </button>
        {/if}
    </div>
</nav>

<style lang="scss">
  .marck-script {
    font-family: 'Marck Script';
  }
</style>
