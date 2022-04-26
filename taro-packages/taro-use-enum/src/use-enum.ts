import { has } from 'lodash-es'
import { isNumeric } from '@cf/lang'
import { Dictionary, EnumItem, Enum } from '@cf/types'

export const generateEnum = <E>(
  myEnum: Enum<E>,
  descMap: Dictionary<string>
): EnumItem[] => {
  const result: EnumItem[] = []
  for (const key of Object.keys(myEnum)) {
    if (!isNumeric(key)) {
      const value = myEnum[key as keyof E]
      if (has(descMap, value)) {
        const desc = descMap[value]
        result.push({
          value,
          desc,
        })
      } else {
        const map = JSON.stringify(descMap)
        throw new Error(`miss key: ${key} for descMap: ${map}`)
      }
    }
  }
  return result
}

export const useEnum = generateEnum

export const useEnumForRadio = <E>(
  myEnum: Enum<E>,
  descMap: Dictionary<string>
) =>
  useEnum(myEnum, descMap).map((item) => ({
    value: item.value,
    label: item.desc,
  }))

export const generateEnumForRadio = useEnumForRadio

export const useEnumForPicker = <E>(
  myEnum: Enum<E>,
  descMap: Dictionary<string>
) => generateEnum(myEnum, descMap).map((item) => item.desc)
