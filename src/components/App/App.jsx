import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { useDispatch } from "react-redux"

import Home from "../Home/Home"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Sidebar from "../Sidebar/Sidebar"
import { getCategories } from "../../features/categories/categoriesSlice"
import { getProducts } from "../../features/products/productsSlice"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className="app">
      <Header />

      <div className="container">
        <Sidebar amount={7} />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
