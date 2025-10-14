import React, { useState } from 'react';
import './Sellprivate.css';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatIcon from '@mui/icons-material/Chat';
import LockIcon from '@mui/icons-material/Lock';

const SellComponent = () => {
  const [activeTab, setActiveTab] = useState('dealer');
  const [activeSidebar, setActiveSidebar] = useState('why');

  const sidebarDealer = [
    { id: 'why', text: 'Why sell to a dealer?' },
    { id: 'price', text: 'How much can I sell for?' },
    { id: 'time', text: 'How long does it take?' },
    { id: 'process', text: 'What is the process?' },
  ];

  const sidebarPrivate = [
    { id: 'why', text: 'Why sell privately?' },
    { id: 'safe', text: 'How to stay safe?' },
    { id: 'steps', text: 'Steps to sell?' },
  ];

  const renderContent = () => {
    if (activeTab === 'dealer') {
      switch (activeSidebar) {
        case 'why':
          return (
            <div className="content-fade">
              <h1>Explore the advantages of selling to a dealer!</h1>
              <div className="deal-box">
                <EventAvailableIcon style={{ color: 'blue', width: 30, height: 30 }} />
                <h3>No wait time, sell today!</h3>
                <p>Selling to a dealer saves you time and hassle, making selling your vehicle a breeze.</p>
              </div>
              <div className="deal-box">
                <NotificationsActiveIcon style={{ color: 'blue', width: 30, height: 30 }} />
                <h3>Skip Your Loan Payment</h3>
                <p>Why wait to sell when you can say bye-bye to your loan payments today!</p>
              </div>
              <div className="deal-box">
                <ChatIcon style={{ color: 'blue', width: 30, height: 30 }} />
                <h3>Receive competing offers</h3>
                <p>Increase your chances of a higher valuation with multiple dealers.</p>
              </div>
              <div className="deal-box">
                <LockIcon style={{ color: 'blue', width: 30, height: 30 }} />
                <h3>Safest way to sell your car</h3>
                <p>Avoid the hassle of dealing with strangers by selling your car to one of our trusted dealers.</p>
              </div>
            </div>
          );
        case 'price':
          return (
            <div className="content-fade">
              <h2>How much can I sell for?</h2>
              <p>Dealers offer competitive prices based on your vehicle’s market value.</p>
            </div>
          );
        case 'time':
          return (
            <div className="content-fade">
              <h2>How long does it take?</h2>
              <p>In most cases, the sale can be completed the same day.</p>
            </div>
          );
        case 'process':
          return (
            <div className="content-fade">
              <h2>What is the process?</h2>
              <p>Get an offer, bring your car, and finalize the sale—it's that easy.</p>
            </div>
          );
        default:
          return null;
      }
    } else {
      switch (activeSidebar) {
        case 'why':
          return (
            <div className="content-fade">
              <h2>Why sell privately?</h2>
              <p>You may get a better price by dealing directly with buyers.</p>
            </div>
          );
        case 'safe':
          return (
            <div className="content-fade">
              <h2>How to stay safe?</h2>
              <p>Meet in public places and verify payment before handing over keys.</p>
            </div>
          );
        case 'steps':
          return (
            <div className="content-fade">
              <h2>Steps to sell?</h2>
              <p>List your vehicle, communicate with buyers, and finalize the paperwork.</p>
            </div>
          );
        default:
          return null;
      }
    }
  };

  return (
    <div className="sell-wrapper">
      <div className="sell-tabs">
        <button
          className={activeTab === 'dealer' ? 'active' : ''}
          onClick={() => {
            setActiveTab('dealer');
            setActiveSidebar('why');
          }}
        >
          Sell to a dealer
        </button>
        <button
          className={activeTab === 'private' ? 'active' : ''}
          onClick={() => {
            setActiveTab('private');
            setActiveSidebar('why');
          }}
        >
          Sell privately
        </button>
      </div>

      <div className="sell-content">
        <div className="sidebar">

          {(activeTab === 'dealer' ? sidebarDealer : sidebarPrivate).map((item) => (
            <div
              key={item.id}
              className={`sidebar-item ${activeSidebar === item.id ? 'active' : ''}`}
              onClick={() => setActiveSidebar(item.id)}
            >
              {item.text}
            </div>
          ))}
                    <hr className="sidebar-divider" />

          <div className="sidebar-extra">
            <h3>Ready to get started?</h3>
            <p>Get your offer today in just minutes.</p>
            <button className="sidebar-btn">Contact Us</button>
          </div>

          <hr className="sidebar-divider" />
        </div>

        <div className="main-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SellComponent;
