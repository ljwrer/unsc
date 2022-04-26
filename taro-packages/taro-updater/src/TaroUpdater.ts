import Taro, { UpdateManager } from '@tarojs/taro'

class TaroUpdater {
  private readonly enable = Taro.canIUse('getUpdateManager')
  private readonly updateManager!: UpdateManager

  constructor() {
    if (this.enable) {
      this.updateManager = Taro.getUpdateManager()
    }
  }

  async checkUpdate() {
    if (this.enable) {
      this.updateManager.onCheckForUpdate((res) => {
        if (res.hasUpdate) {
          this.registerUpdateReady()
          this.registerUpdateFail()
        }
      })
    } else {
      await this.updateWeChat()
    }
  }

  private registerUpdateReady() {
    this.updateManager.onUpdateReady(async () => {
      await Taro.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: (res) => {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            this.updateManager.applyUpdate()
          }
        },
      })
    })
  }

  private registerUpdateFail() {
    this.updateManager.onUpdateFailed(async function () {
      // 新的版本下载失败
      await Taro.showModal({
        title: '更新提示',
        content: '新版本已经上线啦，请您删除当前小程序，重新搜索打开哟',
      })
    })
  }

  private updateWeChat() {
    return Taro.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试',
    })
  }
}

export const taroUpdater = new TaroUpdater()
