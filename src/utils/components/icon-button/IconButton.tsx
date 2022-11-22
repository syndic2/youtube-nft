import React from 'react';

import { IconButtonWrapper, IconImg } from './IconButton.styles';

interface IconButtonProps {
  src?: string;
}

export const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const { src } = props;

  return (
    <IconButtonWrapper>
      <IconImg src={src} />
    </IconButtonWrapper>
  );
};

export default IconButton;
