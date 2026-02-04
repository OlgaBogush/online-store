import React from "react"
import { Link } from "react-router-dom"

import logo from "../images/handbag.png"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to={"/"} className={styles.logo}>
        <img className={styles.handbag} src={logo} alt="handbag" />
        Exclusive
      </Link>

      <div className={styles.rights}>
        Developed by{" "}
        <a
          href="https://github.com/OlgaBogush/online-store"
          target="_blank"
          rel="noreferrer"
        >
          Bohush Olga
        </a>
      </div>

      <div className={styles.socials}>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <svg className={styles.icon}>
            <use xlinkHref="/sprite.svg#instagram" />
          </svg>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <svg className={styles.icon}>
            <use xlinkHref="/sprite.svg#facebook" />
          </svg>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <svg className={styles.icon}>
            <use xlinkHref="/sprite.svg#youtube" />
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
