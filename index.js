'use strict'
const codes = require('./codes.json')

module.exports = (code) => {
  if (typeof code !== 'number' && typeof code !== 'string') {
    throw new TypeError('Expected a Number or String')
  }
  if (typeof code === 'number') {
    code = code.toString()
  }
  if (codes[code] === undefined) {
    return {}
  }
  return codes[code]
}
