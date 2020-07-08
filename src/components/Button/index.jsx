import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

const Button = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Enviar</StyledButton>;
};

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default memo(Button);
