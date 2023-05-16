import React from 'react'
import styles from './homeStyle.module.scss'
import Carousel from '@/views/home/Carousel'

const titleList = [
  {
    name: 'New & Trendy',
    component: <Carousel />
  },
  {
    name: 'Now Trending',
    component: 1
  },
  {
    name: 'Short Reads',
    component: 1
  },
  {
    name: 'Blog',
    component: 1
  }
]

const Home = () => {
  return (
    <>
      <div>
        {titleList.map((title, index) => {
          return (
            <div key={index}>
              <div className={styles['title']}>{title.name}</div>
              {title.component}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
