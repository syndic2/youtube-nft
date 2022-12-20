import React from 'react';

import { IconProps } from '../icon/Icon';
import {
  ButtonContainer,
  ButtonLabel
} from './styles/Button.styled.component';
import {
  ButtonContainerDefaultStyles,
  ButtontLabelDefaultStyles
} from './styles/Button.style';

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
    labelStyles = ButtontLabelDefaultStyles,
    startIcon,
    onClick
  } = {
    ...props,
    containerStyles: {
      ...ButtonContainerDefaultStyles,
      ...props.containerStyles
    },
    labelStyles: {
      ...ButtontLabelDefaultStyles,
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
