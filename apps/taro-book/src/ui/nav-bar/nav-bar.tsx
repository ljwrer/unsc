import { useState } from 'react'
import { Image, View, Input, CommonEvent } from '@tarojs/components'
import Taro from '@tarojs/taro'
import styles from './navBar.module.scss'
import { pages } from '../../routes'
import iconSVG from './icon.svg'

export const NavBar = () => {
  const [filterPages, setFilterPages] = useState(pages)
  const onClick = (page: string) => {
    return Taro.navigateTo({
      url: page,
    })
  }

  const search = (event: CommonEvent) => {
    const inputValue = event.detail.value
    if (inputValue) {
      setFilterPages(
        pages.filter((item) => {
          const temp = item.split('/')[2]
          return !!(temp && temp.indexOf(inputValue) > -1)
        })
      )
    } else {
      setFilterPages(pages)
    }
  }

  return (
    <View className={styles.navContent}>
      <Input className={styles.input} placeholder="搜索..." onInput={search} />
      {filterPages.map((page) => (
        <View
          className={styles.navItem}
          onClick={() => onClick(page)}
          key={page}
        >
          <View>{page.split('/')[2]}</View>
          <Image src={iconSVG} mode="heightFix" />
        </View>
      ))}
    </View>
  )
}
