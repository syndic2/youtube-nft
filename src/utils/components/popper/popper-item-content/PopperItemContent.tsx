import React from 'react';

import { PopperContentContainer } from './styles/PopperItemContent.styled';

interface PopperItemContentProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const PopperContent: React.FC<PopperItemContentProps> = (props: PopperItemContentProps) => {
  const {
    isOpen,
    children
  } = props;

  return isOpen ? (
    <PopperContentContainer>
      {children}
    </PopperContentContainer>
  ) : null;
};

export default PopperContent;
