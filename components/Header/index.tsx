import React from 'react'
import styles from './headerStyle.module.scss'

const navList = ['Home', 'Connect', 'Sign u', 'Login']

const Header = () => {
  return (
    <header className={styles['header']}>
      <div>logo</div>
      <nav className={styles['header-nav']}>
        {navList.map((nav, index) => {
          return <li key={index}>{nav}</li>
        })}
      </nav>
    </header>
  )
}

export default Header
