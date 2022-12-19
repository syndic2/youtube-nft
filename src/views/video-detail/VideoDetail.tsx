import React from 'react';

import VideoInfoAction from './components/video-info-action/VideoInfoAction';
import VideoComment from './components/video-comment/VideoComment';
import VideoRecommendation from './components/video-recommendation/VideoRecommendation';

import {
  VideoDetailContainer,
  VideoDetailVideoWatchContainer,
  VideoDetailVideo
} from './styles/VideoDetail.styled.component';

const VideoDetail: React.FC = () => {
  return (
    <VideoDetailContainer>
      {/* Video Watch */}
      <VideoDetailVideoWatchContainer>
        <VideoDetailVideo
          muted
          loop
          controls
        >
          <source
            src={'/assets/videos/dummy-nft.mp4'}
            type={'video/mp4'}
          />
        </VideoDetailVideo>
        <VideoInfoAction />
        <VideoComment />
      </VideoDetailVideoWatchContainer>

      {/* Video Recommendation */}
      <VideoRecommendation />
    </VideoDetailContainer>
  );
};

export default VideoDetail;
