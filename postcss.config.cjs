const postcssNested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
	syntax: 'postcss-scss',
	plugins: [
		postcssNested,
		autoprefixer,
		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};
