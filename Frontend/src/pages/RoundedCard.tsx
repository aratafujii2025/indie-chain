import React from 'react';

interface RoundedCardProps {
  isSelected: boolean;
  onClick?: () => void;
}

const RoundedCard: React.FC<RoundedCardProps> = ({ isSelected, onClick }) => {
  return (
    <div
      className={`rounded-card ${isSelected ? 'selected' : 'not-selected'}`}
      onClick={onClick} // Attach the onClick handler to the card itself
    ></div>
  );
};

export default RoundedCard;
