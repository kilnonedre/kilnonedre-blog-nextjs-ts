import React from 'react'
import styles from './headerStyle.module.scss'
import { useRouter } from 'next/router'

const navList = ['Home', 'Connect', 'Sign u', 'Login']

const Header = () => {
  const router = useRouter()

  const toCoverPage = () => {
    router.push('/')
  }
  return (
    <header className={styles['header']}>
      <div className={styles['header-logo']} onClick={toCoverPage}>
        logo
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
