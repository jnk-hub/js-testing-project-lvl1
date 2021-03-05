test:
	npm run test
.PHONY: test

lint:
	npm run lint
	npm run prettier
.PHONY: lint

build:
	npm run build
.PHONY: build

dev:
	npx jest --watch
.PHONY: dev
