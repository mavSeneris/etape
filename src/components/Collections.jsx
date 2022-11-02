import React, { useState } from "react";
import Card from "./Card"
import products from "../products"
import productsPrice from "../controllers/filters/products"
import { nanoid } from "nanoid";

export default function Collection({ setShoppingBag }) {
  const [filterBy, setFilterBy] = useState("all")
  const [sortBy, setSortBy] = useState()

  function setFilter(value) {
    if (value === "women") setFilterBy("women")
    else if (value === "men") setFilterBy("men")
    else { setFilterBy("all") }
  }

  const onChange = e => setSortBy(e.target.value);
  if (sortBy === "Price Low to High") productsPrice.lowToHigh()
  if (sortBy === "Price High to Low") productsPrice.highToLow()

  function addItemToShoppingBag(id) {
    products.map(item => {
      if (item.id === id) {
        setShoppingBag(currentItems =>
          [...currentItems, item]
        )
      } else {
        setShoppingBag(currentItems => {
          return currentItems.map((item) => {
            return item.id === id ? { ...item, id: nanoid() } : item
          })
        })
      }
    })
  }

  const productCards =
    products.map(item => {
      if (item.gender === filterBy || filterBy === "all")
        return <Card
          key={item.id}
          altImage={item.altImage}
          mainImage={item.mainImage}
          name={item.name}
          gender={item.gender}
          price={item.price}
          addItemToShoppingBag={() => addItemToShoppingBag(item.id)}
        />
    })

  return (
    <section className="product">
      <div className="product-text">
        <h2>GET READY FOR NEW SEASON SUCCESS</h2>
        <p>The new season colours have landed.</p>
      </div>
      <div className="product-filter">
        <p
          style={{ color: filterBy === "all" ? "#EF8354" : "white" }}
          onClick={() => setFilter("all")}>
          All
        </p>
        <p
          style={{ color: filterBy === "men" ? "#EF8354" : "white" }}
          onClick={() => setFilter("men")}>
          Men
        </p>
        <p
          style={{ color: filterBy === "women" ? "#EF8354" : "white" }}
          onClick={() => setFilter("women")}>
          Women
        </p>
      </div>
      <select
        id="select"
        name="select"
        onChange={onChange}
        className="pill sort-by"
      >
        <option>Sort By:</option>
        <option>Price Low to High</option>
        <option>Price High to Low</option>
      </select>
      {productCards}
    </section>
  )
}