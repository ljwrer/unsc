import { pick, omitBy, isNil } from 'lodash-es'
import { makeObservable, observable } from 'mobx'
import { IdIndexItem, IDType } from '@cf/types'

export abstract class AbstractScrollStore<T extends IdIndexItem> {
  loading = false
  count = 0
  totalNum = Infinity
  list: T[] = []
  pageNo = 1
  pageSize = 10
  hasInit = true

  get finished() {
    return this.count >= this.totalNum
  }

  protected constructor() {
    makeObservable(this, {
      list: observable,
      loading: observable,
    })
  }

  reset() {
    this.count = 0
    this.list = []
    this.pageNo = 1
    this.totalNum = Infinity
    this.hasInit = true
  }

  async onLoadMore() {
    if (!this.finished) {
      this.loading = true
      await this.fetchData()
      this.loading = false
    }
  }

  async resetAndSearch() {
    this.reset()
    await this.onLoadMore()
  }

  async init() {
    this.reset()
    await this.onLoadMore()
  }

  abstract fetchData(): unknown

  protected buildCondition(): Partial<this> {
    const keys = this.getSearchKeys()
    const condition = pick(this, [...keys, 'pageNo', 'pageSize'])
    return this.cleanCondition(condition)
  }

  protected abstract getSearchKeys(): Array<keyof this>

  protected cleanCondition(condition: Partial<this>): Partial<this> {
    return omitBy<Partial<this>>(condition, isNil) as Partial<this>
  }

  findItemById(id: IDType) {
    return this.list.find((item) => item.id === id)
  }

  removeItemById(id: IDType) {
    this.list = this.list.filter((item) => item.id !== id)
  }

  removeItemByIdList(idList: IDType[]) {
    const set = new Set(idList)
    this.list = this.list.filter((item) => !set.has(item.id!))
  }

  swapItem(newItem: T) {
    this.list = this.list.map((item) => {
      if (newItem.id === item.id) {
        return newItem
      } else {
        return item
      }
    })
  }
}
