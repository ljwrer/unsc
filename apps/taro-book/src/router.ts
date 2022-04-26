import { TaroRouter } from '@cf/taro-router'

const pages = {
  index: '/pages/index/index',
  taroIO: '/pages/taro-io/taro-io',
  taroUI: '/pages/taro-ui/taro-ui',
}
type Pages = typeof pages
export type PageName = keyof Pages

class Router extends TaroRouter<Pages, PageName> {
  pages = pages
  pageKeys: Array<PageName> = Object.keys(pages) as PageName[]
}

export const router = new Router()
