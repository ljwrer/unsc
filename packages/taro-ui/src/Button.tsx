import { Button } from '@tarojs/components'
import { useState } from 'react'
import styles from './Button.module.scss'

export const TaroButton = () => {
  const [text] = useState('button')
  return <Button className={styles.button}>{text}</Button>
}
