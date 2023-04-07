import React from 'react'
import Router from 'next/router'
import styles from '/styles/indexStyle.module.scss'

// 展示背景图片
const showBackground = () => {
  console.log('click')
}

const Cover = () => {
  return (
    <div className={styles['cover']} onDoubleClick={showBackground}>
      <div className={styles['cover-mask']}>
        <div className={styles['content']}>
          <p className={styles['content-title']}>Welcome to Yume</p>
          <p>
            我喜欢你，
            <br />
            并不是因为你长得好不好看，
            <br />
            而是你在特殊的时间里给了我别人给不了的感觉！
          </p>
          <div className={styles['content-leaveEmail']}>
            <p>SUBSCRIBE</p>
            <input type='text' placeholder='Enter Your Email' />
            <div>确认</div>
          </div>
        </div>
        <div className={styles['enter']} onClick={() => Router.push('/home')}>
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
