import { CommonEvent } from '@tarojs/components'
import dayjs from 'dayjs'

// 输入
export const useInput = <T>(store: T, key: keyof T) => {
  const onInput = (event: CommonEvent) => {
    store[key] = event.detail.value
  }
  return {
    onInput,
    value: String(store[key]),
  }
}

export const useForValueOptions = <T>(
  obj: T,
  property: keyof T,
  range: Array<any>
) => {
  const onChange = (event: CommonEvent) => {
    obj[property] = range[event.detail.value]
  }
  return {
    range,
    onChange: onChange,
  }
}

// 单选
// rangeValue表示是取range对象里面的某个值
// rangeKey表示是显示range对象里面的某个值
export const useForObjectOptions = <T>(
  obj: T,
  property: keyof T,
  range: Array<any>,
  rangeValue: any,
  rangeKey: any
) => {
  const onChange = (event: CommonEvent) => {
    obj[property] = range[event.detail.value][rangeValue]
  }
  return {
    range,
    rangeKey,
    onChange: onChange,
  }
}

// 日期格式化
export const useDatePicker = <T>(
  obj: T,
  property: keyof T,
  template = 'YYYY-MM-DD'
) => {
  const onChange = (event: CommonEvent) => {
    obj[property] = dayjs(event.detail.value).format(template) as any
  }
  return {
    onChange: onChange,
    value: dayjs(obj[property] as unknown as string).format('YYYY-MM-DD'),
  }
}

// 地区返回code
export const useRegionCode = <T>(obj: T, property: keyof T) => {
  const onChange = (event: CommonEvent) => {
    obj[property] = event.detail.code
  }
  return {
    value: obj[property],
    onChange: onChange,
  }
}

export const useRegionValue = <T>(obj: T, property: keyof T) => {
  const onChange = (event: CommonEvent) => {
    obj[property] = event.detail.value
  }
  return {
    value: obj[property],
    onChange: onChange,
  }
}

export const useRegionAll = <T>(
  obj: T,
  codeProperty: keyof T,
  valueProperty: keyof T
) => {
  const onChange = (event: CommonEvent) => {
    obj[codeProperty] = event.detail.code
    obj[valueProperty] = event.detail.value
  }
  return {
    value: obj[valueProperty],
    onChange: onChange,
  }
}
