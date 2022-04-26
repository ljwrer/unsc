import { Query } from '@cf/types'

export class SearchParam {
  public parse(queryString: string) {
    const pairs = queryString.split('&')
    const query: Record<string, string> = {}
    if (pairs) {
      for (const keyValue of pairs) {
        const [encKey, encValue] = keyValue.split('=')
        if (encKey) {
          const key = decodeURIComponent(encKey)
          query[key] = decodeURIComponent(encValue)
        }
      }
    }
    return query
  }

  public stringify(query: Query) {
    let ret = ''
    for (const key of Object.keys(query)) {
      const value = query[key]
      const and = ret ? '&' : ''
      const encKey = encodeURIComponent(key)
      const encValue = this.encodeValue(value)
      const pairs = `${and}${encKey}=${encValue}`
      ret = `${ret}${pairs}`
    }
    return ret
  }

  private encodeValue(value: any): string {
    let cleanValue = ''
    if (value !== undefined && value !== null) {
      if (value.toString) {
        cleanValue = value.toString()
      }
    }
    return encodeURIComponent(cleanValue)
  }
}

export const qs = new SearchParam()
