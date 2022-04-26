export * from './query'
export * from './io'
export * from './enum'

export interface Dictionary<T = any> {
  [key: string]: T
}

export type IDType = string | number

export interface IdIndexItem {
  id?: IDType
}
