import Taro from '@tarojs/taro'

export class TaroStorage<T> {
  private readonly key: string = ''
  private data!: T
  private readonly defaultData: T

  constructor(key: string, defaultData: T) {
    this.key = key
    this.defaultData = defaultData
  }

  init() {
    let data
    try {
      data = Taro.getStorageSync<T>(this.key)
    } catch (e) {
      console.error(e)
    }
    this.data = data || this.defaultData
    return this.data
  }

  update(data: T) {
    this.data = data
    return Taro.setStorageSync(this.key, this.data)
  }
}
