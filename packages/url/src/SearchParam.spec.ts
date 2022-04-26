import { expect, test } from 'vitest'
import { qs } from './SearchParam'

test('SearchParam stringify', () => {
  const str = qs.stringify({
    foo: 1,
    bar: 'hello',
  })
  expect(str).toBe('foo=1&bar=hello')
})

test('SearchParam parse', () => {
  const data = qs.parse('foo=1&bar=hello')
  expect(data).toStrictEqual({
    foo: '1',
    bar: 'hello',
  })
})
