import { describe, expect, it } from 'vitest'
import { isIdCardNo, isIdCardSixNo } from './id-card'

describe('id-card', () => {
  it('should return false is not valid id card', function () {
    expect(isIdCardNo('1')).toBeFalsy()
    expect(isIdCardNo('')).toBeFalsy()
  })
  it('should return true is valid id card', function () {
    expect(isIdCardNo('430124199001011234')).toBeTruthy()
  })
})

describe('id-card-after-six', () => {
  it('should return false is not valid id card after six', function () {
    expect(isIdCardSixNo('1')).toBeFalsy()
    expect(isIdCardSixNo('')).toBeFalsy()
    expect(isIdCardSixNo('430124199001011234')).toBeFalsy()
    expect(isIdCardSixNo('1234567')).toBeFalsy()
    expect(isIdCardSixNo('12345XX')).toBeFalsy()
  })
  it('should return true is valid id card', function () {
    expect(isIdCardSixNo('123456')).toBeTruthy()
    expect(isIdCardSixNo('12345X')).toBeTruthy()
  })
})
