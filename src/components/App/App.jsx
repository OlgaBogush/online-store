import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Home/Home'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
