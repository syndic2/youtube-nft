import React from 'react';
import { IconImg } from './Icon.styles';

interface IconProps {
  src: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = (props) => {
  const { src, width = 24, height = 24 } = props;

  return (
    <IconImg
      src={src}
      width={width}
      height={height}
    />
  );
};

export default Icon;
