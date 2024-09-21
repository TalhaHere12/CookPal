import React, { useState } from 'react';
import './CustomTabs.css'; // Import the custom CSS

const CustomTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home'); // State to keep track of active tab

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Set the active tab when clicked
  };

  return (
    <>
      <div className="tabs">
        <button 
          className={`tab-item ${activeTab === 'home' ? 'active' : ''}`} 
          onClick={() => handleTabClick('home')}
        >
          Home
        </button>
        <button 
          className={`tab-item ${activeTab === 'explore' ? 'active' : ''}`} 
          onClick={() => handleTabClick('explore')}
        >
          Profile
        </button>
        <button 
          className={`tab-item ${activeTab === 'contact' ? 'active' : ''}`} 
          onClick={() => handleTabClick('contact')}
        >
          Contact
        </button>
        <button 
          className={`tab-item ${activeTab === 'profile' ? 'active' : ''}`} 
          onClick={() => handleTabClick('profile')}
        >
          Profile
        </button>
      </div>
    </>
  );
};

export default CustomTabs;
