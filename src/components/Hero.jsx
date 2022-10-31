import React from "react";
import "../assets/styles/shopping-bag.css"
import heroImage from "../assets/images/hero-image1.jpg"


export default function Hero() {



    return (
        <section className="hero">

            <img src={heroImage} />

            {/* <div className="bottom-left">
                <h3 className="text-accent">ROAM FREE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget leo ullamcorper, suscipit nisl at, vehicula libero.</p>
            </div> */}
        </section>
    )
}