import sveltePreprocess from 'svelte-preprocess'
//import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-cloudflare-workers';
import adapter from '@sveltejs/adapter-cloudflare';
// import adapter from '@sveltejs/adapter-node';
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
	preprocess: [
		sveltePreprocess({
			scss: {
				// We can use a path relative to the root because svelte-preprocess automatically adds
				// it to `includePaths` if none is defined.
				// This allows us to use the variables in our components - don't turn on unless really need it
				// prependData: `@import 'src/styles/_variables.scss';`,
	
				// Docs say renderSync is faster for Dart Sass which I am using
				// https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md#scss-sass
				renderSync: true,
	
				// Dart Sass recognizes 'expanded' and 'compressed'
				outputStyle: 'expanded'
			}
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
		// adapter: adapter({ out: 'out' })
		adapter: adapter()
	}
};

export default config;
