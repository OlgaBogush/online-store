import React, { useState } from "react"
import { useDispatch } from "react-redux"

import image from "../../images/side.jpg"
import styles from "../../styles/User.module.css"

import { createUser } from "../../store/userSlice"

const UserSignUpForm = ({ closeForm, switchTypeForm }) => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    password: "",
    avatar: "",
  })
  const dispatch = useDispatch()

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isNotEmpty = Object.values(values).every((item) => item)
    if (!isNotEmpty) return
    dispatch(createUser(values))
    closeForm()
  }

  return (
    <>
      <div className={styles.modal}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={styles.wrapper}>
          <div className={styles.close} onClick={closeForm}>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z" />
            </svg>
          </div>
          <div className={styles.title}>Sign Up</div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.group}>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={values.email}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.group}>
              <input
                type="name"
                name="name"
                placeholder="Your name"
                value={values.name}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.group}>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                value={values.password}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.group}>
              <input
                type="avatar"
                name="avatar"
                placeholder="Your avatar"
                value={values.avatar}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
            <div
              className={styles.link}
              onClick={() => switchTypeForm("login")}
            >
              I already have an account
            </div>
            <button type="submit" className={styles.submit}>
              Create an account
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UserSignUpForm
