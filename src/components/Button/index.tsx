import React from 'react';
import { Button as StyledButton } from './styled';

type ButtonProps = {
  onClick: () => void;
  text: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  );
};

export default Button;
