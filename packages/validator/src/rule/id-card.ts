import { genRule } from '../validator'
import { emptyRule } from './empty'

export const isIdCardNo = (value: string) => {
  const idReg =
    /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return idReg.test(value)
}
const idCardRule = genRule(isIdCardNo, '请输入正确的身份证号码')
export const idCardDescriptor = [
  emptyRule('请输入身份证'),
  {
    validator: idCardRule,
  },
]
// 身份证后6位
export const isIdCardSixNo = (value: string) => {
  if (value.length !== 6) {
    return false
  }
  const idReg = /\d{5}(\d|X|x)/
  return idReg.test(value)
}
const idCardSixNoRule = genRule(isIdCardSixNo, '请输入正确的身份证后6位')
export const idCardSixDescriptor = [
  emptyRule('请输入身份证后6位'),
  {
    validator: idCardSixNoRule,
  },
]
