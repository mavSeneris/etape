import React, { useState, useEffect } from "react";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Footer from "./components/Footer.jsx"
import productsPrice from "./controllers/filters/products"
import products from "./products"
import "./assets/styles/App.css"

function App() {
  const [shoppingBag, setShoppingBag] = useState(() => JSON.parse(localStorage.getItem('shoppingBag')) || []);
  const [showShoppingBag, setShowShoppingBag] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [filterBy, setFilterBy] = useState("all")
  const [sortBy, setSortBy] = useState([])

  // Saves shopping bag items to user's browser local storage
  useEffect(() => {
    localStorage.setItem('shoppingBag', JSON.stringify(shoppingBag));
  }, [shoppingBag])

  useEffect(() => {
    const initialTotalPrice = 0
    const totalItemsPrice = shoppingBag.reduce((accumulator, current) =>
      accumulator + current.price, initialTotalPrice)
    setTotalPrice(totalItemsPrice)
  })

  function addItemToShoppingBag(id) {
    products.map(item => {
      if (item.id === id)
        setShoppingBag(currentItems =>
          [ ...currentItems, item]
        )
    })
  }

  function setFilter(value) {
    if (value === "women") setFilterBy("women")
    else if (value === "men") setFilterBy("men")
    else { setFilterBy("all") }
  }

  const onChange = e => setSortBy(e.target.value);
  if (sortBy === "Price Low to High") productsPrice.lowToHigh()
  if (sortBy === "Price High to Low") productsPrice.highToLow()

  function toggleShoppingBag() {
    setShowShoppingBag(ShowShoppingBag => !ShowShoppingBag)
  }

  function deleteBagItem(event, itemId) {
    event.stopPropagation()
    setShoppingBag(currentBagItems =>
      currentBagItems.filter(item => item.id !== itemId))
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
    <div className="App">

      <Header
        bag={shoppingBag}
        showShoppingBag={showShoppingBag}
        toggleShoppingBag={toggleShoppingBag}
        deleteBagItem={deleteBagItem}
        totalPrice={totalPrice}
      />
      <Hero />
      <section className="product">
        <div className="product-text">
          <h2>GET READY FOR NEW SEASON SUCCESS</h2>
          <p>The new season colours have landed.</p>
        </div>
        <div className="product-sort">
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
          <option>Sort</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
        {productCards}
      </section>
      <Footer />

    </div>
  )
}

export default App