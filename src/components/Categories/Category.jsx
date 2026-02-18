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

  const [isEnd, setIsEnd] = useState(false)

  // getting products according to the limit
  const { data, isLoading, isSuccess } = useGetProductsQuery(params)
  const [items, setItems] = useState([])

  useEffect(() => {
    if (!id) return
    setItems([])
    setIsEnd(false)
    setValues(defaultValues)
    setParams({ ...defaultParams, categoryId: id })
  }, [id])

  useEffect(() => {
    if (isLoading) return
    if (data.length < defaultParams.limit) {
      setItems((prev) => [...prev, ...data])
      return setIsEnd(true)
    }
    // for reset button only
    if (!data.length) {
      setIsEnd(true)
    }

    setItems((prev) => [...prev, ...data])
  }, [data, isLoading])

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setItems([])
    setIsEnd(false)
    setParams({ ...defaultParams, ...values })
  }

  const handleReset = () => {
    setValues(defaultValues)
    setParams(defaultParams)
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
      ) : !isSuccess || !items.length ? (
        <div className={styles.back}>
          <span>No results</span>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <Products
          title=""
          products={items}
          style={{ padding: 0 }}
          amount={items.length}
        />
      )}
      {!isEnd && (
        <button
          className={styles.more}
          onClick={() =>
            setParams({ ...params, offset: params.offset + params.limit })
          }
          disabled={isEnd}
        >
          See more
        </button>
      )}
    </section>
  )
}

export default Category
