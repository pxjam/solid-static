build:
	npx rollup -c rollup.config.js && node generate.js

dev:
	#npx rollup -c --watch
	npx vite

serve:
	npx serve dist -l 8080

start: build serve
