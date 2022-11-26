import styled from 'styled-components';

interface IconImgProps {
  width: number;
  height: number;
}

export const IconImg = styled.img<IconImgProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;
