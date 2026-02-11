import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { addItemToCart } from "../../store/userSlice"

import styles from "../../styles/Product.module.css"

const SIZES = [4, 4.5, 5]

const Product = (props) => {
  const { title, price, description, images } = props

  const [currentImage, setCurrentImage] = useState()
  const [currentSize, setCurrentSize] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!images.length) return
    setCurrentImage(images[0])
  }, [images])

  const addToCart = () => {
    dispatch(addItemToCart(props))
  }

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={styles["images-list"]}>
          {images.map((image, i) => (
            <div
              key={i}
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => {
                setCurrentImage(image)
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}>
          <span>Color:</span>Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>
          <div className={styles.list}>
            {SIZES.map((item) => (
              <div
                onClick={() => {
                  setCurrentSize(item)
                }}
                className={`${styles.size} ${
                  currentSize === item ? styles.active : ""
                }`}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <button
            className={styles.add}
            disabled={!currentSize}
            onClick={addToCart}
          >
            Add to cart
          </button>
          <button className={styles.favourites}>Add to favourites</button>
        </div>
      </div>
    </section>
  )
}

export default Product
