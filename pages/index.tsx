import React, { useState } from 'react'
import Router from 'next/router'
import styles from '/styles/indexStyle.module.scss'
import { ArrowRightOutlined } from '@ant-design/icons'

const Cover = () => {
  const [buttonPosition, setButtonPosition] = useState('enter--show')
  const [maskPosition, setMaskPosition] = useState('cover-mask--show')

  // 展示背景图片
  const showBackground = () => {
    const buttonState =
      buttonPosition === 'enter--show' ? 'enter--hide' : 'enter--show'
    const maskState =
      maskPosition === 'cover-mask--show'
        ? 'cover-mask--hide'
        : 'cover-mask--show'
    setButtonPosition(buttonState)
    setMaskPosition(maskState)
  }

  return (
    <div className={styles['cover']} onDoubleClick={showBackground}>
      <div className={`${styles['cover-mask']} ${styles[maskPosition]}`}>
        <div className={styles['content']}>
          <p className={styles['content-title']}>Welcome to Yume</p>
          <p>
            我喜欢你，
            <br />
            并不是因为你长得好不好看，
            <br />
            而是你在特殊的时间里给了我别人给不了的感觉！
          </p>
          <div className={styles['content-email']}>
            <p className={styles['content-email-subscribe']}>SUBSCRIBE</p>
            <input type='email' placeholder='Enter Your Email' />
            <div className={styles['content-email-confirm']}>
              <ArrowRightOutlined
                className={styles['content-email-confirm-icon']}
              />
            </div>
          </div>
        </div>
        <div
          className={`${styles['enter']} ${styles[buttonPosition]}`}
          onClick={() => Router.push('/home')}>
          enter
        </div>
      </div>
    </div>
  )
}

export default Cover

Cover.getLayout = (page: Document) => {
  return <>{page}</>
}
