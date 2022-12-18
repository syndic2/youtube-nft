import React from 'react';

import videos from '../../../../dummy-data/videos.json';

import { VideoMapper } from '../../../../data/video/mappers/video.mapper';
import VideoItem from '../../../../components/video-item/VideoItem';
import { VideoRecommendationContainer } from './VideoRecommendation.styles';

const VideoRecommendation: React.FC = () => {
  return (
    <VideoRecommendationContainer>
      {videos.map((video, index) => (
        <VideoItem
          key={index}
          video={VideoMapper.toVideoModel(video)}
        />
      ))}
    </VideoRecommendationContainer>
  );
};

export default VideoRecommendation;
