import preprocess from 'svelte-preprocess';
//import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-cloudflare-workers';
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			defaults: {
				style: 'scss'
			}
			//postcss: true
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		//adapter: vercel()
		/*
		adapter: adapter({
			// default options are shown
			out: 'build',
			precompress: true,
			env: {
				host: 'HOST',
				port: 'PORT'
			}
		})
		*/
		vite: {
			optimizeDeps: {
				include: ['lowlight/lib/common.js', 'lowlight/lib/all.js', 'highlight.js/lib/core']
			}
		},
		adapter: adapter()
	}
};

export default config;
