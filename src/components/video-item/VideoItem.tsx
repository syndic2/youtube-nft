import React, { useState, useRef, useCallback, useEffect } from 'react';

import {
  VideoItemContainer,
  VideoItemVideoContainer,
  VideoItemVideo,
  VideoItemThumbnail
} from './VideoItem.styles';

interface VideoItemProps {
  videoTitle: string;
  videoUrl: string;
  videoDuration: string;
  thumbnailUrl?: string;
  userName: string;
  postedAt: string;
}

const VideoItem: React.FC<VideoItemProps> = (props: VideoItemProps) => {
  const [isShowThumbnail, setIsShowThumbnail] = useState<boolean>(false);

  const {
    videoTitle,
    videoUrl,
    videoDuration,
    thumbnailUrl,
    userName,
    postedAt
  } = props;

  useEffect(() => {
    setIsShowThumbnail(thumbnailUrl ? true : false);
  }, [thumbnailUrl]);

  const videoElement = useRef<HTMLVideoElement>(null);

  const onVideoContainerMouseEnter = useCallback(() => {
    if (isShowThumbnail) setIsShowThumbnail(false);
    videoElement.current && videoElement.current.play();
  }, [isShowThumbnail, setIsShowThumbnail]);

  const onVideoContainerMouseLeave = useCallback(() => {
    videoElement.current && videoElement.current.pause();
  }, []);

  return (
    <VideoItemContainer>
      <VideoItemVideoContainer
        onMouseEnter={onVideoContainerMouseEnter}
        onMouseLeave={onVideoContainerMouseLeave}
      >
        {isShowThumbnail ? (
          <VideoItemThumbnail src={thumbnailUrl} />
        ) : (
          <VideoItemVideo
            ref={videoElement}
            muted
            loop
          >
            <source
              src={videoUrl}
              type={'video/mp4'}
            />
          </VideoItemVideo>
        )}
      </VideoItemVideoContainer>
    </VideoItemContainer>
  );
};

export default VideoItem;
