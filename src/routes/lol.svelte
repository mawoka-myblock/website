<script>
	//import '../assets/font.css';
</script>

<main>
	<section class="section">
		<div class="container pt-12 text-center">
			<h1 class="text-8xl mt-6 marck-script">Easter Egg!</h1>
			<p class="text-xl mt-4">You found it! That makes me happy!</p>
		</div>
	</section>

	<section>
		<div class="block my-8">
			<p
				class="text-center text-2xl hover:cursor-pointer"
				on:click={() => {
					plausible('RickRoll');
					location.href = '/redir?token=1';
				}}
			>
				Here is nothing, but click this text and you'll find the real easter-egg!
			</p>
		</div>
	</section>
</main>
