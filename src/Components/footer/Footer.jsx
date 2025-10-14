import React from 'react';
import './Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import facebook from '.././../assets/media/icons/Facebook svg.png'
import logo from '../../../src/assets/media/images/auto1.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>TRADER Corporation</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
          <h4>Dealer Services</h4>
          <ul>
            <li>Marketplace</li>
            <li>Dealership Website</li>
            <li>Digital Marketing</li>
            <li>Inventory Management</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Mobile Apps</li>
            <li>Vehicle Research</li>
            <li>Motorcycle Research</li>
            <li>Owner Reviews</li>
            <li>Car Dealer Locator</li>
            <li>Car Buying & Selling Tips</li>
            <li>Safety Tips</li>
            <li>Ad Centre Locator</li>
            <li>Used Cars in Canada</li>
            <li>Compare CPO</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Partners</h4>
          <ul>
            <li>Autos.ca</li>
            <li>AutoHebdo.net</li>
          </ul>
          <h4>Customer Support</h4>
          <ul>
            <li>FAQ</li>
            <li>Feedback & Comments</li>
            <li>Find my Ad</li>
            <li>AdChoices</li>
            <li>Election Ads Registry</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-right">
            <img src={logo} alt="" />
          <div className="social-icons">
            <div className="social-back">
            <img src={facebook} alt="" style={{width:50, height:'auto'}} />
            </div>
            <div className="social-back" style={{backgroundColor:'skyblue'}}>
            <TwitterIcon style={{color:'white', width:35,height:35}}/>
            </div>
            <div className="social-back">
            <YouTubeIcon style={{color:'white', width:35,height:35}}/>
            </div>
          </div>
          <div className="store-buttons">
            {/* <img src={googlePlay} alt="Google Play" />
            <img src={appStore} alt="App Store" /> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 TRADER Corporation. All rights reserved. All other trademarks are the property of their respective owners.
      </div>
    </footer>
  );
}
