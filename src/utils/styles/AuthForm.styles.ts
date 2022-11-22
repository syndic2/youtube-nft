import styled from 'styled-components';

export const AuthFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid #4F4F4F;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
`;

export const AuthFormTitleLabel = styled.label`
  font-size: 19px;
  margin: auto;
`;

export const AuthFormBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const AuthFormBodyFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const AuthFormBodyFieldLabel = styled.label`
  font-size: 14px;
`;

export const AuthFormBodyInputField = styled.input`
  font-size: 14px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 12px 14px;
  &:focus {
    border: 1px solid #537CB81A;
  }
`;

export const AuthFormFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const AuthFormFooterButton = styled.button`
  background-color: #308CFF;
  border: 1px solid #308CFF;
  border-radius: 10px;
  width: 100%;
  padding: 14px;
  &:hover {
    cursor: pointer;
  }
`;

export const AuthFormFooterForgotPasswordLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: black;
  margin-left: auto;
`;
