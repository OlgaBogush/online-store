import React from "react"
import { useSelector } from "react-redux"

import Poster from "../Poster/Poster"
import Products from "../Products/Products"

const Home = () => {
  const {list} = useSelector(state => state.products)

  return (
    <>
      <Poster />
      <Products title="Trending" products={list} amount={5} />
    </>
  )
}

export default Home
