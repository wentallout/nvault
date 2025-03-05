// postcss.config.cjs
const mixins = require('postcss-mixins');

module.exports = {
	plugins: [
		mixins({
			mixinsFiles: ['./src/mixins.css'] // Path to your mixin definitions file
		})
	]
};
