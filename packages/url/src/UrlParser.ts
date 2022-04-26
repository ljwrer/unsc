import { Query } from '@cf/types'
import { has } from 'lodash-es'
import { qs } from './SearchParam'

export class UrlParser {
  private readonly nakedUrl: string
  private queryString: string
  private query: Query

  constructor(url: string) {
    let nakedUrl = url
    let queryString = ''
    if (url.includes('?')) {
      ;[nakedUrl, queryString] = url.split('?')
    }
    this.nakedUrl = nakedUrl
    this.queryString = queryString
    this.query = qs.parse(this.queryString)
  }

  public assignQuery(query: Query) {
    this.query = {
      ...this.query,
      ...query,
    }
    this.queryString = qs.stringify(this.query)
  }

  public removeQuery(key: string) {
    if (has(this.query, key)) {
      delete this.query[key]
      this.queryString = qs.stringify(this.query)
    }
  }

  public getUrl() {
    let queryString = ''
    if (this.queryString) {
      queryString = `?${this.queryString}`
    }
    return `${this.nakedUrl}${queryString}`
  }

  public getNaked() {
    return {
      nakedUrl: this.nakedUrl,
      queryString: this.queryString,
      query: this.query,
    }
  }

  public getQuery() {
    return {
      ...this.query,
    }
  }
}
