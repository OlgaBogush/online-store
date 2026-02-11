import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useGetProductQuery } from "../../store/apiSlice"
import Product from "./Product"

const SingleProduct = () => {
  const { id } = useParams()
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })
  const navigate = useNavigate()

  useEffect(() => {
    if (!isSuccess && !isFetching && !isLoading) {
      navigate("/")
    }
  }, [isLoading, isFetching, isSuccess])

  return (
    <>
      <Product {...data} />
    </>
  )
}

export default SingleProduct
