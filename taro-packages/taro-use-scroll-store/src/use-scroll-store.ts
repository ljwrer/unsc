import { useReachBottom, useReady } from '@tarojs/taro'

import { AbstractScrollStore } from '@cf/scroll-store'
import { IdIndexItem } from '@cf/types'

export const useScrollStore = <
  T extends IdIndexItem,
  U extends AbstractScrollStore<T>
>(
  store: U
) => {
  useReady(async () => {
    await store.init()
  })

  useReachBottom(async () => {
    await store.onLoadMore()
  })
}
