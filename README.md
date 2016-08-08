Rollup Flow plugin
==================

[![Build Status](https://travis-ci.org/leebyron/rollup-plugin-flow.svg?branch=master)](https://travis-ci.org/leebyron/rollup-plugin-flow)

This [Rollup](http://rollupjs.org/) plugin will remove [Flow](https://flowtype.org)
type annotations during bundling using [`flow-remove-types`](https://github.com/leebyron/flow-remove-types).

## Install

```
npm install --save rollup-plugin-flow
```

```js
var rollup = require('rollup').rollup;
var flow = require('rollup-plugin-flow');

rollup({
  entry: 'main.js',
  plugins: [ flow() ]
}).then(...);
```
