import React from "react"
import { useSelector } from "react-redux"

import Poster from "../Poster/Poster"
import Products from "../Products/Products"
import Categories from "../Categories/Categories"

const Home = () => {
  const {products, categories} = useSelector((state) => state)

  return (
    <>
      <Poster />
      <Products title="Trending" products={products.list} amount={5} />
      <Categories title="Worth seeing" products={categories.list} amount={5} />
    </>
  )
}

export default Home
