import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Poster from "./Poster"

import Products from "./Products/Products"
import Categories from "./Categories"
import Banner from "./Banner"
import { filterByPrice } from "../store/productsSlice"

const Home = () => {
  const dispatch = useDispatch()

  const categories = useSelector((state) => state.categories.list)
  const { list, filtered } = useSelector((state) => state.products)

  useEffect(() => {
    if (!list.length) return
    dispatch(filterByPrice(100))
  }, [dispatch, list.length])

  return (
    <>
      <Poster />
      <Products products={list} title="Our Products" amount={5} />
      <Categories title="Categories" products={categories} amount={5} />
      <Banner />
      <Products products={filtered} title="Less than 100$" amount={5} />
    </>
  )
}

export default Home
