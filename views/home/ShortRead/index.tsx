import React from 'react'
import styles from './shortReadStyle.module.scss'
import Label from '@/components/Label'

const labelList = [
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

const ShortRead = () => {
  return (
    <div className={styles['read']}>
      {labelList.map((label, index) => {
        return (
          <div className={styles['read-label']} key={index}>
            <Label />
          </div>
        )
      })}
    </div>
  )
}

export default ShortRead
