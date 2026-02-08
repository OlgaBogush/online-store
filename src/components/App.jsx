import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { useDispatch } from "react-redux"

import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { getCategories } from "../store/categoriesSlice"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
