   import React, { useState, useEffect } from "react";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Collections from "./components/Collections";
import Footer from "./components/Footer.jsx"
import "./assets/styles/App.css"

function App() {
  const [shoppingBag, setShoppingBag] = useState(() => JSON.parse(localStorage.getItem('shoppingBag')) || []);

  useEffect(() => {
    localStorage.setItem('shoppingBag', JSON.stringify(shoppingBag));
  }, [shoppingBag])

  console.log(shoppingBag)


  return (
    <div className="App">
      <Header
        shoppingBag={shoppingBag}
        setShoppingBag={setShoppingBag} />
      <Hero />
      <Collections
        setShoppingBag={setShoppingBag}  
        shoppingBag={shoppingBag}
        />
      <Footer />
    </div>
  )
}

export default App