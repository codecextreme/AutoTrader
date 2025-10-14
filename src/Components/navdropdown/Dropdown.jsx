import React from 'react';
import './Dropdown.css'; 
import audi from '../../../src/assets/media/images/audi.png'
import car from '../../../src/assets/media/images/car.png'

const NavbarDropdown = () => {
  return (
    <nav className="navbar-dropdown">
      <div className="dropdown-container">
        <div className="dropdown-section pro1">
          <h3>Research Resources</h3>
          <ul>
            <li><a href="#">Research Car Options</a></li>
            <li><a href="#">Everything Electric & Hybrid</a></li>
          </ul>
          
          <ul>
            <li><a href="#">Car Comparison Tool</a></li>
            <li><a href="#">Price Index</a></li>
          </ul>
          
        
          
          <ul>
            <li><a href="#">AutoTrader Awards</a></li>
          </ul>
        </div>
        
        <div className="dropdown-section pro2">
          <h3>Explore by Brand</h3>
          <div className='brand-style'>
          <div className="brand-box">
            <img src={audi} alt="" />
            <p>Audi</p>
          </div>
          <div className="brand-box">
            <img src={audi} alt="" />
            <p>Audi</p>
          </div>
          <div className="brand-box">
            <img src={audi} alt="" />
            <p>Audi</p>
          </div>
          </div>
          <div className='brand-style'>
          <div className="brand-box">
            <img src={audi} alt="" />
            <p>Audi</p>
          </div>
          <div className="brand-box">
            <img src={audi} alt="" />
            <p>Audi</p>
          </div>
          <div className="brand-box">
            <img src={audi} alt="" />
            <p>Audi</p>
          </div>
          </div>
          <div className='brand-style'>
          <div className="brand-box">
            <img src={audi} alt="" />
            <p>Audi</p>
          </div>
          <div className="brand-box">
            <img src={audi} alt="" />
            <p>Audi</p>
          </div>
          <div className="brand-box">
            <p>See All</p>
          </div>
          </div>
        </div>
        
        <div className="dropdown-section pro2">
          <h3>Explore by Body Type</h3>
             <div className='brand-style'>
          <div className="brand-box">
            <img src={car} alt="" />
            <p>Sedan</p>
          </div>
          <div className="brand-box">
            <img src={car} alt="" />
            <p>Sedan</p>
          </div>
          <div className="brand-box">
            <img src={car} alt="" />
            <p>Sedan</p>
          </div>
          </div>
          <div className='brand-style'>
          <div className="brand-box">
            <img src={car} alt="" />
            <p>Sedan</p>
          </div>
          <div className="brand-box">
            <img src={car} alt="" />
            <p>Sedan</p>
          </div>
          <div className="brand-box">
            <img src={car} alt="" />
            <p>Sedan</p>
          </div>
          </div>
          <div className='brand-style'>
          <div className="brand-box">
            <img src={car} alt="" />
            <p>Sedan</p>
          </div>
          
          </div>
        </div>
        
        <div className="dropdown-section pro1">
          <h3>Expert Reviews & Advice</h3>
          <ul>
            <li><a href="#">All Expert Reviews & Advice</a></li>
            <li><a href="#">Advice</a></li>
            <li><a href="#">Expert Reviews</a></li>
            <li><a href="#">Car News</a></li>
            <li><a href="#">Cool Stuff</a></li>
            <li><a href="#">AutoTraderTV</a></li>
            <li><a href="#">Own the Road Podcast</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDropdown;