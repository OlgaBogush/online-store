import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { useGetProductQuery } from "../../store/apiSlice"
import { getRelatedProducts } from "../../store/productsSlice"
import Product from "./Product"
import Products from "./Products"

const SingleProduct = () => {
  const { id } = useParams()
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { list, related } = useSelector((state) => state.products)

  useEffect(() => {
    if (!data || !list.length) return
    dispatch(getRelatedProducts(data.category.id))
  }, [dispatch, data, list.length])

  useEffect(() => {
    if (!isSuccess && !isFetching && !isLoading) {
      navigate("/")
    }
  }, [isLoading, isFetching, isSuccess])

  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product {...data} />
      <Products products={related} title="Related products" amount={5} />
    </>
  )
}

export default SingleProduct
