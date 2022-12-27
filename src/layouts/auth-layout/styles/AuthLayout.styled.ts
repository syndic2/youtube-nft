import styled from 'styled-components';

export const AuthLayoutContainer = styled.div`
  background-image: url('/assets/images/login-register-background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
`;

export const AuthLayoutContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  height: 100%;
`;

export const AuthLayoutContentWrapperImage = styled.img`
  height: 50%;
`;
