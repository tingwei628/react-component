#!/usr/bin

## tsc -p ../tsconfig.json
ROOT_DIR = ../../../
NODE_MODULES = $(ROOT_DIR)/node_modules
TSC = $(NODE_MODULES)/typescript/bin/tsc
TSLINT = $(NODE_MODULES)/tslint/bin/tslint
JEST = $(NODE_MODULES)/jest/bin/jest.js

clean: 	
				rm -rf ../dist/

build:
				$(TSC) -p ../tsconfig.json

watch:
				$(TSC) -w

lint:
				$(TSLINT) -c ../tslint.react.json -p ../tsconfig.json

run:
				node ../dist/es6/index.js

test:
				rm -rf $(ROOT_DIR)/coverage/
				$(JEST) --coverage