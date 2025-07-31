import React from "react"
import { Route, Routes } from "react-router-dom"

import Home from "../Home/Home"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Sidebar from "../Sidebar/Sidebar"

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="container">
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
