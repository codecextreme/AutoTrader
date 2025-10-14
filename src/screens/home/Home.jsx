import React from "react";
import "./Home.css";
import Navbar from "../../Components/navbar/Navbar";
import auto from "../../assets/media/images/auto.png";
import Searchbox from "../../Components/homeComponents/Searchbox";
import Cart from "../../Components/homeComponents/Cart";
import car from "../../assets/media/images/car.png";
import Hotoff from "../../Components/homeComponents/hotoff/Hotoff";
import Slider from "../../Components/homeComponents/slider/Slider";
import Popular from "../../Components/homeComponents/popularCars/Popular";
import Footer from "../../Components/footer/Footer";
import Winner from "../../Components/awardwinners/Winner";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="auto">
        <img src={auto} alt="" />
      </div>
      <div className="search-box">
        <Searchbox />
      </div>
      <div className="main-container">
        <div className="cart">
          <Cart />
        </div>
        <h1 style={{ marginTop: 200 }}>Browse by Body Type</h1>

        <div className="car-type">
          <div className="first-line">
            <div className="car-box">
              <img src={car} alt="" />
              <h3>Jeep</h3>
            </div>
            <div className="car-box">
              <img src={car} alt="" />
              <h3>Jeep</h3>
            </div>
            <div className="car-box">
              <img src={car} alt="" />
              <h3>Jeep</h3>
            </div>
            <div className="car-box">
              <img src={car} alt="" />
              <h3>Jeep</h3>
            </div>
          </div>
          <div className="second-line">
            <div className="car-box">
              <img src={car} alt="" />
              <h3>Jeep</h3>
            </div>
            <div className="car-box">
              <img src={car} alt="" />
              <h3>Jeep</h3>
            </div>
            <div className="car-box">
              <img src={car} alt="" />
              <h3>Jeep</h3>
            </div>
            <div className="car-box">
              <img src={car} alt="" />
              <h3>Jeep</h3>
            </div>
          </div>
        </div>
      </div>
     <Winner/>
      <div className="Hot-off">
        <Hotoff />
      </div>
      <div className="slider">
        <Slider />
      </div>
      <div className="popular-car">
        <Popular />
      </div>
      <Footer />
    </div>
  );
}
