import { View } from '@tarojs/components'
import { TaroButton } from '@cf/taro-ui'

definePageConfig({
  navigationBarTitleText: 'TaroUIPage',
})

const TaroUIPage = () => (
  <View>
    <TaroButton />
  </View>
)

export default TaroUIPage
