import React from 'react';

const MyCardsPage = () => {
  return (
    <div className="bg-cream h-screen">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <button className="ml-4">My Cards</button>
          <button className="ml-4">Following</button>
          <input
            type="text"
            className="ml-4 border border-gray-400 rounded py-1 px-2 search-bar"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center">
          <button className="ml-4">Discover</button>
          <button className="ml-4">Account</button>
          <button className="ml-4">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default MyCardsPage;
