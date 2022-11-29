import styled from 'styled-components';

interface IconContainerProps {
  backgroundColor: string;
  borderRadius: string;
  width: number;
  height: number;
  padding: string;
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  padding: ${props => props.padding};
`;

export const IconImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
