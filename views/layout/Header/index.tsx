import React from 'react'
import styles from './headerStyle.module.scss'
import { useRouter } from 'next/router'
import logo from '@/assets/images/logo/logo.jpg'

const eeee = 111

const Header = () => {
  const router = useRouter()

  const toCoverPage = () => {
    router.push('/')
  }
  return (
    <header className={styles['header']}>
      <div className={styles['header-logo']} onClick={toCoverPage}>
        <img src={logo.src} alt="logo" />
      </div>
      <div className={styles['header-nav']}>
        <div className={styles['header-nav-icon']}></div>
        <div className={styles['header-nav-icon']}></div>
        <div className={styles['header-nav-divide']}></div>
        <div className={styles['header-nav-avatar']}></div>
      </div>
    </header>
  )
}

export default Header
