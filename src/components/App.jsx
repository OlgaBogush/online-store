import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { getCategories } from "../store/categoriesSlice"
import { getProducts } from "../store/productsSlice"
import SingleProduct from "./Products/SingleProduct"
import UserForm from "./User/UserForm"
import Profile from "./Profile"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      <UserForm />
      <div className="container">
        <Sidebar amount={7} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
