import React, { useState, useEffect } from "react";
import "./assets/styles/App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card"
import products from "./products"
import Footer from "./components/Footer.jsx"

function App() {
  const [bag, setBag] = useState(() => JSON.parse(localStorage.getItem('bag')) || []);
  const [bagShown, setBagShown] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [viewProductBy, setViewProductBy] = useState("all")

  useEffect(() => {
    localStorage.setItem('bag', JSON.stringify(bag));
  }, [bag])

  useEffect(() => {
    const initialValue = 0
    const total = bag.reduce((accumulator, current) =>
      accumulator + current.price, initialValue)
    setTotalPrice(total)
  })

  function addToBag(id) {
    products.map((item) => {
      if (item.id === id) {
        setBag(currentBag =>
          [...currentBag, item]
        )
      }
    })
  }

  function setCategoryBy(value) {
    if (value === "women") {
      setViewProductBy("women")
    }
    else if (value === "men") {
      setViewProductBy("men")
    }
    else if (value === "all") {
      setViewProductBy("all")
    }
  }

  function toggleShoppingBag() {
    setBagShown(prevBagShown => !prevBagShown)
  }

  function deleteBagItem(event, itemId) {
    event.stopPropagation()
    setBag(prevBag =>
      prevBag.filter(item => item.id !== itemId))
  }

  const productCard =
    products.map((item) => {
      if (item.gender === viewProductBy || viewProductBy === "all") {
        return <Card
          key={item.id}
          altImage={item.altImage}
          mainImage={item.mainImage}
          name={item.name}
          gender={item.gender}
          price={item.price}
          addToBag={() => addToBag(item.id)}
        />
      }
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
            style={{ color: viewProductBy === "all" ? "#EF8354" : "white" }}
            onClick={() => setCategoryBy("all")}>
            All
          </p>
          <p
            style={{ color: viewProductBy === "men" ? "#EF8354" : "white" }}
            onClick={() => setCategoryBy("men")}>
            Men
          </p>
          <p
            style={{ color: viewProductBy === "women" ? "#EF8354" : "white" }}
            onClick={() => setCategoryBy("women")}>
            Women
          </p>
        </div>
        {productCard}
      </section>
      <Footer />

    </div>
  )
}

export default App