import React from "react"
import { Link } from "react-router-dom"

import styles from "../../styles/Footer.module.css"

import LOGO from "../../images/logo.svg"
import { ROUTES } from "../../utils/routes"

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.logo}>
      <Link to={ROUTES.HOME}>
        <img src={LOGO} alt="shopping" />
      </Link>
    </div>
    <div className={styles.rights}>
      Developed by{" "}
      <a href="https://github.com/OlgaBogush" target="_blank" rel="noreferrer">
        Olga Bogush
      </a>
    </div>
    <div className={styles.socials}>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
        </svg>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
        </svg>
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
        </svg>
      </a>
    </div>
  </section>
)
export default Footer
