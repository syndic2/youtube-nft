import styled from 'styled-components';

export const PlaylistVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  overflow-y: auto;
`;

export const PlaylistVideoTitleContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const PlaylistVideoTitleLabel = styled.label`
  font-size: 20px;
  color: white;
`;

export const PlaylistVideoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
