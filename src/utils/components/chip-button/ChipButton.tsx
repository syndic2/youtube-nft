import React from 'react';

import {
  ChipButtonContainer,
  ChipButtonLabel
} from './ChipButton.styles';

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
