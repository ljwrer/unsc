import { View } from '@tarojs/components'
import styles from './index.module.scss'
import { NavBar } from '../../ui/nav-bar/nav-bar'

definePageConfig({
  navigationBarTitleText: '首页',
})

const Index = () => {
  return (
    <View className={styles.indexPage}>
      <View className={styles.title}>小程序UI</View>
      <NavBar />
    </View>
  )
}

export default Index
