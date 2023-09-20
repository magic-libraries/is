## @magic-libraries/is

typechecking client lib for
[@magic](https://magic.github.io/core)

[html-docs](https://magic-libraries.github.io/is)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-libraries/is.svg
[npm-url]: https://www.npmjs.com/package/@magic-libraries/is
[travis-image]: https://img.shields.io/travis/com/magic-libraries/is/master
[travis-url]: https://travis-ci.com/magic-libraries/is
[appveyor-image]: https://img.shields.io/appveyor/ci/magiclibraries/is/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magiclibraries/is/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-libraries/is/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-libraries/is
[greenkeeper-image]: https://badges.greenkeeper.io/magic-libraries/is.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-libraries/is.svg
[snyk-image]: https://snyk.io/test/github/magic-libraries/is/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-libraries/is

- [installation](#install)
- [usage](#usage)
- [supported types](#types)

#### <a name="install"></a>installation

```bash
npm install --save-exact @magic-libraries/is
```

#### <a name="usage"></a>usage

in a page/component, just use the LIB.JSON functions.

```javascript
export const View = () => [
  div(LIB.IS('a string', 'string') ? '"a string" is a string' : '"a string" is not a string'),
  div(LIB.IS(0, 'string') ? '0 is a string' : '0 is not a string'),
]
```

renders

```html
<div>"a string" is a string</div>
<div>0 is not a string</div>
```

#### <a name="types"></a>supported types

by default, magic will test for type equality using typeof.

```javascript
is('a string', 'string') // true
is({}, 'object') // true
is([], 'object') // true
```

if typeof would fail, is uses a number of builtin functions to determine the type of the value

```javascript
is([], 'array') // true
is(0, 'number') // true
is(1.1, 'float') // true
is(10, 'integer') // true
is(new Date(), 'date') // true
is(/regexp/, 'regexp') // true
is(new Error(), 'error') // true
is(null, 'null') // true
is(new Promise(), 'promise') // true
is({}, 'objectNative') //true
```

for convenience, @magic-libraries/is also exports the alias functions it uses

```javascript
is.number(0) // true
is.integer(1) // true
is.float(1.1) // true
is.array([]) // true
is.regexp(/t/) // true
is.date(new Date()) // true
is.error(new Error()) // true
is.null(null) // true
is.promise(new Promise()) // true
is.objectNative({}) //true
```

#### changelog

##### 0.0.1

first release

##### 0.0.2

update readme

##### 0.0.3

update readme

##### 0.0.4

require node 13.5.0

##### 0.0.5

bump required node version

##### 0.0.6

bump required node version to 14.15.4

##### 0.0.7

update dependencies

##### 0.0.8

update dependencies
add is.objectNative

##### 0.0.9 - unreleased

...
