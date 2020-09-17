import React from 'react';
import { StyledButton } from './styled';

interface Props {
  onClick: () => void;
}

const Button = (props: Props) => {
  const { onClick } = props;

  return <StyledButton onClick={onClick}>Enviar</StyledButton>;
};

export default Button;
