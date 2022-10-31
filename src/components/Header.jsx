import React, { useState, useEffect } from "react";
import shopIcon from "../assets/icons/shop-icon.png"
import searchIcon from "../assets/icons/search-icon.png"
import userIcon from "../assets/icons/user-icon.png"
import deleteIcon from "../assets/icons/delete-icon.png"
import backArrowIcon from "../assets/icons/back-icon.png"
import { nanoid } from "nanoid";


export default function Header({ shoppingBag, setShoppingBag }) {
    const [totalPrice, setTotalPrice] = useState(0)
    const [showShoppingBag, setShowShoppingBag] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const initialTotalPrice = 0
        const totalItemsPrice = shoppingBag.reduce((accumulator, current) =>
            accumulator + current.price, initialTotalPrice)
        setTotalPrice(totalItemsPrice)
    })

    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)
        if (windowWidth > 480) setToggleMenu(true)
        else(setToggleMenu(false))
    },[windowWidth])

    function showMenu() {
        setToggleMenu(prevHide => !prevHide)
    }

    function toggleShoppingBag() {
        setShowShoppingBag(ShowShoppingBag => !ShowShoppingBag)
    }

    function deleteBagItem(event, itemId) {
        event.stopPropagation()
        setShoppingBag(currentBagItems =>
            currentBagItems.filter(item => item.id !== itemId))
    }


    const itemElement = shoppingBag.map(item =>
        <div className="bag-item-container"
            key={nanoid()}
        >
            <img src={item.mainImage} className="bag-item-image" />
            <div className="shopping-bag-item-text">
                <h5>{item.name}</h5>
                <p>{item.gender}</p>
                <p className="price">{`$${item.price}.00`}</p>
            </div>
            <img className="delete-icon"
                onClick={(event) => deleteBagItem(event, item.id)}
                src={deleteIcon}
            />
        </div>
    );

    return (
        <header >
            <div className="header-nav-container">
                <div className="header-logo-container">
                    <h1 className="logo">ETAPE {'>>'}</h1>
                </div>

                {toggleMenu && <nav className="nav-container">
                    <ul className="nav-list">
                        <li className="nav-item">Men</li>
                        <li className="nav-item">Women</li>
                        <li className="nav-item">Stories</li>
                        <li className="nav-item">Club</li>
                        <li className="nav-item">About us</li>
                        <li className="nav-item nav-icon-container">
                            {shoppingBag.length > 0 &&
                                <div className="bag-counter">{shoppingBag.length}</div>
                            }
                            <img className="nav-icons" src={searchIcon} />
                            <img className="nav-icons" src={userIcon} />

                            <img className="nav-icons" src={shopIcon}
                                onClick={toggleShoppingBag}
                            />


                        </li>
                    </ul>


                    {!showShoppingBag || shoppingBag.length > 0 &&
                        <div className="shopping-bag-container">
                            <img className="back-arrow-icon" src={backArrowIcon}
                                onClick={toggleShoppingBag}
                            />
                            <h4>Your Shopping Bag</h4>
                            <div className="bag-item-container-wrapper">{itemElement}</div>
                            <div className="items-total-price-container">
                                <div className="items-text-wrapper">
                                    <p>Bag total:</p>
                                    <p>Delivery</p>
                                </div>
                                <div className="items-text-wrapper">
                                    <p>${totalPrice}.00</p>
                                    <p>$4.59</p>
                                </div>
                            </div>
                            <div className="items-total-price-container sub-total">
                                <div className="items-text-wrapper">
                                    <h4>Subtotal:</h4>
                                </div>
                                <div className="items-text-wrapper">
                                    <h4>{`$${totalPrice + 4.59}`}</h4>
                                </div>
                            </div>
                            <div className="button-center">
                                <button
                                    className="checkout-button">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>}
                </nav>}

            </div>
            <div onClick={showMenu} className="menu-button">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </header >
    )
}