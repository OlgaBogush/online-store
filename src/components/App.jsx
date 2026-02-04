import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

const App = () => {
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
