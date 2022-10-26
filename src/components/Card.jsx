import React from "react";

export default function Card(props) {

    return (
        <div
            className="product-card"
        >
            <div className="card-image">
                <img src={props.altImage}
                    onMouseOver={e => (e.currentTarget.src = props.mainImage)}
                    onMouseLeave={e => (e.currentTarget.src = props.altImage)}
                />


            </div>
            <h4>{props.name}</h4>
            <h5>{props.gender}</h5>
            <p>${props.price}</p>

            <button className="add-to-bag" onClick={props.addToBag}>add to bag</button>
        </div>
    )
}