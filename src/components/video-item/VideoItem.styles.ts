import styled from 'styled-components';

interface VideItemContainerProps {
  videoType: string;
}

export const VideoItemLink = styled.a`
  text-decoration: none;
`;

export const VideoItemContainer = styled.div<VideItemContainerProps>`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  width: 100%;
  height: ${props => props.videoType === 'VIDEO' ? '100%' : '250px'};
  &:hover {
    cursor: pointer;
  }
`;

export const VideoItemVideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const VideoItemVideo = styled.video`
  border-radius: 17px;
  width: 100%;
  height: 100%;
`;

export const VideoItemThumbnail = styled.img`
  object-fit: cover;
  border-radius: 17px;
  width: 100%;
  height: 100%;
`;

export const VideoItemDurationContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const VideoItemDurationLabel = styled.label`
  font-size: 14px;
  color: white;
`;

export const VideoItemVideoInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  align-items: center;
  gap: 5px;
`;

export const VideoItemVideoTitleLabel = styled.label`
  font-size: 14px;
  color: white;
`;

export const VideoItemVideoPostedAtLabel = styled(VideoItemVideoTitleLabel)`
  justify-self: right;
`;

export const VideoItemVideoUserContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const VideoItemVideoUserNameLabel = styled(VideoItemVideoTitleLabel)``;
