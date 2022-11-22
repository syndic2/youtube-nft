import React from 'react';

import VideoItem from '../video-item/VideoItem';
import { TrendingVideoContainer } from './TrendingVideo.styles';

export const TrendingVideo: React.FC = () => {
  return (
    <TrendingVideoContainer>
      <VideoItem
        videoTitle={'Video Title'}
        videoUrl={'/assets/videos/dummy-nft.mp4'}
        videoDuration={'10:15'}
        thumbnailUrl={'/assets/images/dummy-nft-thumbnail.png'}
        userName={'User Name'}
        postedAt={'12 days ago'}
      />
    </TrendingVideoContainer>
  );
};
