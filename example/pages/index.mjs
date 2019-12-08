export const View = state => [
  h1(state.title),

  p(state.description),

  GitBadges('magic-libraries/is'),

  h3({ id: 'installation' }, 'installation'),
  Pre('npm install --save-exact @magic-libraries/is'),

  h3({ id: 'usage' }, 'usage'),
  p('in a page/component, just use the lib.is functions'),
  Pre(`
[
  div(
    LIB.IS('a string', 'string')
      ? '"a string" is a string'
      : '"a string" is not a string'
  ),
  div(
    LIB.IS(0, 'string')
      ? '0 is a string'
      : '0 is not a string'
  ),
]

`),
  p('renders'),
  div(lib.is('a string', 'string') ? '"a string" is a string' : '"a string" is not a string'),
  div(lib.is('a string', 'string') ? '0 is a string' : '0 is not a string'),

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

  LightSwitch(state),
]
