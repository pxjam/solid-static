build:
	npx rollup -c rollup.config.js && node generate.js

serve:
	npx serve dist -l 8080

start: build serve
