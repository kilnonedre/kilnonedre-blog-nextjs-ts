import React, { useRef } from 'react'
import styles from './loadStyle.module.scss'

const Loading = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  return (
    <div className={styles['panel']}>
      <div>loading</div>
      <canvas ref={canvasRef} width="600px" height="600px"></canvas>
    </div>
  )
}

export default Loading

Loading.getLayout = (page: Document) => {
  return <>{page}</>
}
