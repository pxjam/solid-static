// import path from 'path'
// import copy from 'rollup-plugin-copy'
// import manifest from 'rollup-route-manifest'
import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import fs from 'fs'
import path from 'path'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const __dirname = path.resolve()
const PAGES = fs.readdirSync(path.resolve(__dirname, 'src/pages')).map((p) => `src/pages/${p}`)

// detect mode dev or prod
// eslint-disable-next-line no-undef
const isDev = process.env.ROLLUP_WATCH === 'true'

console.log(PAGES)

export default [
	{
		input: 'src/App.jsx',
		output: [
			{
				dir: 'dist/js',
				format: 'esm'
			}
		],
		preserveEntrySignatures: false,
		plugins: [
			nodeResolve({ exportConditions: ['solid'], extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
			babel({
				babelHelpers: 'bundled',
				presets: [['solid', { generate: 'dom', hydratable: true }]]
			}),
			!isDev && terser(),
			isDev &&
				serve({
					open: true,
					contentBase: 'src',
					port: 5555
				}),
			isDev && livereload('src')
		]
	},
	{
		input: PAGES,
		output: [
			{
				dir: 'lib',
				exports: 'auto',
				format: 'esm'
			}
		],
		external: ['solid-js', 'solid-js/web', 'node-fetch'],
		plugins: [
			nodeResolve({
				preferBuiltins: true,
				exportConditions: ['solid'],
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}),
			babel({
				babelHelpers: 'bundled',
				presets: [['solid', { generate: 'ssr', hydratable: true, async: true }]]
			}),
			json()
		]
	}
	// {
	// 	input: 'src/App.jsx', // Add your entry point for the dev server
	// 	output: {
	// 		dir: 'dist/js',
	// 		format: 'esm'
	// 	},
	// 	plugins: [
	// 		nodeResolve({
	// 			preferBuiltins: true,
	// 			exportConditions: ['solid'],
	// 			extensions: ['.js', '.jsx', '.ts', '.tsx']
	// 		}),
	// 		babel({
	// 			babelHelpers: 'bundled',
	// 			presets: [['solid', { generate: 'ssr', hydratable: true, async: true }]]
	// 		})
	// 	]
	// }
]
