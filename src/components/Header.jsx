import React from "react";
import shopIcon from "../assets/icons/shop-icon.png"
import searchIcon from "../assets/icons/search-icon.png"
import userIcon from "../assets/icons/user-icon.png"
import deleteIcon from "../assets/icons/delete-icon.png"
import backArrowIcon from "../assets/icons/back-icon.png"
import { nanoid } from "nanoid";




export default function Header(props) {

    const itemElement = props.bag.map(item =>
        <div
            className="bag-item-container"
            key={nanoid()}
        >
            <img
                src={item.mainImage}
                className="bag-item-image"

            />

            <div className="shopping-bag-item-text">
                <h5>{item.name}</h5>
                <p>{item.gender}</p>
                <p className="price">{`$${item.price}.00`}</p>
            </div>

            <img
                onClick={(event) => props.deleteBagItem(event, item.id)}
                src={deleteIcon}
                className="delete-icon"
            />
        </div>
    );

    return (
        <header >
            <div className="header-nav-container">
                <div className="header-logo-container">
                    <h1 className="logo">ETAPE {'>>'}</h1>
                </div>
                <nav className="nav-container">
                    <ul className="nav-list">
                        <li className="nav-item">Men</li>
                        <li className="nav-item">Women</li>
                        <li className="nav-item">Stories</li>
                        <li className="nav-item">Club</li>
                        <li className="nav-item">About us</li>
                        <li className="nav-item right-side">
                            <img
                                src={searchIcon}
                                className="nav-icons" />
                        </li>
                        <li className="nav-item">
                            <img
                                src={userIcon}
                                className="nav-icons" />
                        </li>
                        <li className="nav-item">
                            <img
                                src={shopIcon}
                                onClick={props.toggleShoppingBag}
                                className="nav-icons" />
                        </li>
                    </ul>
                    {props.bag.length > 0 &&
                        <div
                            className="bag-counter">
                            {props.bag.length}
                        </div>}
                    {!props.bagShown || props.bag.length > 0 &&
                        <div className="shopping-bag-container">
                            <img
                                onClick={props.toggleShoppingBag}
                                src={backArrowIcon}
                                className="back-arrow-icon"
                            />
                            <h4>Your Shopping Bag</h4>
                            <div className="bag-item-container-wrapper">{itemElement}</div>
                            <div className="items-total-price-container">
                                <div className="items-text-wrapper">
                                    <p>Bag total:</p>
                                    <p>Delivery</p>
                                </div>
                                <div className="items-text-wrapper">
                                    <p>${props.totalPrice}.00</p>
                                    <p>$4.59</p>
                                </div>
                            </div>
                            <div className="items-total-price-container sub-total">
                                <div className="items-text-wrapper">
                                    <h4>Subtotal:</h4>
                                </div>
                                <div className="items-text-wrapper">
                                    <h4>{`$${props.totalPrice + 4.59}`}</h4>
                                </div>
                            </div>
                            <div className="button-center">
                                <button
                                    className="checkout-button">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>}
                </nav>
            </div>


        </header >
    )
}