import React, { useState } from 'react';
import './New&Used.css';

const nationalBrands = [
  'Ford', 'Kenworth', 'Freightliner', 'Peterbilt', 'International', 'GMC', 'Volvo', 'Hino', 'Chevrolet', 'Mack'
];

const localCities = [
  'Barrie', 'Fredericton', 'London', 'Ottawa', 'Toronto', 'Burnaby', 'Halifax', 'Mississauga', 'Regina', 'Vancouver',
  'Calgary', 'Hamilton', 'Moncton', 'Saskatoon', 'Windsor', 'Charlottetown', 'Kelowna', 'Montréal', "St. John's", 'Winnipeg',
  'Edmonton', 'Kitchener', 'Nepean', 'Sudbury',
];

const PopularTrucks = () => {
  const [activeTab, setActiveTab] = useState('national');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderList = (items) => (
    <div className="truck-list">
      {items.map((item, index) => (
        <div className="truck-item" key={index}>{item}</div>
      ))}
    </div>
  );

  return (
    <div className="popular-trucks-container">
      <h2 className="heading">Popular New and Used Heavy Trucks in Canada</h2>
      
      <div className="tab-container">
        <button
          className={`tab-button3 ${activeTab === 'national' ? 'active' : ''}`}
          onClick={() => handleTabClick('national')}
        >
          National
        </button>
        <button
          className={`tab-button3 ${activeTab === 'local' ? 'active' : ''}`}
          onClick={() => handleTabClick('local')}
        >
          Local Search
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'national' ? renderList(nationalBrands) : renderList(localCities)}
      </div>
    </div>
  );
};

export default PopularTrucks;
