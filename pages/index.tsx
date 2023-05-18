import React, { useState } from 'react'
import Router from 'next/router'
import styles from './indexStyle.module.scss'
import { ArrowRightOutlined } from '@ant-design/icons'
import http from '@/config/http'
import Button from '@/components/button'

// const subscribe = async () => {
//   const res = await http.post('http://localhost:3000/api/subscriptions', {
//     test: 'test'
//   })
// }

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

  const [inputValue, setInputValue] = useState<null | HTMLInputElement>(null)

  const subscribe = async () => {
    console.log(inputValue && inputValue.value)
    const res = await http.post('http://localhost:3000/api/subscriptions', {
      email: inputValue && inputValue.value,
    })
    const data = await res.json()
    data.code === 200 && inputValue && (inputValue.value = '')
  }

  return (
    <div className={styles['cover']} onDoubleClick={showBackground}>
      <div className={`${styles['cover-mask']} ${styles[maskPosition]}`}>
        <div className={styles['content']}>
          <p className={styles['content-title']}>Welcome to Yume</p>
          <p className={styles['content-sentence']}>
            我喜欢你，
            <br />
            并不是因为你长得好不好看，
            <br />
            而是你在特殊的时间里给了我别人给不了的感觉！
          </p>
          <div className={styles['content-email']}>
            <p className={styles['content-email-subscribe']}>SUBSCRIBE</p>
            <input
              type="email"
              placeholder="Enter Your Email"
              ref={input => setInputValue(input)}
            />
            <div
              className={styles['content-email-confirm']}
              onClick={subscribe}
            >
              <ArrowRightOutlined
                className={styles['content-email-confirm-icon']}
              />
            </div>
          </div>
        </div>
        <div
          className={`${styles['enter']} ${styles[buttonPosition]}`}
          onClick={() => Router.push('/home')}
        >
          <Button buttonName={'Enter'}></Button>
        </div>
      </div>
    </div>
  )
}

export default Cover

Cover.getLayout = (page: Document) => {
  return <>{page}</>
}
