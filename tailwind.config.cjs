const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
        
		extend: {
            colors: {
                green: {
                    600: "#009444"
                }
            },
        }
	},

	plugins: []
};

module.exports = config;
