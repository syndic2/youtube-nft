import React from 'react';

import { PopperContainer } from './styles/Popper.styled';

interface PopperProps {
  children: React.ReactNode;
}

const Popper: React.FC<PopperProps> = (props: PopperProps) => {
  const { children } = props;

  return (
    <PopperContainer>
      {children}
    </PopperContainer>
  );
};

export default Popper;
