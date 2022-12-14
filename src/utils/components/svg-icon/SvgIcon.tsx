import React from 'react';
import { ICON_TYPES, Icons } from './icons';

export interface SvgIconProps {
  name: ICON_TYPES;
  fill?: string;
  width?: number | string;
  height?: number | string;
}

const SvgIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
  const {
    name,
    fill,
    width,
    height
  } = props;
  const Icon = Icons[name];

  return (
    <Icon
      fill={fill}
      width={width}
      height={height}
    />
  );
};

export default SvgIcon;
