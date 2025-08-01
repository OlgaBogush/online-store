import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

import styles from "../../styles/Sidebar.module.css"

const Sidebar = ({amount}) => {
  const { list } = useSelector(state => state.categories)
  const newList = list.filter((_, i) => i < amount)

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {newList.map(({id, name}) => (
              <li key={id}>
                <NavLink className={({isActive}) => `${styles.link} ${isActive ? styles.active : ""}`} to={`/categories/${id}`}>{name}</NavLink>
              </li>
            ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" className={styles.link} target="_blank">
          Help
        </a>
        <a
          href="/terms"
          className={styles.link}
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  )
}

export default Sidebar
