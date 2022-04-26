import Taro from '@tarojs/taro'
import { interceptorManage } from './InterceptorManage'

export enum ContentType {
  urlencoded = 'application/x-www-form-urlencoded',
  json = 'application/json',
  formData = 'multipart/form-data',
}

export type IOOption = Partial<Taro.request.Option> & {
  ignoreToken?: boolean
  ignoreError?: boolean
  ioName?: string
}

export class TaroIO {
  protected baseURL: string = ''
  protected name: string = 'TaroBaseIO'

  constructor(baseURL = '') {
    this.baseURL = baseURL
    this.init()
  }

  init() {
    interceptorManage.register(this.name, this.interceptor)
  }

  get<T = any>(url: string, data?: any, option?: IOOption) {
    return Taro.request<T>({
      url: this.buildURL(url),
      method: 'GET',
      data,
      ...this.buildOption(option),
    }) as any as Promise<T>
  }

  getJSON<T = any>(url: string, data?: any, option?: IOOption) {
    return Taro.request<T>({
      url: this.buildURL(url),
      method: 'GET',
      data,
      ...this.buildOption(option, ContentType.json),
    }) as any as Promise<T>
  }

  post<T = any>(url: string, data?: any, option?: IOOption) {
    return Taro.request<T>({
      url: this.buildURL(url),
      method: 'POST',
      data,
      ...this.buildOption(option, ContentType.urlencoded),
    }) as any as Promise<T>
  }

  postJSON<T = any>(url: string, data?: any, option?: IOOption) {
    return Taro.request<T>({
      url: this.buildURL(url),
      method: 'POST',
      data,
      ...this.buildOption(option, ContentType.json),
    }) as any as Promise<T>
  }

  put<T = any>(url: string, data?: any, option?: IOOption) {
    return Taro.request<T>({
      url: this.buildURL(url),
      method: 'PUT',
      data,
      ...this.buildOption(option, ContentType.urlencoded),
    }) as any as Promise<T>
  }

  putJSON<T = any>(url: string, data?: any, option?: IOOption) {
    return Taro.request<T>({
      url: this.buildURL(url),
      method: 'PUT',
      data,
      ...this.buildOption(option, ContentType.json),
    }) as any as Promise<T>
  }

  delete<T = any>(url: string, data?: any, option?: IOOption) {
    return Taro.request<T>({
      url: this.buildURL(url),
      method: 'DELETE',
      data,
      ...this.buildOption(option, ContentType.urlencoded),
    }) as any as Promise<T>
  }

  deleteJSON<T = any>(url: string, data?: any, option?: IOOption) {
    return Taro.request<T>({
      url: this.buildURL(url),
      method: 'DELETE',
      data,
      ...this.buildOption(option, ContentType.json),
    }) as any as Promise<T>
  }

  private buildURL(url: string) {
    return `${this.baseURL}${url}`
  }

  private buildOption(option: IOOption = {}, contentType?: ContentType) {
    option.ioName = this.name
    if (contentType) {
      return {
        ...option,
        header: {
          'content-type': contentType,
          ...option.header,
        },
      }
    }
    return option
  }

  protected async processParams(requestParams: Taro.RequestParams<any>) {
    return requestParams
  }

  protected async handleRes(res: Taro.request.SuccessCallbackResult) {
    return res.data
  }

  protected async handleError(e: any, req: Taro.RequestParams<any>) {
    return Promise.reject(e)
  }

  protected normalizeErrorMsg(e: any) {
    let msg = e
    if (e) {
      if (e instanceof Error) {
        msg = e.message ?? e
      } else if ('errMsg' in e) {
        msg = e.errMsg
      } else if ('statusText' in e) {
        msg = e.statusText
      } else if (typeof e === 'object') {
        try {
          msg = JSON.stringify(e)
        } catch (jsonError) {
          msg = e
        }
      }
    }
    return msg
  }

  private interceptor: Taro.interceptor = async (chain: Taro.Chain) => {
    const requestParams = await this.processParams(chain.requestParams)
    return chain
      .proceed(requestParams)
      .then((res: any) => {
        return this.handleRes(res)
      })
      .catch((error: any) => {
        return this.handleError(error, requestParams)
      })
  }
}
