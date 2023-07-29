import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const MyCardsPage = () => {
  // State to track if the layout is changed or not
  const [isLayoutChanged, setIsLayoutChanged] = useState(false);

  // Function to toggle the layout change
  const handleLayoutChange = () => {
    setIsLayoutChanged((prev) => !prev);
  };

  return (
    <div className="bg-cream h-screen">
      <div className="flex items-center justify-between px-6 py-4">
        {/* ...Header content here */}
      </div>
      <div className="smalltext">My Cards</div>
      <div className="bigtext">Manage and Browse through Artist Cards</div>
      <div className="container">
        <div
          className={`grayrectangle ${isLayoutChanged ? 'changed' : ''}`}
          onClick={handleLayoutChange}
        >
          {/* This is the gray rectangle, clicking it will change the layout */}
        </div>
      </div>
      <div className="white-container">
        {/* Content for the white container */}
        <h2>White Container</h2>
        <p>This is some content in the white container.</p>
      </div>
      {isLayoutChanged ? (
        <div className="changed-layout">
          <div className="black-container"></div>
        </div>
      ) : (
        <>
          <div className="purple-container">
            {/* Content for the purple container */}
            <h2>Purple Container</h2>
            <p>This is some content in the purple container.</p>
          </div>
          <div className="egg-container">
            {/* Content for the egg container */}
            <h2>Egg Container</h2>
            <p>This is some content in the egg container.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MyCardsPage;
