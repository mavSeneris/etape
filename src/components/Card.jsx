import React from "react";

export default function Card(props) {

    return (
        <div
            className="product-card"
        >
            <div className="product-card-image">
                <img src={props.altImage}
                    onMouseOver={e => (e.currentTarget.src = props.mainImage)}
                    onMouseLeave={e => (e.currentTarget.src = props.altImage)}
                />
            </div>
            <h4 className="product-name">{props.name}</h4>
            <h5 className="product-gender">{props.gender}</h5>
            <p className="product-price">${props.price}</p>

            <button className="btn-add-to-bag" onClick={props.addItemToShoppingBag}>add to bag</button>
        </div>
    )
}