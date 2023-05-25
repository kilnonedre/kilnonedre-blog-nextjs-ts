import React from 'react'
import styles from './blogStyle.module.scss'
import Card from '@/components/Card'
import Label from '@/components/Label'

const subtypeList = [
  {
    subtype: 'comedy',
  },
  {
    subtype: 'fantasy',
  },
  {
    subtype: 'drama',
  },
  {
    subtype: 'action',
  },
  {
    subtype: 'history',
  },
  {
    subtype: 'military',
  },
]

const Blog = () => {
  return (
    <div className={styles['blog']}>
      <div className={styles['blog-nav']}>
        {subtypeList.map((subtype, index) => {
          return (
            <div className={styles['blog-nav-subtype']} key={index}>
              {subtype.subtype}
            </div>
          )
        })}
      </div>
      <div className={styles['blog-story']}>
        <div className={styles['blog-story-update']}>
          <div className={styles['blog-story-update-prominent']}>
            <Card />
          </div>
          <div className={styles['blog-story-update-outer']}>
            <div className={styles['blog-story-update-outer-list']}>
              <Label />
              <Label />
              <Label />
              <Label />
              <Label />
              <Label />
              <Label />
              <Label />
              <Label />
            </div>
          </div>
        </div>
        <div className={styles['blog-story-manga']}>
          <div className={styles['blog-story-manga-outer']}>
            <div className={styles['blog-story-manga-outer-list']}>
              <Label />
              <Label />
              <Label />
              <Label />
              <Label />
              <Label />
              <Label />
              <Label />
              <Label />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
