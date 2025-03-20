'use strict';

const demo1 = require('../index.json');
const assert = require('assert').strict;

assert.strictEqual(demo1(), 'Hello from demo1');
console.info('demo1 tests passed');
