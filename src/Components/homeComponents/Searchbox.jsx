import React, { useState } from 'react';
import './Searchbox.css'; 
import SearchIcon from '@mui/icons-material/Search';
import audi from '../../../src/assets/media/images/audi.png'
import car from '../../../src/assets/media/images/car.png'


const CarSelection = () => {
  const [activeView, setActiveView] = useState('default');

  return (
    <div className="car-selection-container">
     
      
      {activeView === 'default' ? (
        <DefaultView onHelpClick={() => setActiveView('help')} />
      ) : (
        <HelpMeChooseView onBackClick={() => setActiveView('default')} />
      )}
    </div>
  );
};

const DefaultView = ({ onHelpClick }) => {
  return (
    <div className="search-container">
      <div className="top-line">
        <div className="toggle-buttons">
          <button className="active">
            I know what I want
          </button>
          <button onClick={onHelpClick}>
            Help me choose
          </button>
        </div>
        <h2>Search 345,680 Cars, Trucks & SUVs</h2>
      </div>

      <div className="search-fields">
        <select><option>Any Make</option></select>
        <select><option>Any Model</option></select>
        <input type="text" placeholder="Postal code*" />
        <button className="show-cars">Show me cars</button>
      </div>

      <div className="extras">
        <div className="popular">
          <p>Most Popular Cars in Canada:</p>
          <div className="popular-tags">
            <span><SearchIcon /> Honda Civic</span>
            <span><SearchIcon /> Ford Mustang</span>
            <span><SearchIcon /> Ford F-150</span>
            <span><SearchIcon /> Honda CR-V</span>
          </div>
        </div>

        <div className="vertical-divider"></div>

        <div className="extras-actions">
          <div className="action">
            <p>Selling your car?</p>
            <button>⚡ Get your offer now</button>
          </div>
          <div className="vertical-divider"></div>
          <div className="action">
            <p>Financing a car?</p>
            <button>💲 Get an estimate now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const brands = [
  { name: 'Audi', img: '../../../src/assets/media/images/audi.png' },
  { name: 'BMW',  img: '../../../src/assets/media/images/audi.png' },
  { name: 'Ford', img: '../../../src/assets/media/images/audi.png' },
  { name: 'Honda', img: '../../../src/assets/media/images/audi.png'},
  { name: 'Hyundai', img: '../../../src/assets/media/images/audi.png' },
  { name: 'Mercedes-Benz', img: '../../../src/assets/media/images/audi.png' },
  { name: 'Mitsubishi', img: '../../../src/assets/media/images/audi.png' },
  { name: 'Mitsubishi', img: '../../../src/assets/media/images/audi.png' },

];

const body = [
  { name: 'Audi', img: '../../../src/assets/media/images/car.png' },
  { name: 'BMW', img: '../../../src/assets/media/images/car.png'  },
  { name: 'Ford', img: '../../../src/assets/media/images/car.png' },
  { name: 'Honda', img: '../../../src/assets/media/images/car.png'},
  { name: 'Hyundai', img: '../../../src/assets/media/images/car.png' },
  { name: 'Mercedes-Benz', img: '../../../src/assets/media/images/car.png' },
  { name: 'Mitsubishi', img: '../../../src/assets/media/images/car.png' },
  { name: 'Mitsubishi', img: '../../../src/assets/media/images/car.png' },

];


const HelpMeChooseView = ({ onBackClick }) => {
  return (
    <div className="help-view">
     <div className="top-line">
        <div className="toggle-buttons">
          <button onClick={onBackClick} >
            I know what I want
          </button>
          <button className="active">
            Help me choose
          </button>
        </div>
        <h2>Search 345,680 Cars, Trucks & SUVs</h2>
      </div>
      
      <div className="explore-section">
         <h3 style={{ marginTop: 20 }}>Explore by Brand</h3>
  <ul className="brand-list">
    {brands.map(brand => (
      <li key={brand.name}>
        <div className="brand-box2">
          <img src={brand.img} alt={brand.name} className="brand-image" />
          <span>{brand.name}</span>
        </div>
      </li>
    ))}
  </ul>


        <h3 style={{marginTop:30}}>Explore by Body Type</h3>
      <ul className="brand-list">
    {body.map(body => (
      <li key={body.name}>
        <div className="brand-box2">
          <img src={body.img} alt={body.name} className="brand-image" />
          <span>{body.name}</span>
        </div>
      </li>
    ))}
  </ul>
      </div>
    </div>
  );
};

export default CarSelection;