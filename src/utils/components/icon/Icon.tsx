import React from 'react';
import { IconContainer, IconImg } from './styles/Icon.styled.component';

export interface IconProps {
  src: string;
  backgroundColor?: string;
  borderRadius?: string;
  width?: number;
  height?: number;
  padding?: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const {
    src,
    backgroundColor = 'transparent',
    borderRadius = 'none',
    padding = 'none',
    width = 24,
    height = 24
  } = props;

  return (
    <IconContainer
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      width={width}
      height={height}
      padding={padding}
    >
      <IconImg src={src} />
    </IconContainer>
  );
};

export default Icon;
