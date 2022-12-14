import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainLayoutContentContainer = styled.main`
  display: flex;
  background-image: url('/assets/images/background.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  box-sizing: border-box;
`;

export const MainLayoutOutlet = styled.div`
  position: relative;
  overflow-y: auto;
  width: 100%;
  height: 650px;
`;
