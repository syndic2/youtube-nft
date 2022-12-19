import React from 'react';

import { IconProps } from '../icon/Icon';
import {
  ButtonContainer,
  ButtonLabel
} from './Button.styled.component';
import {
  ButtonContainerDefaultStyles,
  ButtomtLabelDefaultStyles
} from './Button.styles';

interface ButtonProps {
  text: string;
  containerStyles?: React.CSSProperties;
  labelStyles?: React.CSSProperties;
  startIcon?: React.ReactElement<IconProps>;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    text,
    containerStyles = ButtonContainerDefaultStyles,
    labelStyles = ButtomtLabelDefaultStyles,
    startIcon,
    onClick
  } = {
    ...props,
    containerStyles: {
      ...ButtonContainerDefaultStyles,
      ...props.containerStyles
    },
    labelStyles: {
      ...ButtomtLabelDefaultStyles,
      ...props.labelStyles
    }
  };

  return (
    <ButtonContainer
      styles={containerStyles}
      onClick={onClick}
    >
      {startIcon ? startIcon : null}
      <ButtonLabel styles={labelStyles}>{text}</ButtonLabel>
    </ButtonContainer>
  );
};

export default Button;
