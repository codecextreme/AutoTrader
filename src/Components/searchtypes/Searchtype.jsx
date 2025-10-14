import React, { useState } from 'react';
import './Searchtype.css';
import SearchIcon from '@mui/icons-material/Search';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const tabs = [
  { id: 'all', label: 'ALL TYPES', icon: <SearchIcon /> },
  { id: 'tractor', label: 'HIGHWAY TRACTOR', icon: <LocalShippingIcon/> },
  { id: 'dump', label: 'DUMP TRUCK', icon: <DirectionsCarIcon/> },
  { id: 'commercial', label: 'COMMERCIAL', icon: <LocalShippingIcon/> },
  { id: 'box', label: 'BOX TRUCK', icon: <DirectionsCarIcon/> },
  { id: 'tow', label: 'TOW TRUCK', icon: <LocalShippingIcon/> },
  { id: 'daycab', label: 'DAYCAB', icon: <DirectionsCarIcon/> },
  { id: 'bus', label: 'BUS', icon: <LocalShippingIcon/> },
  { id: 'cab', label: 'CAB & CHASSIS', icon: <DirectionsCarIcon/> },
];

export default function TruckSearch() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="truck-search-container">
        <div className="tab-div">
      <div className="tab-buttons">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>
      </div>

      <div className="search-section2">
        <div className="check-box">
        <p>
          Search <strong>22,158</strong> Commercial / Heavy Trucks
        </p>
          <div className="checkboxes">
            <label>
              <input type="checkbox" defaultChecked /> New
            </label>
            <label>
              <input type="checkbox" defaultChecked /> Used
            </label>
          </div>

        </div>

        <div className="filters">
          <select>
            <option>Any Type</option>
          </select>
          <select>
            <option>Any Make</option>
          </select>
          <select>
            <option>Max Price</option>
          </select>
          <input type="text" placeholder="Postal code - Required" />

        
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
}
