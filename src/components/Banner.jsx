import React from "react"

import styles from "../styles/Banner.module.css"
import image from "../images/boombox.png"

const Banner = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.title}>
          Enhance Your <br />
          Music Experience
        </div>
        <button>Shop Now</button>
      </div>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </section>
  )
}

export default Banner
