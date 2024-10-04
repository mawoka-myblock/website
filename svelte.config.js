import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
// import adapter from "@sveltejs/adapter-auto"
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// preprocess: [
	// 	preprocess({
	// 		defaults: {
	// 			style: 'scss'
	// 		}
	// 		// postcss: true
	// 	})
	// ],
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		//adapter: vercel()

		// adapter: adapter({ out: 'out' })
		// adapter: vercel()

		adapter: adapter({
			precompress: true
		})
	}
};

export default config;
