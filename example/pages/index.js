module.exports = () => [
  h1('@magic-libraries/is'),

  p(['typechecking client lib for ', Link({ to: 'https://magic.github.io/core' }, '@magic')]),

  GitBadges('magic-libraries/is'),

  h3({ id: 'installation' }, 'installation'),
  Pre('npm install --save-exact magic-libraries/is'),

  h3({ id: 'require' }, 'require'),
  p('first add the client lib to the app.lib, note that we do not actually require the library.'),

  Pre(`
// /app.js
module.exports = {
  //...other app exports
  lib: {
    IS: '@magic-libraries/is',
  },
}`),

  h3({ id: 'usage' }, 'usage'),
  p('in a page/component, just use the LIB.JSON functions'),
  Pre(`
module.exports = () =>
  div(
    LIB.IS('a string', 'string')
      ? 'it is a string'
      : 'it is not a string'
  )
`),
  p('renders'),
  div(LIB.IS('a string', 'string') ? 'it is a string' : 'it is not a string'),

  h3({ id: 'types' }, 'supported types'),
  p('by default, magic will test for type equality using typeof.'),

  Pre(`
is('a string', 'string') // true
is({}, 'object')         // true
is([], 'object')         // true
`),

  p(
    'if typeof would fail, is uses a number of builtin functions to determine the type of the value',
  ),
  Pre(`
is([], 'array')              // true
is(0, 'number')              // true
is(1.1, 'float')             // true
is (10, 'integer')           // true
is(new Date(), 'date')       // true
is(/regexp/, 'regexp')       // true
is(new Error(), 'error')     // true
is(null, 'null')             // true
is(new Promise(), 'promise') // true
`),

  p('for convenience, @magic-libraries/is also exports the alias functions it uses'),
  Pre(`
is.number(0)              // true
is.integer(1)             // true
is.float(1.1)             // true
is.array([])              // true
is.regexp(/t/)            // true
is.date(new Date())       // true
is.error(new Error())     // true
is.null(null)             // true
is.promise(new Promise()) // true
`),

  h3({ id: 'source' }, 'source'),
  p('the source for this page is in the'),
  Link({ to: 'https://github.com/magic-libraries/is/tree/master/example' }, 'example directory'),
  p('and gets built and published to github using'),
  Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
]
