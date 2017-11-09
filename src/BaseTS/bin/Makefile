#!/usr/bin

## tsc -p ../tsconfig.json
ROOT_DIR = ../../../
NODE_MODULES = $(ROOT_DIR)/node_modules
TSC = $(NODE_MODULES)/typescript/bin/tsc
TSLINT = $(NODE_MODULES)/tslint/bin/tslint
JEST = $(NODE_MODULES)/jest/bin/jest.js
UGLYIFY-JS = $(NODE_MODULES)/uglify-es/bin/uglifyjs
UGLYIFY-CSS = $(NODE_MODULES)/uglifycss/uglifycss

clean: 	
				rm -rf ../dist/

minify:
				$(UGLYIFY-JS) ../dist/es6/*.js -c -m -o ../dist/es6/index.min.js
				$(UGLYIFY-CSS) --debug ../src/*.css --output ../dist/es6/index.min.css

build:
				make clean
				$(TSC) -p ../tsconfig.json
				make minify

watch:
				$(TSC) -w

lint:
				$(TSLINT) -c ../tslint.react.json -p ../tsconfig.json

run:
				node ../dist/es6/index.min.js

test:
				rm -rf $(ROOT_DIR)/coverage/
				$(JEST) --coverage