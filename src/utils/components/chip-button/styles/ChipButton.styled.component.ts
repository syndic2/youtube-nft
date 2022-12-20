import styled from 'styled-components';

export const ChipButtonContainer = styled.button`
  display: flex;
  align-items: center;
  background-color: #DAE9F8;
  border: none;
  border-radius: 25px;
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const ChipButtonLabel = styled.label`
  font-size: 14px;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;
