import { RuleItem } from 'async-validator'

export const agreeRule = (message: string) => {
  const rule: RuleItem = {
    type: 'boolean',
    validator: (_: any, value: any) => {
      return value === true
    },
    message: message,
    options: {
      first: true,
    },
  }
  return rule
}
