import styled, { CSSProperties } from 'styled-components';

interface ButtonContainerProps {
  styles: CSSProperties;
}

interface ButtonLabelProps {
  styles: CSSProperties;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  column-gap: 10px;
  background-color: ${({ styles }) => styles.backgroundColor};
  border: none;
  border-radius: ${({ styles }) => styles.borderRadius};
  width: fit-content;
  margin-left: ${({ styles }) => styles.marginLeft};
  padding: 10px 20px;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonLabel = styled.label<ButtonLabelProps>`
  font-size: ${({ styles }) => styles.fontSize};
  color: ${({ styles }) => styles.color};
  &:hover {
    cursor: pointer;
  }
`;
