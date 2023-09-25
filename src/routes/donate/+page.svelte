<script>
	import KoFiImage from '$src/assets/ko-fi.webp';
	import BankQr from '$src/assets/bank-qr.png';
	import { fade } from 'svelte/transition';
	let fullscreen_open = false;
</script>

<svelte:head>
	<title>About - Mawoka</title>
	<meta property="og:title" content="About - Mawoka" />
	<meta property="og:type" content="website" />
	<!--	<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
	<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
-->
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
			<p class="pt-8 text-lg mx-2">
				You probably ask yourself, why you should donate, right? Let me explain.<br /> I am
				running my own server, to guarantee data-privacy and to keep the costs as low as
				possible, but low cost isn't equal to no cost. <br />
				Even if I should be able to cover it, I am still investing time and effort into my projects.
			</p>
		</div>
		<section class="flex flex-col">
			<h2 class="text-center text-3xl">Donation-Options</h2>
			<div class="bg-white dark:bg-gray-700 my-8 rounded w-5/6 mx-auto p-3 shadow-2xl">
				<!-- Bank -->
				<h3 class="text-2xl"><b>Preferred</b>: Bank Transaction (🇪🇺 Only)</h3>
				<p>
					This is the preferred way of donating for European people, since there aren't
					any fees or 3rd-parties involved.
				</p>
				<h4 class="text-xl mt-4">Fees</h4>
				<p>None</p>
				<h4 class="text-xl mt-4">How?</h4>
				<div class="grid lg:grid-cols-2 lg:grid-rows-none grid-rows-2 w-full lg:mx-6">
					<div class="m-auto w-full h-full flex flex-col">
						<h5 class="text-center text-lg mb-auto">Enter the details manually</h5>
						<div
							class="font-mono border-[#B07156] border-2 rounded p-1 m-auto w-full border-l-8 dark:bg-white/10 bg-gray-700/10"
						>
							<p>IBAN: <span class="select-all">DE50300609920360910600</span></p>
							<p>BIC: <span class="select-all">GENODEF1P05</span></p>
							<p>BLZ: <span class="select-all">30060992</span></p>
							<p>Bank: <span class="select-all">PSD Bank Rhein-Ruhr</span></p>
						</div>
					</div>
					<div class="mx-auto">
						<h5 class="text-center text-lg mb-auto">
							QR-Code with the details (Click to enlarge)
						</h5>
						<img
							on:click={() => {
								fullscreen_open = true;
							}}
							class="mx-auto rounded cursor-pointer"
							src={BankQr}
							alt="QR-Code to scan with Bank-Details"
						/>
					</div>
				</div>
			</div>
			<div class="bg-white dark:bg-gray-700 my-8 rounded w-5/6 mx-auto p-3 opacity-90">
				<!-- Stripe -->
				<h3 class="text-2xl">
					Stripe
				</h3>
				<p>
					Donating using Stripe gives you many payment options, but has also <b
						>high fees</b
					>.
				</p>
				<h4 class="text-xl mt-4">Fees</h4>
				<p>0.25€ + 5%</p>
				<h4 class="text-xl mt-4">How?</h4>
				<div class="flex justify-center">
					<a
						href="https://donate.stripe.com/5kA5ojf3VfHH9zidQQ"
						target="_blank"
						class="text-black hover:bg-opacity-80 px-4 py-2 leading-5 transition-all duration-200 transform bg-[#B07156] rounded text-center outline-none"
						>➡ Donate using Stripe</a
					>
				</div>
			</div>

			<div class="bg-white dark:bg-gray-700 my-8 rounded w-5/6 mx-auto p-3 opacity-90">
				<!-- Ko-Fi -->
				<h3 class="text-2xl">Ko-Fi</h3>
				<p>Pretty much the same as Stripe, but also with <b>PayPal</b></p>
				<h4 class="text-xl mt-4">Fees</h4>
				<p>0.25€ + 5%</p>
				<h4 class="text-xl mt-4">How?</h4>
				<div class="flex justify-center">
					<a
						href="https://ko-fi.com/mawoka"
						target="_blank"
						class="text-black hover:bg-opacity-80 px-4 py-2 leading-5 transition-all duration-200 transform bg-[#B07156] rounded text-center outline-none"
						>➡ Donate using Ko-Fi</a
					>
				</div>
			</div>
			<div class="bg-white dark:bg-gray-700 my-8 rounded w-5/6 mx-auto p-3 opacity-90">
				<!-- Liberapay -->
				<h3 class="text-2xl">Liberapay</h3>
				<p>Only for recurring donations</p>
				<h4 class="text-xl mt-4">Fees</h4>
				<p>0.25€ + 5%</p>
				<h4 class="text-xl mt-4">How?</h4>
				<div class="flex justify-center">
					<a
						href="https://liberapay.com/Mawoka/"
						target="_blank"
						class="text-black hover:bg-opacity-80 px-4 py-2 leading-5 transition-all duration-200 transform bg-[#B07156] rounded text-center outline-none"
						>➡ Donate using Liberapay</a
					>
				</div>
			</div>
		</section>
	</section>
	{#if fullscreen_open}
		<div
			class="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 fle p-2"
			transition:fade={{ duration: 80 }}
			on:click={() => (fullscreen_open = false)}
		>
			<img
				src={BankQr}
				alt="QR-Code to scan with Bank-Details"
				class="object-cover rounded m-auto max-h-full max-w-full lg:h-full w-full lg:w-auto"
			/>
		</div>
	{/if}
</main>
