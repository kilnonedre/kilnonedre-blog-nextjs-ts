import React from 'react'
import Card from '@/components/Card'
import styles from './nowTrendingStyle.module.scss'

const cardList = [
  {
    title: 'first',
  },
  {
    title: 'second',
  },
  {
    title: 'third',
  },
]

const NowTrending = () => {
  return (
    <div className={styles['trendy']}>
      {cardList.map((card, index) => {
        return (
          <div className={styles['trendy-card']} key={index}>
            <Card />
          </div>
        )
      })}
    </div>
  )
}

export default NowTrending
