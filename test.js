import test from 'ava'
import code from '.'
import codes from './codes.json'

const validCodes = [100, 101, 102, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511]

test('throws on invalid parameter', t => {
  t.throws(() => code())
  t.throws(() => code([]))
  t.throws(() => code({}))
})

test('empty object on not existing status code', t => {
  t.deepEqual(code(1), {})
  t.deepEqual(code(42), {})
  t.deepEqual(code(99), {})
})

test('JSON well formatted', t => {
  for (const status of Object.values(codes)) {
    t.is(typeof status.code, 'number')
    t.is(typeof status.message, 'string')
    t.is(typeof status.description, 'string')
  }
})

test('same value as string or number', t => {
  t.deepEqual(code(100), code('100'))
  t.deepEqual(code(200), code('200'))
  t.deepEqual(code(404), code('404'))
})

test('valid status codes', t => {
  for (const status of validCodes) {
    t.not(code(status), undefined)
    t.not(code(status), {})
    t.is(code(status).code, status)
  }
})

