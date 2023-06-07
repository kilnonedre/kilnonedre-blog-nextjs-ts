import React from 'react'
import styles from './cardStyle.module.scss'
import img from '@/assets/images/avatar/kilnoneblogAvatar.jpg'

const Card = () => {
  return (
    <div className={styles['card']}>
      <div className={styles['card-image']}>
        <img src={img.src} alt="articleCover" />
      </div>
      <div className={styles['card-msg']}>
        <p className={styles['card-msg-subtype']}>History</p>
        <p className={styles['card-msg-divide']}></p>
        <p className={styles['card-msg-release']}>1 Month Ago</p>
      </div>
      <div className={styles['card-title']}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
        consectetur est blanditiis enim dolorum obcaecati repellendus, autem
        aspernatur tenetur animi inventore distinctio in? Ipsa id, doloremque
        provident quod, cum obcaecati doloribus cumque voluptate distinctio,
        inventore unde repudiandae asperiores dicta. Aspernatur repellat
        obcaecati necessitatibus consequuntur doloribus iste, error sed quod
        tenetur.
      </div>
      <div className={styles['card-content']}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        accusantium. Natus, odit. Praesentium minima, architecto cum iusto eaque
        totam quidem. Velit nihil ut fuga consectetur sapiente incidunt illum
        cupiditate eum similique! Architecto est corrupti unde amet quidem sed.
        Vero nesciunt, quod expedita, rem nulla libero est consequuntur corporis
        fugit consequatur obcaecati sed voluptas tempore quaerat sit, fugiat
        dolor corrupti vitae optio repellat quos quas placeat eveniet sequi.
        Facilis, quae? Necessitatibus cum facere, asperiores unde veritatis
        iusto fuga voluptates recusandae maxime perferendis sint voluptas
        deserunt dolore eum non? Optio fugiat dignissimos unde deleniti laborum
        reprehenderit magnam debitis quam repudiandae aperiam. Rerum.
      </div>
      <div className={styles['card-misc']}>
        <div className={styles['card-misc-reader']}>12 Min Read</div>
        <div className={styles['card-misc-show']}>
          Read Full <span className={styles['card-misc-show-arrow']}></span>
        </div>
      </div>
    </div>
  )
}

export default Card
