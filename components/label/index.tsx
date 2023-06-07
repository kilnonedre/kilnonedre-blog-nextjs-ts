import React from 'react'
import img from '@/assets/images/avatar/kilnoneblogAvatar.jpg'
import styles from './labelStyle.module.scss'

const Label = () => {
  return (
    <div className={styles['label']}>
      <div className={styles['label-image']}>
        <img src={img.src} alt="articleCover" />
      </div>
      <div className={styles['label-msg']}>
        <div className={styles['label-msg-title']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          tempore enim. Minus assumenda corporis accusamus, error modi nihil
          impedit sequi.
        </div>
        <div className={styles['label-msg-content']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quos eaque nihil rerum accusantium. Natus reiciendis molestiae minus
          debitis voluptas velit rerum ullam sequi possimus. Quidem architecto
          animi omnis vero.
        </div>
      </div>
    </div>
  )
}

export default Label
