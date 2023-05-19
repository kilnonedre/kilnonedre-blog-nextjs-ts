import React from 'react'
import Carousel from '@/components/Carousel'
import styles from './newAndTrendyStyle.module.scss'

const NewAndTrendy = () => {
  return (
    <div className={styles['trendy']}>
      <Carousel />
    </div>
  )
}

export default NewAndTrendy
