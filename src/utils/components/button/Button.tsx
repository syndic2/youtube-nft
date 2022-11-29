import React from 'react';

import { IconProps } from '../icon/Icon';
import {
  ButtonContainer,
  ButtonLabel
} from './Button.styles';

interface ButtonProps {
  text: string;
  color?: string;
  backgroundColor?: string;
  startIcon?: React.ReactElement<IconProps>;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    text,
    color = 'white',
    backgroundColor = '#253E72',
    startIcon,
    onClick
  } = props;

  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {startIcon ? startIcon : null}
      <ButtonLabel color={color}>{text}</ButtonLabel>
    </ButtonContainer>
  );
};

export default Button;
