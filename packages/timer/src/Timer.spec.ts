import { expect, describe, test } from 'vitest'
import { Timer } from './Timer'

describe('timer', () => {
  test('day', function () {
    expect(Timer.day()).toBe(86400000)
    expect(Timer.day(2)).toBe(86400000 * 2)
  })
  test('hour', function () {
    expect(Timer.hour()).toBe(3600000)
    expect(Timer.hour(2)).toBe(3600000 * 2)
  })
  test('minute', function () {
    expect(Timer.minute()).toBe(60000)
    expect(Timer.minute(2)).toBe(60000 * 2)
  })
  test('second', function () {
    expect(Timer.second()).toBe(1000)
    expect(Timer.second(2)).toBe(1000 * 2)
  })
})
