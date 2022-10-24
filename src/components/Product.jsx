import React from "react";
import sampleCardImage from "../assets/images/mens-alt4.png"
import products from "../products"

export default function Product() {

    const productCard = products.map(product => {
        return <div className="product-card">
            <div className="card-image">
                <img src={product.altImage} />
            </div>
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button className="add-to-cart">add to cart</button>
        </div>
    })

    return (
        <section className="product">
            {productCard}

        </section>
    )
}