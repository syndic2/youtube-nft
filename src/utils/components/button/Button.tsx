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
  borderRadius?: string;
  marginLeft?: string;
  startIcon?: React.ReactElement<IconProps>;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    text,
    color = 'white',
    backgroundColor = '#253E72',
    borderRadius = '25px',
    marginLeft = 'auto',
    startIcon,
    onClick
  } = props;

  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      marginLeft={marginLeft}
      onClick={onClick}
    >
      {startIcon ? startIcon : null}
      <ButtonLabel color={color}>{text}</ButtonLabel>
    </ButtonContainer>
  );
};

export default Button;
