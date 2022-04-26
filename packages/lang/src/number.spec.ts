import { expect, test } from 'vitest'
import { isNumeric } from './number'

test('isNumeric', () => {
  expect(isNumeric(0)).toBeTruthy()
  expect(isNumeric(123)).toBeTruthy()
  expect(isNumeric('123')).toBeTruthy()
  expect(isNumeric(null)).toBeFalsy()
  expect(isNumeric(undefined)).toBeFalsy()
})
