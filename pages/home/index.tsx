import React from 'react'
import styles from './homeStyle.module.scss'
import NewAndTrendy from '@/views/home/newAndTrendy'
import NowTrending from '@/views/home/nowTrending'
import ShortRead from '@/views/home/shortRead'
import Blog from '@/views/home/blog'

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
    component: <ShortRead />,
  },
  {
    name: 'Blog',
    component: <Blog />,
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
