import { RuleItem, RuleType } from 'async-validator'

export const emptyRule = (message: string, type?: RuleType) => {
  const rule: RuleItem = {
    type: type || 'string',
    required: true,
    message,
  }
  return rule
}
