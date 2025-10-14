import React from "react";
import "./Sellmycar.css";
import Navbar from "../../Components/navbar/Navbar";
import gtr from "../../assets/media/images/gtr.png";
import ErrorIcon from "@mui/icons-material/Error";
import Sellprivate from '../../Components/sellprivately/Sellprivate'

const SellCarForm = () => {
  return (
    <>
      <Navbar />
      <div className="padder">
        <div className="sell-car-container">
          <div className="left-section3">
            <h1>Sell your car, fast.</h1>
            <p>
              As the largest automotive marketplace in Canada, <br /> we can
              help you sell your car today for free.
            </p>
            <div className="car-images">
              <img src={gtr} alt="White Car" className="white-car" />
            </div>
          </div>

          <div className="right-section">
            <h2>Sell to a dealership</h2>
            <label style={{ display: "flex", alignItems: "center", gap: 5 }}>
              VIN*
              <div className="tooltip-container">
                <ErrorIcon />
                <span className="tooltip-message">
                  Your VIN (17 characters) can be located in two <br /> places
                  on your vehicle. The first is in the driver's <br /> side
                  doorjamb, and second is under the windshield, <br /> in the
                  bottom right corner. You can also find the VIN <br /> on your
                  registration and insurance.
                </span>
              </div>
            </label>

            <input type="text" placeholder="Your VIN is 17 characters" />

            <label style={{ display: "flex", alignItems: "center", gap: 5 }}>
              Trim*
              <div className="tooltip-container">
                <ErrorIcon />
                <span className="tooltip-message">
                  A trim level is a version of a vehicle model that is <br />{" "}
                  equipped with a distinct set of features. It can be <br />{" "}
                  found in the owner's manual and rear or side of the <br />{" "}
                  vehicle.
                </span>
              </div>
            </label>

            <select>
              <option>Select an option</option>
            </select>

            <button>Get your offer now</button>

            <p className="bottom-link">
              Looking to find out what your car is worth?{" "}
              <a href="#">Click here</a>
            </p>
          </div>
        </div>
        <Sellprivate/>
      </div>
    </>
  );
};

export default SellCarForm;
