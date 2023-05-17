import React from 'react'
import styles from './headerStyle.module.scss'
import { useRouter } from 'next/router'
import logo from '@/assets/images/logo/logo.jpg'

const navList = ['Home', 'Connect', 'Sign u', 'Login']

const test = 1

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
      <nav className={styles['header-nav']}>
        {navList.map((nav, index) => {
          return <li key={index}>{nav}</li>
        })}
      </nav>
    </header>
  )
}

export default Header
