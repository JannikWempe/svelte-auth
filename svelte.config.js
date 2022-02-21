import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',
		// this is no longer required and should be removed
	},

	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
