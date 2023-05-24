import React from 'react'
import styles from './homeStyle.module.scss'
import NewAndTrendy from '@/views/home/NewAndTrendy'
import NowTrending from '@/views/home/NowTrending'

const titleList = [
  {
    name: 'New & Trendy',
    component: <NewAndTrendy />,
  },
  {
    name: 'Now Trending',
    component: <NowTrending />,
  },
  {
    name: 'Short Reads',
    component: 1,
  },
  {
    name: 'Blog',
    component: 1,
  },
]

const Home = () => {
  return (
    <>
      <div className={styles['home']}>
        {titleList.map((title, index) => {
          return (
            <div className={styles['home-module']} key={index}>
              <div className={styles['home-module-theme']}>{title.name}</div>
              {title.component}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
