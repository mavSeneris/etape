import React from "react";
import "./assets/styles/App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Product.jsx"
import Footer from "./components/Footer.jsx"


function App() {
  

  return (
    <div className="App">
      <Header />
      <Hero />
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
