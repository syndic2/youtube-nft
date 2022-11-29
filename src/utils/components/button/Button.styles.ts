import styled from 'styled-components';

interface ButtonContainerProps {
  backgroundColor: string;
}

interface ButtonLabelProps {
  color: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  column-gap: 10px;
  background-color: ${props => props.backgroundColor};
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonLabel = styled.label<ButtonLabelProps>`
  font-size: 16px;
  color: ${props => props.color};
  &:hover {
    cursor: pointer;
  }
`;
