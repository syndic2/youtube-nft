import React from 'react';

import videos from '../../dummy-data/videos.json';

import VideoItem from '../video-item/VideoItem';
import Icon from '../../utils/components/icon/Icon';
import {
  ShortClipContainer,
  ShortClipTitleContainer,
  ShortClipTitleLabel,
  ShortClipVideosContainer
} from './ShortClip.styles';

const ShortClip: React.FC = () => {
  return (
    <ShortClipContainer>
      {/* Title */}
      <ShortClipTitleContainer>
        <Icon
          src={'/assets/icons/shortclip-icon.svg'}
        />
        <ShortClipTitleLabel>short-clip</ShortClipTitleLabel>
      </ShortClipTitleContainer>

      {/* Videos */}
      <ShortClipVideosContainer>
        {videos.map((video, index) => index < 8 ? (
          <VideoItem
            key={index}
            videoId={video.video_id}
            videoTitle={video.video_title}
            videoPathUrl={video.video_path_url}
            videoDuration={video.video_duration}
            videoType={'SHORT_CLIP'}
            thumbnailPathUrl={video.thumbnail_path_url}
            userName={video.user_name}
            postedAt={video.posted_at}
          />
        ) : null)}
      </ShortClipVideosContainer>
    </ShortClipContainer>
  );
};

export default ShortClip;
