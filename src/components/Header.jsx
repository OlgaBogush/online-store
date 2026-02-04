import React from "react"
import { Link } from "react-router-dom"

import logo from "../images/handbag.png"
import avatar from "../images/avatar.png"
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={"/"} className={styles.logo}>
        <img className={styles.handbag} src={logo} alt="handbag" />
        Exclusive
      </Link>

      <div className={styles.info}>
        <div className={styles.user}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${avatar})` }}
          />
          <div className={styles.username}>Guest</div>
        </div>

        <form className={styles.form}>
          <svg className={styles.icon}>
            <use xlinkHref="/sprite.svg#search" />
          </svg>

          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anything..."
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>

          <div className={styles.box}></div>
        </form>
        <div className={styles.account}>
          <Link to="/" className={styles.favourites}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref="/sprite.svg#heart" />
            </svg>
          </Link>
          <Link to="/cart" className={styles.bag}>
            <svg className={styles["icon-bag"]}>
              <use xlinkHref="/sprite.svg#bag" />
            </svg>
            <span className={styles.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
