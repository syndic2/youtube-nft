import styled from 'styled-components';

interface DividerContainerProps {
  thickness?: number;
  color?: string;
  width?: string;
  height?: string;
}

export const DividerContainer = styled.div<DividerContainerProps>`
  border-top: ${props => props.thickness}px solid white;
  width: ${props => props.width};
  height: ${props => props.height};
`;
