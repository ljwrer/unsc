import { Query } from '@cf/types'
import Taro from '@tarojs/taro'
import { UrlParser } from '@cf/url'

export class TaroRouter<T extends Record<string, string>, PageName = keyof T> {
  pages: T = {} as T

  push(name: PageName, query?: Query) {
    const url = this.getUrl(name, query)
    return Taro.navigateTo({
      url,
    })
  }

  switchTab(name: PageName) {
    const url = this.getUrl(name)
    return Taro.switchTab({
      url,
    })
  }

  replace(name: PageName, query?: Query) {
    const url = this.getUrl(name, query)
    return Taro.redirectTo({
      url,
    })
  }

  back() {
    return Taro.navigateBack()
  }

  reload(name: PageName, query?: Query) {
    const url = this.getUrl(name, query)
    return Taro.reLaunch({
      url,
    })
  }

  getNameByPath(path: string) {
    return Object.keys(this.pages).find((pageName) => {
      return this.pages[pageName] === path
    })
  }

  getUrl(name: PageName, query?: Query) {
    let url = this.pages[name as unknown as string]
    if (query) {
      const urlParser = new UrlParser(url)
      urlParser.assignQuery(query)
      url = urlParser.getUrl()
    }
    return url
  }
}
