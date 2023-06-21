import path from 'path'
import renderStatic from 'solid-ssr/static'

const __dirname = path.resolve();
const PAGES = ["index"];
const pathToServer = path.resolve(__dirname, "lib/index.js");
const pathToPublic = path.resolve(__dirname, "dist");

renderStatic(
  PAGES.map(p => ({
    entry: pathToServer,
    output: path.join(pathToPublic, `${p}.html`),
    url: p === "index" ? `/` : `/${p}`
  }))
);
