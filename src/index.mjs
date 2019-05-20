export const is = (e, type) => (typeof is[type] === 'function' ? is[type](e) : typeof e === type)

is.number = e => e === +e
is.integer = e => e === +e && e === (e | 0)
is.float = e => e === +e

is.array = e => Array.isArray(e)
is.regexp = e => e instanceof RegExp
is.date = e => e instanceof Date
is.error = e => e instanceof Error
is.null = is.nil = e => e === null
is.promise = e => e instanceof Promise

export default is
