import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

import styles from "../styles/Sidebar.module.css"

const Sidebar = ({ amount }) => {
  const { list } = useSelector((state) => state.categories)
  const listFiltered = list.filter((_, index) => index < amount)

  return (
    <section className={styles.sidebar}>
      <nav>
        <ul className={styles.menu}>
          {listFiltered.map(({ id, name }) => {
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
