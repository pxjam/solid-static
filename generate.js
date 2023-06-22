import path from 'path'
import renderStatic from 'solid-ssr/static'
import * as fs from 'fs'

const __dirname = path.resolve()
const pathToPublic = path.resolve(__dirname, 'dist')
const PAGES = fs.readdirSync(path.resolve(__dirname, 'src/pages')).map((f) => f.split('.')[0])

renderStatic(
	PAGES.map((p) => {
		const pathToServer = path.resolve(__dirname, 'lib', `${p}.js`)
		console.log(pathToServer)
		return {
			entry: pathToServer,
			output: path.join(pathToPublic, `${p}.html`),
			url: p === 'index' ? `/` : `/${p}`
		}
	})
)
