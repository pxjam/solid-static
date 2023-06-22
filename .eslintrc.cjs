module.exports = {
	parserOptions: {
		requireConfigFile: false,
		ecmaVersion: 13,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	root: true,
	plugins: ['solid', 'prettier'],
	extends: ['prettier', 'eslint:recommended', 'plugin:solid/recommended'],
	settings: {}
}
