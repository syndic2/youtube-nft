import styled from 'styled-components';

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  height: 100%;
`;

export const VideoItemVideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const VideoItemVideo = styled.video`
  border-radius: 17px;
`;

export const VideoItemThumbnail = styled.img`
  object-fit: contain;
  border-radius: 17px;
`;
