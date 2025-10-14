import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/media/images/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dropdown from "../../Components/navdropdown/Dropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navItemRef = useRef(null);

  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const accountDropdownRef = useRef(null);
  const accountButtonRef = useRef(null);

  const topNavItems = [
    { label: "Cars, Trucks & SUVs", path: "/" },
    { label: "Commercial / Heavy Trucks", path: "/Trucks" },
    { label: "Trailers", path: "/Trailer" },
    { label: "RVs", path: "/RVs" },
    { label: "Boats", path: "/Boats" },
    { label: "Watercraft", path: "/Watercraft" },
    { label: "Bikes & ATVs", path: "/bikes" },
    { label: "Snowmobiles", path: "/snowmobiles" },
    { label: "Heavy Equipment", path: "/Heavyequipments" },
    { label: "Farm", path: "/farm" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        navItemRef.current &&
        !navItemRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountDropdownRef.current &&
        !accountDropdownRef.current.contains(event.target) &&
        accountButtonRef.current &&
        !accountButtonRef.current.contains(event.target)
      ) {
        setShowAccountDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="top-nav">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="manu">
          {topNavItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="bottom-nav">
        <div className="center">
          <span onClick={() => navigate("/Buyonline")}>Buy online</span>
          <span style={{ alignItems: "center", display: "flex" }}>
            Financing <sup className="new-badge">NEW</sup>
          </span>
          <span onClick={() => navigate("/Sellmycar")}>Sell my car</span>
          <span>What's my car worth?</span>

          <nav className="navbar">
            <div className="nav-item" ref={navItemRef}>
              <span
                className="nav-link"
                onClick={() => setShowDropdown(!showDropdown)}
                aria-expanded={showDropdown}
                style={{ display: "flex", alignItems: "center" }}
              >
                Research & Advice
                <KeyboardArrowDownIcon
                  className={`arrow-icon ${showDropdown ? "rotated" : "not"}`}
                />
              </span>
            </div>
          </nav>

          <div
            ref={dropdownRef}
            className={`dropdown-wrapper ${showDropdown ? "active" : "close"}`}
          >
            <Dropdown />
          </div>
        </div>
        <div className="right1">
          <div className="account-section" ref={accountButtonRef}>
            <button
              className="account-btn"
              onClick={() => setShowAccountDropdown(!showAccountDropdown)}
            >
              <span className="icon">
                <AccountCircleIcon />
              </span>
              My Account
            </button>

            <div
              ref={accountDropdownRef}
              className={`dropdown-wrapper account-dropdown ${
                showAccountDropdown ? "active" : "close"
              }`}
            >
              <ul className="account-dropdown-list">
                <li onClick={() => navigate("/Signin")}>Log in / Sign up</li>
                <li>Manage your ads</li>
              </ul>
            </div>
          </div>

          <span className="lang">FR</span>
        </div>
      </div>
      <button className="feedback-button">Feedback</button>
    </div>
  );
}
