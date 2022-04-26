import Taro from '@tarojs/taro'
import Schema, { Rules, Values } from 'async-validator'
import { AsyncValidationError } from 'async-validator/dist-types/util'

export const useValidator = (rules: Rules) => {
  const validator = new Schema(rules)
  return async (values: Values) => {
    try {
      await validator.validate(values)
      return true
    } catch (e) {
      const { errors } = e as AsyncValidationError
      if (errors?.length) {
        const error = errors[0]
        await Taro.showToast({
          title: error?.message as string,
          icon: 'none',
          duration: 2000,
        })
      }
      return false
    }
  }
}
