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

  function toggleShoppingBag() {
    setBagShown(prevBagShown => !prevBagShown)
  }

  function deleteBagItem(event, itemId) {
    event.stopPropagation()
    setBag(prevBag => prevBag.filter(item => item.id !== itemId)
    )
  }

  const productCard = products.map(product =>
    <Card
      key={product.id}
      altImage={product.altImage}
      mainImage={product.altImage}
      name={product.name}
      gender={product.gender}
      price={product.price}
      addToBag={() => addToBag(product.id)}
    />
  );

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
        {productCard}
      </section>
      <Footer />

    </div>
  )
}

export default App

