const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				green: {
					600: '#009444'
				}
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.yellow.50'),
						textDecoration: 'none',
						a: {
							color: theme('colors.blue.200')
						},
						blockquote: {
							color: theme('colors.yellow.50')
						},
						h1: {
							color: theme('colors.yellow.50')
						},
						h2: {
							color: theme('colors.yellow.50')
						},
						h3: {
							color: theme('colors.yellow.50')
						},
						h4: {
							color: theme('colors.yellow.50')
						},
						th: {
							color: theme('colors.yellow.50')
						},
						strong: {
							color: theme('colors.yellow.50')
						},
						'code::before': {
							content: '""'
						},
						'code::after': {
							content: '""'
						},
						code: {
							color: theme('colors.gray.100')
						}
					}
				}
			})
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
