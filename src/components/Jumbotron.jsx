import React from "react";
import Iphone from "../assets/images/iphone-14.jpg"
import HoldingIphone from "../assets/images/iphone-hand.png"

function Jumbatron() {
    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img className="logo" src={Iphone} alt="IPhone 14 Pro" />
            <p className="text">
                Big and bigger.
            </p>
            <span className="description">
                Ab 54,12 €/Monat oder 1.299 € vor Inzahlungsnahme
            </span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <a className="link">Learn More</a>
                </li>
            </ul>
            <img src={HoldingIphone} alt="IPhone" className="iphone-img"/>
        </div>
    );
}

export default Jumbatron;