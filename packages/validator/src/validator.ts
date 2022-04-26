import { RuleItem } from 'async-validator'

declare const _ruleItem: RuleItem
export type RuleValidator = typeof _ruleItem.validator

export type Validator = (value: any) => boolean

export const genRule = (
  assertFunc: Validator,
  message: string
): RuleValidator => {
  return (_: any, value: any) => {
    const errors: any[] = []
    if (!assertFunc(value)) {
      errors.push(message)
    }
    return errors
  }
}
