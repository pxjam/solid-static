import fetch from "node-fetch";
import { renderToStringAsync } from "solid-js/web";
import App from "./App";
globalThis.fetch = fetch;
// entry point for server render
export default req => {
  return renderToStringAsync(() => <App/>);
};
