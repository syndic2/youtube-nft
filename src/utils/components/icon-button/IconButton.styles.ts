import styled from 'styled-components';

export const IconButtonWrapper = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const IconImg = styled.img`
  width: 24px;
  height: 24px;
`;
