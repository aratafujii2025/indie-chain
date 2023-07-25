import React, { useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import RoundedCard from './RoundedCard';

const MyCardsPage = () => {
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const cards = [
    { id: 0, isSelected: selectedCard === 0 },
    { id: 1, isSelected: selectedCard === 1 },
    { id: 2, isSelected: selectedCard === 2 },
    { id: 3, isSelected: selectedCard === 3 },
    { id: 4, isSelected: selectedCard === 4 },
    { id: 5, isSelected: selectedCard === 5 },
    // Add more cards as needed
    // { id: 6, isSelected: selectedCard === 6 },
    // { id: 7, isSelected: selectedCard === 7 },
    // ...
  ];

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
    // Scroll to the selected card
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].clientWidth;
      carouselRef.current.scrollLeft = index * cardWidth;
    }
  };

  return (
    <div className="bg-cream h-screen">
      <div className="flex items-center justify-between px-6 py-4">
        {/* ... Header content ... */}
      </div>
      <div className="smalltext">My Cards</div>
      <div className="bigtext">Manage and Browse through Artist Cards</div>
      <div className="container">
        <div className="carousel" ref={carouselRef}>
          <div className="carousel-inner">
            {cards.map((card) => (
              <RoundedCard
                key={card.id}
                isSelected={card.isSelected}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="wflex">
        <div className="white-container">
          <h2>White Content Box</h2>
          <p>This is some content in the white container.</p>
        </div>
        <div className="egg-container"></div>
        <div className="purple-container"></div>
      </div>
    </div>
  );
};

export default MyCardsPage;
