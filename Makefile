.PHONY: build clean
build:
	deno bundle --unstable -c tsconfig.json src/index.tsx > dist/index.js

clean:
	-rm dist/index.js
