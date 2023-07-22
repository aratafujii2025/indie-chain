import React from 'react';
import { FaSearch } from 'react-icons/fa';

const MyCardsPage = () => {
  return (
    <div className="bg-cream h-screen">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center flex-grow">
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <button className="ml-4">My Cards</button>
          <button className="ml-4">Following</button>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex items-center">
          <button className="ml-4 flex-shrink-0">Discover</button>
          <button className="ml-4 flex-shrink-0">Account</button>
          <button className="ml-4 flex-shrink-0">Logout</button>
        </div>
      </div>
      <div className="smalltext">My Cards</div>
      <div className="bigtext">Manage and Browse through Artist Cards</div>
      <div className="container"></div>
      <div className="white-container"></div>
      <div className="wflex"></div>
        <div className="egg-container"></div>
        <div className="purple-container"></div>
      
          
    </div>
  );
};

export default MyCardsPage;
