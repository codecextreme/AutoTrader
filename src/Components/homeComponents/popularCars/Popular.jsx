import React, { useState } from 'react';
import './Popular.css';
import car from '../../../assets/media/images/car.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const vehicles = [
  { id: 1, name: 'Honda Civic' },
  { id: 2, name: 'Ford Mustang' },
  { id: 3, name: 'Ford F-150' },
  { id: 4, name: 'Honda CR-V' },
  { id: 5, name: 'Honda CR-V' },
  { id: 6, name: 'Honda CR-V' },
  { id: 7, name: 'Honda CR-V' },
];

const tabs = [
  'National', 'Toronto', 'Montreal', 'Calgary',
  'Ottawa', 'Edmonton', 'Hamilton', 'Vancouver',
  'Mississauga', 'Winnipeg', 'Saskatoon'
];

export default function VehicleSlider() {
  const [activeTab, setActiveTab] = useState('National');
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleNext = () => {
    if (scrollIndex < vehicles.length - 1) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  const progressPercent = ((scrollIndex + 1) / vehicles.length) * 100;

  return (
    <div className="slider-container">
      <h1>Most Popular Cars in Canada</h1>

      <div className="tabs">
        {tabs.map(tab => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="slider-wrapper">
        {scrollIndex > 0 && (
          <button className="nav-button prev" onClick={handlePrev}>
            <ArrowBackIosIcon />
          </button>
        )}

        <div
          className="slider-track"
          style={{ transform: `translateX(-${scrollIndex * 260}px)` }}
        >
          {vehicles.map(vehicle => (
            <div className="vehicle-card1" key={vehicle.id}>
              <img src={car} alt={vehicle.name} />
              <h3>{vehicle.name}</h3>
              <div className="links">
                <div className="link">
                <a href="#">{vehicle.name.split(' ')[0]} for sale <ArrowForwardIosIcon fontSize="small" /></a></div>
                <div className="link">
                <a href="#">{vehicle.name.split(' ')[0]} Specifications <ArrowForwardIosIcon fontSize="small" /></a></div>
              </div>
            </div>
          ))}
        </div>

        {scrollIndex < vehicles.length - 1 && (
          <button className="nav-button next" onClick={handleNext}>
            <ArrowForwardIosIcon />
          </button>
        )}
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <h1>Our Parteners</h1>
      <div className="logo-sec">
        <div style={{display:'flex'}}>
        <div className="logo-box"><h2>C</h2></div>
        <div className="logo-box"><h2>A</h2></div>
        <div className="logo-box"><h2>R</h2></div>
        <div className="logo-box"><h2>F</h2></div>
        <div className="logo-box"><h2>A</h2></div>
        <div className="logo-box1"><h2 style={{marginTop:4, fontWeight:900}}>X</h2></div>
        </div>
        <h2>TD Insurance</h2>
      </div>
    </div>
  );
}
