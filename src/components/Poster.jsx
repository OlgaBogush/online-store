import React from "react"

import image from "../images/apple.png"
import BG from "../images/hero.png"

import styles from "../styles/Home.module.css"

const Poster = () => {
  return (
    <section className={styles.poster}>
      <div className={styles.description}>
        <div className={styles.intro}>
          <img className={styles.apple} src={image} alt="apple" />
          <div className={styles.adding}>iPhone 14 Series</div>
        </div>
        <div className={styles.title}>
          Up to 10% <br />
          off Voucher
        </div>
        <button>Shop Now</button>
      </div>
      <img src={BG} alt="phone" />
    </section>
  )
}

export default Poster
