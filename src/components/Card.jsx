import React from "react";

export default function Card(props) {

    return (
        <div className="product-card">
            <div className="card-image">
                <img src={props.altImage} />
            </div>
            <h4>{props.name}</h4>
            <p>${props.price}</p>
            <button className="add-to-bag">add to bag</button>
        </div>
    )
}