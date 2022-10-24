import React from "react";
import sampleCardImage from "../assets/images/mens-alt4.png"
import products from "../products"

export default function Product() {

    const productCard = products.map(product => {
        return <div className="product-card">
            <img src={products[0].altImage} />
            <h4>{products[0].name}</h4>
            <p>${products[0].price}</p>
            <button className="add-to-cart">add to cart</button>
        </div>
    })

    return (
        <section className="product">
            {productCard}
            
        </section>
    )
}