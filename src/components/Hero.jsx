import React from "react";
import "../assets/styles/shopping-bag.css"
import heroImage from "../assets/images/hero-image1.jpg"


export default function Hero() {



    return (
        <section className="hero">
            <div className="hero-wrapper">
                <img src={heroImage} />
            </div>
            {/* <div className="text-wrapper">
                <h1 className="text-accent">ROAM FREE</h1>
                <p>The city throws a lot at you. Ride with confidence knowing your outerwear will perform. The wind and waterproof Roam Jacket 2.0 can handle harsher conditions while the new down-filled Packable Puffer is easy-to-stow option while on the move.</p>
            </div> */}
        </section>
    )
}