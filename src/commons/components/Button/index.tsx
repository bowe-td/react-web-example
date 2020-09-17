import React from 'react';
import { StyledButton } from './styled';
import { useTranslation } from 'react-i18next';

interface Props {
  onClick: () => void;
}

const Button = (props: Props) => {
  const { t } = useTranslation('commons');
  const { onClick } = props;

  return <StyledButton onClick={onClick}>{t('commons:button.send')}</StyledButton>;
};

export default Button;
