# ${state.title}

${state.description}

<GitBadges>magic-libraries/is</GitBadges>

<h3 id='installation'>installation</h3>

<Pre>npm install --save-exact @magic-libraries/is</Pre>

<h3 id='usage'>usage</h3>

in a page/component, just use the LIB.is functions

<Pre>
[
  div(
    lib.is('a string 'string')
      ? '"a string" is a string'
      : '"a string" is not a string'
  ),
  div(
    lib.is(0, 'string')
      ? '0 is a string'
      : '0 is not a string'
  ),
]
</Pre>

renders

${lib.is('a string', 'string') ? '"a string" is a string' : '"a string" is not a string'}

${lib.is(0, 'string') ? '0 is a string' : '0 is not a string'}


<h3 id='types'>supported types</h3>

by default, magic will test for type equality using typeof.

<Pre>
is('a string 'string') // true
is({}, 'object')         // true
is([], 'object')         // true
</Pre>

if typeof would fail, is uses a number of builtin functions to determine the type of the value

<Pre>
is([], 'array')              // true
is(0, 'number')              // true
is(1.1, 'float')             // true
is (10, 'integer')           // true
is(new Date(), 'date')       // true
is(/regexp/, 'regexp')       // true
is(new Error(), 'error')     // true
is(null, 'null')             // true
is(new Promise(), 'promise') // true
</Pre>

for convenience, @magic-libraries/is also exports the alias functions it uses

<Pre>
is.number(0)              // true
is.integer(1)             // true
is.float(1.1)             // true
is.array([])              // true
is.regexp(/t/)            // true
is.date(new Date())       // true
is.error(new Error())     // true
is.null(null)             // true
is.promise(new Promise()) // true
</Pre>

<h3 id='source'>source</h3>

the source for this page is in the
[example directory](https://github.com/magic-libraries/is/tree/master/example),
and gets built and published to github using
[@magic/core](https://github.com/magic/core)

