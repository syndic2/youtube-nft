import React from 'react';

import {
  ChipButtonContainer,
  ChipButtonLabel
} from './styles/ChipButton.styled';

interface ChipButtonProps {
  text: string;
  onClick?: () => void;
}

const ChipButton: React.FC<ChipButtonProps> = (props: ChipButtonProps) => {
  const {
    text,
    onClick
  } = props;

  return (
    <ChipButtonContainer onClick={onClick}>
      <ChipButtonLabel>{text} +</ChipButtonLabel>
    </ChipButtonContainer>
  );
};

export default ChipButton;
