import React from 'react';

import { ICON_TYPES } from '../svg-icon/icons';
import Icon from '../icon/Icon';
import SvgIcon from '../svg-icon/SvgIcon';
import { IconButtonWrapper } from './styles/IconButton.styled';

interface IconButtonProps {
  src?: string;
  iconName?: ICON_TYPES;
  fill?: string;
  width?: string | number;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const {
    src,
    iconName,
    fill,
    width,
    onClick
  } = props;

  return (
    <IconButtonWrapper onClick={onClick}>
      {src ? (
        <Icon
          src={src}
          width={Number(width)}
        />
      ) : (
        <SvgIcon
          name={iconName!}
          fill={fill}
          width={width}
        />
      )}
    </IconButtonWrapper>
  );
};

export default IconButton;
