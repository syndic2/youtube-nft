import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownTitleContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const DropdownTitleLabel = styled.div`
  font-size: 14px;
  color: white;
`;

export const DropdownContentContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 0;
  z-index: 1;
  background-color: white;
  border-radius: 6px;
`;
