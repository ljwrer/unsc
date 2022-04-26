import { genRule } from '../validator'
import { emptyRule } from './empty'

export const isPhone = (value: string) => {
  const phoneReg = /^1\d{10}$/
  return phoneReg.test(value)
}
export const isHidePhone = (value: string) => {
  const hidePhoneReg = /^1\d{2}\*{4}\d{4}$/
  return hidePhoneReg.test(value)
}
const phoneRule = genRule(isPhone, '请输入正确的手机号码')
const hidePhoneRule = genRule(isHidePhone, '请输入正确的手机号码')
export const phoneDescriptor = [
  emptyRule('请输入手机号码'),
  {
    validator: phoneRule,
  },
]
export const hidePhoneDescriptor = [
  emptyRule('请输入手机号码'),
  {
    validator: hidePhoneRule,
  },
]
