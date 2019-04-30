## @magic-client/is

typechecking client lib for
[@magic](https://magic.github.io/core)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-client/is.svg
[npm-url]: https://www.npmjs.com/package/@magic-client/is
[travis-image]: https://api.travis-ci.org/magic-client/is.svg?branch=master
[travis-url]: https://travis-ci.org/magic-client/is
[appveyor-image]: https://img.shields.io/appveyor/ci/jaeh/is/master.svg
[appveyor-url]: https://ci.appveyor.com/project/jaeh/core/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-client/is/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-client/is
[greenkeeper-image]: https://badges.greenkeeper.io/magic-client/is.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-client/is.svg
[snyk-image]: https://snyk.io/test/github/magic-client/is/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-client/is

* [installation](#install)
* [require](#require)
* [usage](#usage)
* [supported](#types)
* [caveat](#source)


#### <a name="install"></a>installation
```bash
npm install --save-exact magic-client/is
```

#### <a name="require"></a>require
first add the client lib to the app.lib, note that we do not actually require the library.

```javascript
// /app.js
module.exports = {
  //...other app exports
  lib: {
    IS: '@magic-client/is',
  },
}
```

#### <a name="usage"></a>usage
in a page/component, just use the LIB.JSON functions'),
```javascript
module.exports = () => div(LIB.IS('a string', 'string') ? 'it is a string' : 'it is not a string')
```
renders
```html
<div>it is a string</div>
```

#### <a name="types"></a>supported types
by default, magic will test for type equality using typeof.
```javascript
is('a string', 'string') // true
is({}, 'object')         // true
is([], 'object')         // true
```

if typeof would fail, is uses a number of builtin functions to determine the type of the value
```javascript
is([], 'array')              // true
is(0, 'number')              // true
is(1.1, 'float')             // true
is (10, 'integer')           // true
is(new Date(), 'date')       // true
is(/regexp/, 'regexp')       // true
is(new Error(), 'error')     // true
is(null, 'null')             // true
is(new Promise(), 'promise') // true
```

for convenience, @magic-client/is also exports the alias functions it uses
```javascript
is.number(0)              // true
is.integer(1)             // true
is.float(1.1)             // true
is.array([])              // true
is.regexp(/t/)            // true
is.date(new Date())       // true
is.error(new Error())     // true
is.null(null)             // true
is.promise(new Promise()) // true
```

#### <a name="source"></a>source
the source for this page is in the
[example directory](https://github.com/magic-client/is/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
