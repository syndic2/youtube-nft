import React, { useState, useRef, useCallback, useEffect } from 'react';

import { VideoModel } from '../../data/video/models/video.model';
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
  video: VideoModel;
}

const VideoItem: React.FC<VideoItemProps> = (props: VideoItemProps) => {
  const [isShowThumbnail, setIsShowThumbnail] = useState<boolean>(false);

  const { video } = props;

  useEffect(() => {
    setIsShowThumbnail(video.thumbnailPathUrl ? true : false);
  }, [video.thumbnailPathUrl]);

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
    <VideoItemLink to={`/watch/${video.videoId}`}>
      <VideoItemContainer videoType={video.videoType}>
        {/* Video */}
        <VideoItemVideoContainer
          onMouseEnter={onVideoContainerMouseEnter}
          onMouseLeave={onVideoContainerMouseLeave}
        >
          {isShowThumbnail ? (
            <VideoItemThumbnail src={video.thumbnailPathUrl} />
          ) : (
            <VideoItemVideo
              ref={videoElement}
              muted
              loop
            >
              <source
                src={video.videoPathUrl}
                type={'video/mp4'}
              />
            </VideoItemVideo>
          )}
          <VideoItemDurationContainer>
            {isShowThumbnail ? (
              <VideoItemDurationLabel>{video.videoDuration}</VideoItemDurationLabel>
            ) : null}
          </VideoItemDurationContainer>
        </VideoItemVideoContainer>

        {/* Video Info */}
        <VideoItemVideoInfoContainer>
          <VideoItemVideoTitleLabel>{video.videoTitle}</VideoItemVideoTitleLabel>
          {video.videoType === 'VIDEO' ? (
            <>
              <VideoItemVideoPostedAtLabel>{video.postedAt}</VideoItemVideoPostedAtLabel>
              <VideoItemVideoUserContainer>
                <Icon
                  src={'/assets/icons/user-icon.svg'}
                  backgroundColor={'#2D2D2D'}
                  borderRadius={'50%'}
                  width={14}
                  height={14}
                  padding={'10px'}
                />
                <VideoItemVideoUserNameLabel>{video.userName}</VideoItemVideoUserNameLabel>
              </VideoItemVideoUserContainer>
            </>
          ) : null}
        </VideoItemVideoInfoContainer>
      </VideoItemContainer>
    </VideoItemLink>
  );
};

export default React.memo(VideoItem);
