import React from 'react'
import styles from './footerStyle.module.scss'

const contactList = ['qq', 'vx', 'tt', 'wgqq', 'git', 'weibo']
const sentence =
  '我在情感上的愚钝，就像是门窗紧闭的屋子，虽然爱情的脚步在屋前走过来，又走过去，我也听到了，可我觉得那是路过的脚步，那是走向别人的脚步，直到有一天，那个脚步停留在这里，然后，门铃响了'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-contact']}>
        {contactList.map((contact, index) => {
          return <li key={index}>{contact}</li>
        })}
      </div>
      <div>{sentence}</div>
    </footer>
  )
}

export default Footer
