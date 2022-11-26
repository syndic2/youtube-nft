import React from 'react';

import { DividerContainer } from './Divider.styles';

interface DividerProps {
  thickness?: number;
  color?: string;
  width?: string;
  height?: string;
}

const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  const {
    thickness = 4,
    color = 'white',
    width = '100%',
    height = '100%'
  } = props;

  return (
    <DividerContainer
      thickness={thickness}
      color={color}
      width={width}
      height={height}
    />
  );
};

export default Divider;
