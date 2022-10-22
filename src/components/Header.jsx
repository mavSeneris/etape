import React from "react";
import shopIcon from "../assets/icons/shop-icon.png"
import searchIcon from "../assets/icons/search-icon.png"
import userIcon from "../assets/icons/user-icon.png"


export default function Header(){
    
    
    return(
        <header className="header-nav-container">
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
                    <li className="nav-item right-side"><img src={searchIcon} className="nav-icons"/></li>
                    <li className="nav-item"><img src={userIcon} className="nav-icons"/></li>
                    <li className="nav-item"><img src={shopIcon} className="nav-icons"/></li>
                </ul>
            </nav>
        </header>
    )
}