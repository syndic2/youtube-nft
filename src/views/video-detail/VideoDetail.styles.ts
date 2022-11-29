import styled from 'styled-components';

export const VideoDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 30px;
  background-image: url('/assets/images/background.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 50px;
`;

export const VideoDetailVideoWatchContainer = styled.div`
  flex-basis: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
`;

export const VideoDetailVideo = styled.video`
  border-radius: 17px;
  width: 100%;
`;
