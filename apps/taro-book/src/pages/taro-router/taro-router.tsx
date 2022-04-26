import { Button, View } from '@tarojs/components'
import { router } from '../../router'
definePageConfig({
  navigationBarTitleText: '路由',
})

const TaroRouter = () => {
  return (
    <View>
      {router.pageKeys.map((item) => {
        return <Button onClick={() => router.push(item)}>{item}</Button>
      })}
    </View>
  )
}

export default TaroRouter
