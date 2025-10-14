import React, { useState } from 'react';
import './Winner.css';
import car from '../../assets/media/images/car.png';

const winners = [
  { category: 'Best Subcompact SUV', name: 'Subaru Crosstrek', buttonLabel: 'Crosstrek for Sale' },
  { category: 'Best Pickup Truck', name: 'Ford F-150', buttonLabel: 'F-150 for Sale' },
  { category: 'Best Electric Car', name: 'Tesla Model 3', buttonLabel: 'Model 3 for Sale' },
  { category: 'Best Luxury SUV', name: 'Audi Q5', buttonLabel: 'Q5 for Sale' },
  { category: 'Best Sedan', name: 'Toyota Camry', buttonLabel: 'Camry for Sale' },
  { category: 'Best Compact Car', name: 'Honda Civic', buttonLabel: 'Civic for Sale' },
  { category: 'Best Midsize SUV', name: 'Hyundai Santa Fe', buttonLabel: 'Santa Fe for Sale' },
  { category: 'Best Minivan', name: 'Chrysler Pacifica', buttonLabel: 'Pacifica for Sale' },
  { category: 'Best Subcompact SUV', name: 'Subaru Crosstrek', buttonLabel: 'Crosstrek for Sale' },
  { category: 'Best Pickup Truck', name: 'Ford F-150', buttonLabel: 'F-150 for Sale' },
  { category: 'Best Electric Car', name: 'Tesla Model 3', buttonLabel: 'Model 3 for Sale' },
  { category: 'Best Luxury SUV', name: 'Audi Q5', buttonLabel: 'Q5 for Sale' },
  { category: 'Best Sedan', name: 'Toyota Camry', buttonLabel: 'Camry for Sale' },
  { category: 'Best Compact Car', name: 'Honda Civic', buttonLabel: 'Civic for Sale' },
  { category: 'Best Midsize SUV', name: 'Hyundai Santa Fe', buttonLabel: 'Santa Fe for Sale' },
  { category: 'Best Minivan', name: 'Chrysler Pacifica', buttonLabel: 'Pacifica for Sale' },
  { category: 'Best Midsize SUV', name: 'Hyundai Santa Fe', buttonLabel: 'Santa Fe for Sale' },
];

export default function Winner() {
  const [showAll, setShowAll] = useState(false);

  const visibleWinners = showAll ? winners : winners.slice(0, 8);

  const toggleShow = () => {
    setShowAll(prev => !prev);
  };

  return (
    <div className="award-winner">
      <h1>Maple Leaf 2025 AutoTrader Award Winners</h1>
      <h4 style={{ marginTop: 10 }}>See all</h4>

      <div className="sale-grid">
        {visibleWinners.map((winner, index) => (
          <div className="sale-box" key={index}>
            <span>{winner.category}</span>
            <h5>{winner.name}</h5>
            <p>Learn More</p>
            <img src={car} alt={winner.name} />
            <button className="sale-btn">{winner.buttonLabel}</button>
          </div>
        ))}
      </div>

      <button className="main-btn" style={{ marginTop: 30 }} onClick={toggleShow}>
        {showAll ? 'See less' : 'View more winners'}
      </button>
    </div>
  );
}
