import React from 'react'
import styles from './loadStyle.module.scss'

const Loading = () => {
  return (
    <div className={styles['panel']}>
      <div>loading</div>
    </div>
  )
}

export default Loading

Loading.getLayout = (page: Document) => {
  return <>{page}</>
}
