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
    <div className={styles['panel']}>
      {labelList.map((label, index) => {
        return (
          <div className={styles['panel-label']} key={index}>
            <Label />
          </div>
        )
      })}
    </div>
  )
}

export default ShortRead
