import React, { useState, useRef, useCallback, useEffect } from 'react';

import Icon from '../../utils/components/icon/Icon';
import {
  VideoItemLink,
  VideoItemContainer,
  VideoItemVideoContainer,
  VideoItemVideo,
  VideoItemThumbnail,
  VideoItemDurationContainer,
  VideoItemDurationLabel,
  VideoItemVideoInfoContainer,
  VideoItemVideoTitleLabel,
  VideoItemVideoPostedAtLabel,
  VideoItemVideoUserContainer,
  VideoItemVideoUserNameLabel
} from './VideoItem.styles';

interface VideoItemProps {
  videoId: string;
  videoTitle: string;
  videoPathUrl: string;
  videoDuration: string;
  videoType: string;
  thumbnailPathUrl?: string;
  userName: string;
  postedAt: string;
}

const VideoItem: React.FC<VideoItemProps> = (props: VideoItemProps) => {
  const [isShowThumbnail, setIsShowThumbnail] = useState<boolean>(false);

  const {
    videoId,
    videoTitle,
    videoPathUrl,
    videoDuration,
    videoType,
    thumbnailPathUrl,
    userName,
    postedAt
  } = props;

  useEffect(() => {
    setIsShowThumbnail(thumbnailPathUrl ? true : false);
  }, [thumbnailPathUrl]);

  const videoElement = useRef<HTMLVideoElement>(null);

  const onVideoContainerMouseEnter = useCallback(() => {
    if (isShowThumbnail) setIsShowThumbnail(false);
    videoElement.current && videoElement.current.play();
  }, [isShowThumbnail]);

  const onVideoContainerMouseLeave = useCallback(() => {
    setIsShowThumbnail(true);
    videoElement.current && videoElement.current.pause();
  }, []);

  return (
    <VideoItemLink to={`/watch/${videoId}`}>
      <VideoItemContainer videoType={videoType}>
        {/* Video */}
        <VideoItemVideoContainer
          onMouseEnter={onVideoContainerMouseEnter}
          onMouseLeave={onVideoContainerMouseLeave}
        >
          {isShowThumbnail ? (
            <VideoItemThumbnail src={thumbnailPathUrl} />
          ) : (
            <VideoItemVideo
              ref={videoElement}
              muted
              loop
            >
              <source
                src={videoPathUrl}
                type={'video/mp4'}
              />
            </VideoItemVideo>
          )}
          <VideoItemDurationContainer>
            {isShowThumbnail ? (
              <VideoItemDurationLabel>{videoDuration}</VideoItemDurationLabel>
            ) : null}
          </VideoItemDurationContainer>
        </VideoItemVideoContainer>

        {/* Video Info */}
        <VideoItemVideoInfoContainer>
          <VideoItemVideoTitleLabel>{videoTitle}</VideoItemVideoTitleLabel>
          {videoType === 'VIDEO' ? (
            <>
              <VideoItemVideoPostedAtLabel>{postedAt}</VideoItemVideoPostedAtLabel>
              <VideoItemVideoUserContainer>
                <Icon
                  src={'/assets/icons/user-icon.svg'}
                  backgroundColor={'#2D2D2D'}
                  borderRadius={'50%'}
                  width={14}
                  height={14}
                  padding={'10px'}
                />
                <VideoItemVideoUserNameLabel>{userName}</VideoItemVideoUserNameLabel>
              </VideoItemVideoUserContainer>
            </>
          ) : null}
        </VideoItemVideoInfoContainer>
      </VideoItemContainer>
    </VideoItemLink>
  );
};

export default React.memo(VideoItem);
