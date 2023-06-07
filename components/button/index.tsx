import React from 'react'
import types from './buttonType.d'
import styles from './buttonStyle.module.scss'
import img from '@/assets/icons/arrowEnter.png'

const Button = (props: types.ConfigProps) => {
  return (
    <div className={styles['button']}>
      <h1 className={styles['button-text']}>{props.buttonName}</h1>
      <img className={styles['button-image']} src={img.src} alt="arrowEnter" />
    </div>
  )
}

export default Button
