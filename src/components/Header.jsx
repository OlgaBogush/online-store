import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import logo from "../images/handbag.png"
import AVATAR from "../images/user.png"
import styles from "../styles/Header.module.css"

import { toggleForm } from "../store/userSlice"
import { useGetProductsQuery } from "../store/apiSlice"

const Header = () => {
  const [value, setValue] = useState({ name: "Guest", avatar: AVATAR })
  const [searchValue, setSearchValue] = useState("")
  const { currentUser } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data, isLoading } = useGetProductsQuery({ title: searchValue })

  const handleClick = () => {
    if (!currentUser) {
      dispatch(toggleForm(true))
    } else {
      navigate("/profile")
    }
  }

  useEffect(() => {
    if (!currentUser) return
    setValue(currentUser)
  }, [currentUser])

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.logo}>
        <img className={styles.handbag} src={logo} alt="handbag" />
        Exclusive
      </Link>

      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${value.avatar})` }}
          />
          <div className={styles.username}>{value.name}</div>
        </div>

        <form className={styles.form}>
          <svg
            className={styles.search}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>

          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anything..."
              autoComplete="off"
              onChange={handleSearch}
              value={searchValue}
            />
          </div>
          {searchValue && (
            <div className={styles.box}>
              {isLoading
                ? "Loading..."
                : !data.length
                ? "No results"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        className={styles.item}
                        to={`/products/${id}`}
                        onClick={() => setSearchValue("")}
                      >
                        <div
                          className={styles.image}
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className={styles.title}>{title}</div>
                      </Link>
                    )
                  })}
            </div>
          )}
        </form>
        <div className={styles.account}>
          <Link to="/" className={styles.heart}>
            <svg
              className={styles["icon-heart"]}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z" />
            </svg>
          </Link>
          <Link to="/cart" className={styles.cart}>
            <svg
              className={styles["icon-cart"]}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
            </svg>
            <span className={styles.count}>2</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
