import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import styles from "../../styles/Category.module.css"

import { useGetProductsQuery } from "../../store/apiSlice"
import Products from "../Products/Products"

const Category = () => {
  const { id } = useParams()
  const { list } = useSelector((state) => state.categories)

  // set category name
  const [cat, setCat] = useState(null)
  useEffect(() => {
    if (!id || !list.length) return
    setCat(list.find((item) => item.id === id * 1))
  }, [list, id])

  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  }

  const defaultParams = {
    ...defaultValues,
    categoryId: id,
    limit: 5,
    offset: 0,
  }

  const [values, setValues] = useState(defaultValues)
  const [params, setParams] = useState(defaultParams)

  // getting products
  useEffect(() => {
    if (!id) return
    setParams({ ...defaultParams, categoryId: id })
  }, [id])
  const { data, isLoading, isSuccess } = useGetProductsQuery(params)

  // pagination
  const [isEnd, setIsEnd] = useState(false)
  const [items, setItems] = useState([])

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setParams({ ...defaultParams, ...values })
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{cat?.name}</h2>
      <form className={styles.filters} onSubmit={handleSubmit}>
        <div className={styles.filter}>
          <input
            type="text"
            name="title"
            placeholder="Search..."
            onChange={handleChange}
            value={values.title}
          />
        </div>
        <div className={styles.filter}>
          <span>Price from:</span>
          <input
            type="number"
            name="price_min"
            placeholder="0"
            onChange={handleChange}
            value={values.price_min}
          />
        </div>
        <div className={styles.filter}>
          <span>Price to:</span>
          <input
            type="number"
            name="price_max"
            placeholder="0"
            onChange={handleChange}
            value={values.price_max}
          />
        </div>
        <button type="submit" hidden />
      </form>
      {isLoading ? (
        <div className="preloader">Loading...</div>
      ) : !isSuccess || !data.length ? (
        <div className={styles.back}>
          <span>No results</span>
          <button onClick={() => {}}>Reset</button>
        </div>
      ) : (
        <Products
          title=""
          products={data}
          style={{ padding: 0 }}
          amount={data.length}
        />
      )}
      {!isEnd && (
        <div className={styles.more}>
          <button onClick={() => {}}>See more</button>
        </div>
      )}
    </section>
  )
}

export default Category
