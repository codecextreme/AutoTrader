import React, { useState } from 'react';
import './Slider.css';
import car from '../../../assets/media/images/car.png'
import CheckIcon from '@mui/icons-material/Check';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const vehicles = [
  {
    id: 1,
    year: '2025',
    name: 'Nissan Kicks',
    image: car
  },
  {
    id: 2,
    year: '2025',
    name: 'Honda Pilot',
    image: car
  },
  {
    id: 3,
    year: '2025',
    name: 'Volkswagen ID. Buzz',
    image: car
  },
   {
    id: 4,
    year: '2025',
    name: 'Honda Pilot',
    image: car
  },
   {
    id: 5,
    year: '2025',
    name: 'Honda Pilot',
    image: car
  },
];

export default function VehicleSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === vehicles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vehicles.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="vehicle-section">
      <div className="vehicle-info">
        <div className="new-vheicle">
            <div className="a"><h3>A</h3></div>
            <h4>NEW</h4>
            <p>VHEICLE</p>
        </div>
        <h2 style={{marginTop:20}}>Check out these brand new arrivals!</h2>
        <ul style={{marginTop:10, lineHeight:2,}}>
          <li><CheckIcon/>Latest technology</li>
          <li><CheckIcon/>Factory warranties</li>
          <li><CheckIcon/>Great financing deals</li>
          <li><CheckIcon/>New car scent</li>
        </ul>
      </div>

      <div className="vehicle-slider-wrapper">
        <button className="nav-button1 prev" onClick={handlePrev} style={{ display: currentIndex === 0 ? 'none' : 'flex' }}>
           <KeyboardArrowLeftIcon/>
        </button>

        <div className="vehicle-slider" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
          {vehicles.map((vehicle) => (
            <div className="vehicle-card" key={vehicle.id}>
              <img src={vehicle.image} alt={vehicle.name} />
              <h3>{vehicle.year}</h3>
              <h4>{vehicle.name}</h4>
              <button className="view-btn">View Inventory</button>
              <div className="explore-link">Explore</div>
            </div>
          ))}
        </div>

        <button className="nav-button1 next" onClick={handleNext}>
         <KeyboardArrowRightIcon/>
        </button>
      </div>
    </div>
  );
}
