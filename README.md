# jsdom-angularjs

> Enables angular in Node.js

jsdom-angularjs will inject `angular` into your Node.js environment. Useful for running, in Node.js, tests that are made for browsers.

## Install

Requires [jsdom][].

```
npm install --save-dev --save-exact jsdom jsdom-angularjs
```

[jsdom]: https://github.com/tmpvar/jsdom

## Note

jsdom-angularjs now requires jsdom v10 or above.

## Usage

Just invoke it to turn your Node.js environment into a DOM environment.

```js
require('jsdom-angularjs')()

// you can now use the DOM
let controller = angular.module('module').controller('controller')
```

To clean up after itself, just invoke the function it returns.

```js
var cleanup = require('jsdom-angularjs')()

// do things

cleanup()
```

## Tape

In [tape][], run it before your other tests.

```js
require('jsdom-angularjs')()

test('your tests', (t) => {
  /* and so on... */
})
```

## Mocha

__Simple:__ Use Mocha's `--require` option. Add this to the `test/mocha.opts` file (create it if it doesn't exist)

```
-r jsdom-angularjs/register
```

__Advanced:__ For finer control, you can instead add it via [mocha]'s `before` and `after` hooks.

```js
before(function () {
  this.jsdomAngularJS = require('jsdom-angularjs')()
})

after(function () {
  this.jsdomAngularJS()
})
```

[tape]: https://github.com/substack/tape
[mocha]: https://mochajs.org/

## ES2015

If you prefer to use `import` rather than `require`, you might want to use `jsdom-global/register` instead. Place it on top of your other import calls.

```js
import 'jsdom-angularjs/register'
// ...
```

## Thanks

**jsdom-angularjs** © 2019+, Igo Ventura. Released under the [MIT] License.<br>

> GitHub [@igoventura](https://github.com/igoventura) &nbsp;&middot;&nbsp;
> Twitter [@igoventura](https://twitter.com/igoventura)
