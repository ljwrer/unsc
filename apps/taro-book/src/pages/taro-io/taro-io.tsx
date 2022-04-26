import { Button, View } from '@tarojs/components'
import { TaroIO } from '@cf/taro-io'
import { useReady } from '@tarojs/taro'

definePageConfig({
  navigationBarTitleText: 'IO请求',
})

let io: TaroIO

const TaroIOPage = () => {
  useReady(() => {
    io = new TaroIO('https://gzh.chanfinecloud.com/')
  })

  const toRequest = () => {
    io.postJSON(
      'iCloud-signpay/applet/index/getSlide',
      { type: 1 },
      { header: { tenantId: '1262062582429143042' } }
    ).then((res) => {
      console.log(res)
    })
  }

  return (
    <View>
      <Button onClick={toRequest}>点击进行网络请求</Button>
    </View>
  )
}
export default TaroIOPage
