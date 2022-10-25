import React from "react";
import { nanoid } from "nanoid";
import deleteIcon from "../assets/icons/delete-icon.png"
import backArrowIcon from "../assets/icons/back-icon.png"
import "../assets/styles/shopping-bag.css"


export default function Hero(props) {

    const itemElement = props.bag.map(item =>

        <div className="bag-item-container" key={nanoid()}>
            <img src={item.mainImage} className="bag-item-image" />
            <div className="shopping-bag-item-text">
                <h5>{item.name}</h5>
                <p>{item.gender}</p>
                <p className="price">{`$${item.price}.00`}</p>
            </div>
            <img onClick={(event) => props.deleteBagItem(event, item.id)} src={deleteIcon} className="delete-icon" />
        </div>

    );

    return (
        <section className="hero">

            <div className="text-wrapper">
                <h1 className="text-accent">ROAM FREE</h1>
                <p>The city throws a lot at you. Ride with confidence knowing your outerwear will perform. The wind and waterproof Roam Jacket 2.0 can handle harsher conditions while the new down-filled Packable Puffer is easy-to-stow option while on the move.</p>
            </div>

            {!props.bagShown || props.bag.length > 0 && <div className="shopping-bag-container">
                <img onClick={props.toggleShoppingBag} src={backArrowIcon} className="back-arrow-icon" />
                <h4>Your Shopping Bag</h4>
                {itemElement}
                <div className="items-total-price-container">
                    <div className="items-text-wrapper">
                        <p>Bag total:</p>
                        <p> Delivery</p>
                    </div>
                    <div className="items-text-wrapper">
                        <p>$590.00</p>
                        <p>$4.59</p>
                    </div>
                </div>

                <div className="items-total-price-container sub-total">
                    <div className="items-text-wrapper">
                        <h4>Subtotal:</h4>
                    </div>
                    <div className="items-text-wrapper">
                        <h4>$594.90</h4>
                    </div>
                </div>
                <div class="button-center">
                    <button className="checkout-button">Proceed to Checkout</button>
                </div>
            </div>}
        </section>
    )
}