import fetch from 'node-fetch'
import { renderToStringAsync } from 'solid-js/web'
import App from '../App'

const content = {
	title: 'Привет, русский мир!',
	description: 'Русская версия'
}

// eslint-disable-next-line no-undef
globalThis.fetch = fetch
// entry point for server render
export default (req) => {
	return renderToStringAsync(() => <App content={content} url={req.url} />)
}
