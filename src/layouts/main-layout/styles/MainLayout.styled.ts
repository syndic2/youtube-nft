import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const MainLayoutContentContainer = styled.main`
  display: flex;
  background-image: url('/assets/images/background.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  overflow-y: auto;
  width: 100%;
  height: calc(100% - 90px);
`;

export const MainLayoutOutlet = styled.div`
  position: relative;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;
