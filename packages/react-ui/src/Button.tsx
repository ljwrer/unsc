import { useState } from 'react'
import styles from './Button.module.scss'

export const Button = () => {
  const [text] = useState('button')
  return <button className={styles.button}>{text}</button>
}
