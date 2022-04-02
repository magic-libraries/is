import { deep } from '@magic/test'
import isLocal from '../src/index.mjs'

const checks = [
  [
    ['number', 'integer', 'float'],
    [0, 1],
  ],
  [
    ['integer', 'number', 'float'],
    [0, 1, 10],
  ],
  [
    ['float', 'number'],
    [0.01, 1.1, 10.1, Infinity],
  ],
  [['string'], ['string1', 'string2']],
  [['array', 'object'], [[]]],
  [['object'], [{}]],
  [['function'], [() => {}, function () {}]],
  [['boolean'], [false, true]],
  [['date', 'object'], [new Date()]],
  [['null', 'object'], [null]],
  [['string'], ['string 1', 'string 2', `string 3`]],
  [['error', 'object'], [new Error('testing')]],
  [
    ['regexp', 'object'],
    [/testing/g, new RegExp('testing')],
  ],
  [['undefined'], [undefined]],
  [['promise', 'object'], [(() => new Promise(r => setTimeout(r, 1)))()]],
]

export default deep.flatten(
  checks.map(([matchingTypes, values]) =>
    checks.map(([types]) =>
      values.map(value =>
        types.map(type => ({
          fn: () => isLocal(value, type),
          expect: matchingTypes.includes(type),
          info: `check if ${value} is a ${type}`,
        })),
      ),
    ),
  ),
)
