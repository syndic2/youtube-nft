import React from 'react';

import Icon from '../icon/Icon';
import { IconButtonWrapper } from './IconButton.styles';

interface IconButtonProps {
  src: string;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const { src, onClick } = props;

  return (
    <IconButtonWrapper onClick={onClick}>
      <Icon src={src} />
    </IconButtonWrapper>
  );
};

export default IconButton;
