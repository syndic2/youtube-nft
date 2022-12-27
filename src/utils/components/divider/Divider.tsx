import React from 'react';

import {
  DividerHorizontalContainer,
  DividerVerticalContainer
} from './styles/Divider.styled';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  thickness?: number;
  color?: string;
  width?: string;
  height?: string;
}

const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  const {
    orientation = 'horizontal',
    thickness = 4,
    color = 'white',
    width = '100%',
    height = '100%'
  } = props;

  return orientation === 'horizontal' ? (
    <DividerHorizontalContainer
      thickness={thickness}
      color={color}
      width={width}
      height={height}
    />
  ) : (
    <DividerVerticalContainer
      thickness={thickness}
      color={color}
      width={width}
      height={height}
    />
  );
};

export default Divider;
