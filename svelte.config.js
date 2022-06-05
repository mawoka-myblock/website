import preprocess from 'svelte-preprocess';
//import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-cloudflare-workers';
import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-cloudflare';
// import vercel from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-node';
import path from 'path';
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
		vite: {
			resolve: {
				alias: {
					$src: path.resolve('./src')
				}
			}
		},
		// adapter: adapter({ out: 'out' })
		// adapter: vercel()

		adapter: adapter()
	}
};

export default config;
