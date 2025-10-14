import React from "react";
import "./Cart.css";
import jeep from "../../assets/media/images/jeep.png";

export default function Cart() {
  return (
    <div>
      <div className="sell-section">
        <div className="left">
          <h1>
            Looking to sell
            <br />
            your car today?
          </h1>
          <div className="car-container">
            <img src={jeep} alt="Yellow Jeep" className="car-image" />
            <div className="offer offer-top-left">$28,688</div>
            <div className="offer offer-middle-left">$29,888</div>
            <div className="offer offer-bottom-right">$31,088</div>
          </div>
        </div>

        <div className="right">
          <div className="card dealership">
            <div className="tag">⚡ Fastest Option</div>
            <h2>Sell to dealership</h2>
            <ul>
              <li>Sell as early as today</li>
              <li>Get multiple offers</li>
              <li>Tax credit for trade-in</li>
              <li>Convenient drop-off</li>
            </ul>
            <button className="outline-btn">Get your offer now</button>
          </div>

          <div className="card private-sale">
            <h2>Sell privately</h2>
            <ul>
              <li>Free to list</li>
              <li>Reach the largest audience</li>
              <li>List it in minutes</li>
              <li>Sell at a retail price</li>
            </ul>
            <button className="outline-btn">List your ad</button>
          </div>
        </div>
      </div>
    </div>
  );
}
