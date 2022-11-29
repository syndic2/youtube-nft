import styled from 'styled-components';

interface DividerContainerProps {
  thickness?: number;
  color?: string;
  width?: string;
  height?: string;
}

const DividerBaseContainer = styled.div<DividerContainerProps>`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const DividerHorizontalContainer = styled(DividerBaseContainer)`
  border-top: ${props => props.thickness}px solid ${props => props.color};
`;

export const DividerVerticalContainer = styled(DividerBaseContainer)`
  border-left: ${props => props.thickness}px solid ${props => props.color};
`;
