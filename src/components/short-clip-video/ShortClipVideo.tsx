import React from 'react';

import videos from '../../dummy-data/videos.json';

import { VideoMapper } from '../../data/video/mappers/video.mapper';
import VideoItem from '../video-item/VideoItem';
import Icon from '../../utils/components/icon/Icon';
import {
  ShortClipVideoContainer,
  ShortClipVideoTitleContainer,
  ShortClipVideoTitleLabel,
  ShortClipVideoVideosContainer
} from './ShortClipVideo.styles';

const ShortClipVideo: React.FC = () => {
  return (
    <ShortClipVideoContainer>
      {/* Title */}
      <ShortClipVideoTitleContainer>
        <Icon
          src={'/assets/icons/shortclip-icon.svg'}
        />
        <ShortClipVideoTitleLabel>short-clip</ShortClipVideoTitleLabel>
      </ShortClipVideoTitleContainer>

      {/* Videos */}
      <ShortClipVideoVideosContainer>
        {videos.map((video, index) => index < 8 ? (
          <VideoItem
            key={index}
            video={VideoMapper.toVideoModel({ ...video, video_type: "SHORT_CLIP" })}
          />
        ) : null)}
      </ShortClipVideoVideosContainer>
    </ShortClipVideoContainer>
  );
};

export default ShortClipVideo;
