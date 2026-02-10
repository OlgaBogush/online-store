import React from "react"
import { useSelector } from "react-redux"

import Poster from "./Poster"
import Products from "./Products"
import Categories from "./Categories"

const Home = () => {
  const products = useSelector((state) => state.products.list)
  const categories = useSelector((state) => state.categories.list)
  return (
    <>
      <Poster />
      <Products products={products} title="Our Products" amount={5} />
      <Categories title="Categories" products={categories} amount={5} />
    </>
  )
}

export default Home
