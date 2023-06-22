import fetch from 'node-fetch'
import { renderToStringAsync } from 'solid-js/web'
import App from '../App'

const content = {
	title: 'Hello, world!',
	description: 'English version'
}

// eslint-disable-next-line no-undef
globalThis.fetch = fetch
// entry point for server render
export default (req) => {
	return renderToStringAsync(() => <App url={req.url} content={content} />)
}

// if (import.meta.env.DEV) {
// }
