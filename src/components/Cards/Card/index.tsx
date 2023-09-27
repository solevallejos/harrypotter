import React from 'react';
import { Card as CardContainer } from './styled';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  );
};

export default Card;
