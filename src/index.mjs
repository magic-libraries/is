export const is = (e, type) => (typeof is[type] === 'function' ? is[type](e) : typeof e === type)

export const number = is.number = e => e === +e
export const integer = is.integer = e => e === +e && e === (e | 0)
export const float = is.float = e => e === +e

export const array = is.array = e => Array.isArray(e)
export const regexp = is.regexp = e => e instanceof RegExp
export const date = is.date = e => e instanceof Date
export const error = is.error = e => e instanceof Error
export const nil = is.null = is.nil = e => e === null
export const promise = is.promise = e => e instanceof Promise

export default is
