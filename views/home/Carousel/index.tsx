import React from 'react'
import styles from './carouselStyle.module.scss'
import img from '@/assets/images/avatar/kilnoneblogAvatar.jpg'

const Carousel = () => {
  return (
    <div className={styles['carousel']}>
      <div className={styles['carousel-image']}>
        <img src={img.src} alt="" />
      </div>
      <div className={styles['carousel-text']}>
        <div className={styles['carousel-text-outer']}>
          <div className={styles['carousel-text-outer-msg']}>
            <p className={styles['carousel-text-outer-msg-subtype']}>Fantasy</p>
            <p className={styles['carousel-text-outer-msg-divide']}></p>
            <p className={styles['carousel-text-outer-msg-release']}>
              1 Month Ago
            </p>
          </div>
          <h1 className={styles['carousel-text-outer-title']}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
            quos.
          </h1>
          <p className={styles['carousel-text-outer-content']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem accusantium quasi quisquam id veritatis sit dolore
            excepturi eius in porro nobis enim repellat assumenda earum vel
            facilis, nemo mollitia! Voluptatibus, iusto quos saepe, nisi tempora
            nobis voluptas voluptates aspernatur necessitatibus, beatae officiis
            ullam debitis. Mollitia est quod fuga, quae commodi repellendus
            accusantium minima obcaecati nisi provident pariatur magni dolores.
            Perferendis, architecto? Ipsam amet consequatur totam fuga harum cum
            vitae excepturi nihil illum fugit exercitationem similique,
            perferendis provident odit eligendi quos, sapiente ab nulla
            temporibus rem inventore. Voluptate nulla aut ipsam atque molestiae
            ex fugit voluptatum, quibusdam, quod commodi doloribus dolores?
          </p>
          <div className={styles['carousel-text-outer-misc']}>
            <div className={styles['carousel-text-outer-misc-reader']}>
              12 Min Read
            </div>
            <div className={styles['carousel-text-outer-misc-show']}>
              Read Full{' '}
              <span className={styles['carousel-text-outer-misc-show-arrow']}>
                
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['carousel-text']}>
        <div className={styles['carousel-text-outer']}>
          <div className={styles['carousel-text-outer-msg']}>
            <p className={styles['carousel-text-outer-msg-subtype']}>Fantasy</p>
            <p className={styles['carousel-text-outer-msg-divide']}></p>
            <p className={styles['carousel-text-outer-msg-release']}>
              1 Month Ago
            </p>
          </div>
          <h1 className={styles['carousel-text-outer-title']}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
            quos.
          </h1>
          <p className={styles['carousel-text-outer-content']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem accusantium quasi quisquam id veritatis sit dolore
            excepturi eius in porro nobis enim repellat assumenda earum vel
            facilis, nemo mollitia! Voluptatibus, iusto quos saepe, nisi tempora
            nobis voluptas voluptates aspernatur necessitatibus, beatae officiis
            ullam debitis. Mollitia est quod fuga, quae commodi repellendus
            accusantium minima obcaecati nisi provident pariatur magni dolores.
            Perferendis, architecto? Ipsam amet consequatur totam fuga harum cum
            vitae excepturi nihil illum fugit exercitationem similique,
            perferendis provident odit eligendi quos, sapiente ab nulla
            temporibus rem inventore. Voluptate nulla aut ipsam atque molestiae
            ex fugit voluptatum, quibusdam, quod commodi doloribus dolores?
          </p>
          <div className={styles['carousel-text-outer-misc']}>
            <div className={styles['carousel-text-outer-misc-reader']}>
              12 Min Read
            </div>
            <div className={styles['carousel-text-outer-misc-show']}>
              Read Full{' '}
              <span className={styles['carousel-text-outer-misc-show-arrow']}>
                
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['carousel-image']}>
        <img src={img.src} alt="" />
      </div>
    </div>
  )
}

export default Carousel
