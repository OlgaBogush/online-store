import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

import styles from "../styles/Sidebar.module.css"

const Sidebar = () => {
  const { list } = useSelector((state) => state.categories)

  return (
    <section className={styles.sidebar}>
      <nav>
        <ul className={styles.menu}>
          {list.map(({ id, name }) => {
            return (
              <li key={id}>
                <NavLink
                  to={`/categories/${id}`}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ""}`
                  }
                >
                  {name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </section>
  )
}

export default Sidebar
