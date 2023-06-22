import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { resolve } from 'path'
// import devtools from 'solid-devtools/vite';

const __dirname = resolve()

console.log(resolve(__dirname, 'public/ru.html'))

export default defineConfig({
	plugins: [
		/*
		Uncomment the following line to enable solid-devtools.
		For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
		*/
		// devtools(),
		solidPlugin()
	],
	server: {
		port: 3000
	},
	build: {
		target: 'esnext',
		rollupOptions: {
			input: {
				ru: resolve(__dirname, 'public/ru.html'),
				en: resolve(__dirname, 'public/en.html')
			}
		}
	}
})
