import { describe, expect, it } from 'vitest'
import { isPhone, isHidePhone } from './phone'

describe('phone', () => {
  describe('isPhone', () => {
    it('should return false is not valid phone', function () {
      expect(isPhone('1')).toBeFalsy()
      expect(isPhone('')).toBeFalsy()
    })
    it('should return true is valid phone', function () {
      expect(isPhone('13012345678')).toBeTruthy()
    })
  })

  describe('isHidePhone', () => {
    it('should return false is not valid phone', function () {
      expect(isHidePhone('13012345678')).toBeFalsy()
      expect(isHidePhone('123456')).toBeFalsy()
    })
    it('should return true is valid phone', function () {
      expect(isHidePhone('130****5678')).toBeTruthy()
    })
  })
})
