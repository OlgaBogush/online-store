import React from "react"
import { NavLink } from "react-router-dom"

import styles from "../styles/Sidebar.module.css"

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink className={styles.link}>some link</NavLink>
          </li>
          <li>
            <NavLink className={styles.link}>some link</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Sidebar
