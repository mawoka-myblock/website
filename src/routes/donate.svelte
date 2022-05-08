<script>
    import KoFiImage from "$src/assets/ko-fi.webp"
</script>
<svelte:head>
    <title>About - Mawoka</title>
    <meta property="og:title" content="About - Mawoka"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://www.imdb.com/title/tt0117500/"/>
    <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg"/>
</svelte:head>

<main>
    <section class="section">
        <div class="container pt-12 text-center">
            <h1 class="text-8xl mt-6 marck-script">Donate</h1>
            <p class="text-xl mt-4">You want to donate? That's great ❤️!</p>
        </div>
    </section>
    <section class="pb-8">
        <div class="flex justify-center">
            <p class="pt-8 text-lg">You probably ask yourself, why you should donate, right? Let me explain.<br> I am
                running my own server, to guarantee data-privacy and to keep the costs as low as possible.<br>
                I am using server by netcup, and I am paying 4,99€ per month. Then, I've got 2 domains which cost ~0,60€
                per month. <br><b class="font-extrabold">My dream is to just cover these fees.</b></p>
        </div>
        <div class="flex flex-col items-center justify-center px-2 lg:px-16 gap-8 pt-12">
            <div class="flex flex-col items-center">
                <h1 class="text-3xl pb-4">Ko-fi</h1>
                <a href="https://ko-fi.com/mawoka"><img src={KoFiImage} alt="Support me on Ko-fi" class="pl-12"></a>
            </div>
            <div class="flex flex-col items-center">
                <h1 class="text-3xl pb-2">Liberapay</h1>
                <a href="https://liberapay.com/Mawoka/donate">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" class="max-h-[126px]">
                        <g transform="translate(-78.37-208.06)" fill="#1a171b">
                            <path d="m104.28 271.1c-3.571 0-6.373-.466-8.41-1.396-2.037-.93-3.495-2.199-4.375-3.809-.88-1.609-1.308-3.457-1.282-5.544.025-2.086.313-4.311.868-6.675l9.579-40.05 11.69-1.81-10.484 43.44c-.202.905-.314 1.735-.339 2.489-.026.754.113 1.421.415 1.999.302.579.817 1.044 1.546 1.395.729.353 1.747.579 3.055.679l-2.263 9.278"/>
                            <path d="m146.52 246.14c0 3.671-.604 7.03-1.811 10.07-1.207 3.043-2.879 5.669-5.01 7.881-2.138 2.213-4.702 3.935-7.693 5.167-2.992 1.231-6.248 1.848-9.767 1.848-1.71 0-3.42-.151-5.129-.453l-3.394 13.651h-11.162l12.52-52.19c2.01-.603 4.311-1.143 6.901-1.622 2.589-.477 5.393-.716 8.41-.716 2.815 0 5.242.428 7.278 1.282 2.037.855 3.708 2.024 5.02 3.507 1.307 1.484 2.274 3.219 2.904 5.205.627 1.987.942 4.11.942 6.373m-27.378 15.461c.854.202 1.91.302 3.167.302 1.961 0 3.746-.364 5.355-1.094 1.609-.728 2.979-1.747 4.111-3.055 1.131-1.307 2.01-2.877 2.64-4.714.628-1.835.943-3.858.943-6.071 0-2.161-.479-3.998-1.433-5.506-.956-1.508-2.615-2.263-4.978-2.263-1.61 0-3.118.151-4.525.453l-5.28 21.948"/>
                        </g>
                    </svg>
                </a>
            </div>

        </div>
    </section>
</main>

