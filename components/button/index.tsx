import React from 'react'
import type from './index.d'
import style from './indexStyle.module.scss'
import img from '@/assets/icons/arrowEnter.png'

const Button = (props: type.props) => {
  return (
    <div className={style['button']}>
      <h1 className={style['button-text']}>{props.buttonName}</h1>
      <img className={style['button-image']} src={img.src} alt="arrowEnter" />
    </div>
  )
}

export default Button
