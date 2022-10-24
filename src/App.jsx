import React, { useState } from "react";
import "./assets/styles/App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card"
import products from "./products"
import Footer from "./components/Footer.jsx"



function App() {
  const [bag, setBag] = useState([]);


  const productCard = products.map(product =>
    <Card
      key={product.id}
      altImage={product.altImage}
      mainImage={product.altImage}
      name={product.name}
      price={product.price}
    />
  );

  return (
    <div className="App">
      <Header />
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

