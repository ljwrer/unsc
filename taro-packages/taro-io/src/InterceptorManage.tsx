import Taro from '@tarojs/taro'

class InterceptorManage {
  private readonly interceptorMap = new Map<string, Function>()

  constructor() {
    Taro.addInterceptor(this.interceptor)
  }

  register(ioName: string, interceptor: Function) {
    this.interceptorMap.set(ioName, interceptor)
  }

  private readonly interceptor = (chain: Taro.Chain) => {
    const ioName = chain.requestParams.ioName
    const interceptor = this.interceptorMap.get(ioName)!
    return interceptor(chain)
  }
}

export const interceptorManage = new InterceptorManage()
