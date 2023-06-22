import React from 'react'
import styles from './footerStyle.module.scss'

const contactList = ['', '', '', '', '', '']
const sentence =
  '我在情感上的愚钝，就像是门窗紧闭的屋子，虽然爱情的脚步在屋前走过来，又走过去，我也听到了，可我觉得那是路过的脚步，那是走向别人的脚步，直到有一天，那个脚步停留在这里，然后，门铃响了'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-body']}>
        <div className={styles['footer-body-sentence']}>{sentence}</div>
        <div className={styles['footer-body-misc']}>
          <div className={styles['footer-body-misc-contact']}>
            {contactList.map((contact, index) => {
              return (
                <li
                  className={styles['footer-body-misc-contact-icon']}
                  key={index}
                >
                  {contact}
                </li>
              )
            })}
          </div>
          <hr className={styles['footer-body-misc-divide']} />
          <div className={styles['footer-body-misc-copyright']}>test</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
