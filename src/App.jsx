import React, { useState, useEffect } from "react";
import "./assets/styles/App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card"
import products from "./products"
import Footer from "./components/Footer.jsx"
import setPrice from "./controllers/filters/price"


function App() {
  const [bag, setBag] = useState(() => JSON.parse(localStorage.getItem('bag')) || []);
  const [bagShown, setBagShown] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [filterBy, setFilterBy] = useState("all")
  const [sortBy, setSortBy] = useState([])

  useEffect(() => {
    localStorage.setItem('bag', JSON.stringify(bag));
  }, [bag])

  useEffect(() => {
    const initialValue = 0
    const totalItemsPrice = bag.reduce((accumulator, current) =>
      accumulator + current.price, initialValue)
    setTotalPrice(totalItemsPrice)
  })

  function addToBag(id) {
    products.map(item => {
      if (item.id === id)
        setBag(currentBag =>
          [...currentBag, item]
        )
    })
  }

  function setFilter(value) {
    if (value === "women") setFilterBy("women")
    else if (value === "men") setFilterBy("men")
    else { setFilterBy("all") }
  }

  const onChange = e => setSortBy(e.target.value);
  if (sortBy === "Price Low to High") setPrice.lowToHigh()
  if (sortBy === "Price High to Low") setPrice.highToLow()

  function toggleShoppingBag() {
    setBagShown(prevBagShown => !prevBagShown)
  }

  function deleteBagItem(event, itemId) {
    event.stopPropagation()
    setBag(prevBag =>
      prevBag.filter(item => item.id !== itemId))
  }

  const productCard =
    products.map(item => {
      if (item.gender === filterBy || filterBy === "all")
        return <Card
          key={item.id}
          altImage={item.altImage}
          mainImage={item.mainImage}
          name={item.name}
          gender={item.gender}
          price={item.price}
          addToBag={() => addToBag(item.id)}
        />
    })

  return (
    <div className="App">

      <Header
        bag={bag}
        bagShown={bagShown}
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
        {productCard}
      </section>
      <Footer />

    </div>
  )
}

export default App