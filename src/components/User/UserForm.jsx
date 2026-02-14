import React from "react"
import { useDispatch, useSelector } from "react-redux"

import styles from "../../styles/User.module.css"

import UserSignUpForm from "./UserSignUpForm"
import UserLogInForm from "./UserLogInForm"
import { toggleForm, toggleTypeForm } from "../../store/userSlice"

const UserForm = () => {
  const { showForm, formType } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const closeForm = () => dispatch(toggleForm(false))
  const switchTypeForm = (type) => dispatch(toggleTypeForm(type))

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
      {formType === "signup" ? (
        <UserSignUpForm closeForm={closeForm} switchTypeForm={switchTypeForm} />
      ) : (
        <UserLogInForm closeForm={closeForm} switchTypeForm={switchTypeForm} />
      )}
    </>
  ) : (
    <></>
  )
}

export default UserForm
