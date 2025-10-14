import React, { useState } from 'react';
import './hot.css';
import car1 from '../../../assets/media/images/cars/car1.jpg';
import car2 from '../../../assets/media/images/cars/car2.jpg';
import car4 from '../../../assets/media/images/cars/car4.jpg';
import car5 from '../../../assets/media/images/cars/car5.jpg';

export default function Hot() {
  const [activeTab, setActiveTab] = useState('The Latest');

  const tabs = ['The Latest', 'Advice', 'Reviews', 'News', 'Cool Stuff'];

  const contentData = {
    'The Latest': {
      mainImage: car4,
      category: 'FUN STUFF',
      title: 'Sharing the Wealth: What Good is a Fancy Car if You Can’t Share It With Others?',
      text: 'Being an automotive journalist presents rich opportunities to bring a smile to someone’s face.',
      sideArticles: [
        { image: car1, category: 'CAR TECH', title: 'Canadian University Startup Makes Rare Earth-Free Electric Motors' },
        { image: car2, category: 'CAR NEWS', title: 'Honda Reveals Canadian Pricing for Expanded 2026 Passport Trailsport Lineup' },
        { image: car5, category: 'HYBRID AND ELECTRIC CAR NEWS', title: 'As Dodge Unveils Four-Door Charger Daytona Sedan, Stellantis Postpones Canadian Production' }
      ]
    },
    'Advice': {
      mainImage: car1,
      category: 'ADVICE',
      title: 'Top 10 Tips for Keeping Your Car in Shape',
      text: 'Regular maintenance ensures your car stays reliable and safe.',
      sideArticles: [
        { image: car4, category: 'MAINTENANCE', title: 'Why Tire Rotations Matter More Than You Think' },
        { image: car2, category: 'DRIVING TIPS', title: 'How to Improve Fuel Efficiency Without Sacrificing Comfort' },
        { image: car5, category: 'ROAD SAFETY', title: 'The Best Defensive Driving Techniques for City Roads' }
      ]
    },
    'Reviews': {
      mainImage: car2,
      category: 'REVIEWS',
      title: '2025 Electric SUVs: Our Top Picks Reviewed',
      text: 'We test drive the newest electric SUVs to see which one comes out on top.',
      sideArticles: [
        { image: car1, category: 'SUV REVIEW', title: 'The 2025 Audi e-Tron: Worth the Hype?' },
        { image: car5, category: 'HYBRID REVIEW', title: 'The Best Hybrid Cars for Families in 2025' },
        { image: car4, category: 'LUXURY REVIEW', title: 'Is the Mercedes EQS the Ultimate Luxury EV?' }
      ]
    },
    'News': {
      mainImage: car5,
      category: 'LATEST NEWS',
      title: 'Auto Industry Faces Global Supply Chain Challenges',
      text: 'How manufacturers are adapting to ongoing shortages and delays.',
      sideArticles: [
        { image: car2, category: 'INDUSTRY NEWS', title: 'New EV Battery Plant Announced in Canada' },
        { image: car1, category: 'POLICY UPDATE', title: 'Government Incentives for Electric Vehicles Extended' },
        { image: car4, category: 'TECH NEWS', title: 'Breakthrough in Fast-Charging Technology' }
      ]
    },
    'Cool Stuff': {
      mainImage: car1,
      category: 'COOL STUFF',
      title: 'The Wildest Custom Cars You Have to See to Believe',
      text: 'From neon wraps to jet engines, these custom cars push the limits.',
      sideArticles: [
        { image: car5, category: 'CUSTOM BUILDS', title: 'This Car Runs on Coffee—Literally!' },
        { image: car2, category: 'MODS', title: 'The Craziest Car Mods from SEMA 2025' },
        { image: car4, category: 'TECH GADGETS', title: 'The Best In-Car Gadgets You Didn’t Know You Needed' }
      ]
    }
  };

  const currentContent = contentData[activeTab];

  return (
    <div className="app-container">
      <div className="editorial">
        <h4 style={{ fontSize: 20, color: 'red' }}>A</h4>
        <p style={{ fontSize: 12 }}>Editorial</p>
      </div>
      <h1 style={{ marginTop: 30 }}>Hot Off the Press</h1>

      <nav className="nav-bar">
        {tabs.map((tab) => (
          <span
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </nav>
      <div className="nav-line"></div>

      <div className="main1-content">
        <div className="main1-article">
          <img src={currentContent.mainImage} alt="" />
          <div className="main1-text">
            <p className="category1">{currentContent.category}</p>
            <h2>{currentContent.title}</h2>
            <p>{currentContent.text}</p>
          </div>
        </div>

        <div className="side1-articles">
          {currentContent.sideArticles.map((article, idx) => (
            <div className="side1-article" key={idx}>
              <img src={article.image} alt="" />
              <div>
                <p className="category1">{article.category}</p>
                <h4>{article.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="hover-btn" style={{ marginTop: 20 }}>
        See All
      </button>

    </div>
  );
}
