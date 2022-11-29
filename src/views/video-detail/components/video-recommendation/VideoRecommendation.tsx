import React from 'react';

import videos from '../../../../dummy-data/videos.json';

import VideoItem from '../../../../components/video-item/VideoItem';
import { VideoRecommendationContainer } from './VideoRecommendation.styles';

const VideoRecommendation: React.FC = () => {
  return (
    <VideoRecommendationContainer>
      {videos.map((video, index) => (
        <VideoItem
          key={index}
          videoId={video.video_id}
          videoTitle={video.video_title}
          videoPathUrl={video.video_path_url}
          videoDuration={video.video_duration}
          videoType={'VIDEO'}
          thumbnailPathUrl={video.thumbnail_path_url}
          userName={video.user_name}
          postedAt={video.posted_at}
        />
      ))}
    </VideoRecommendationContainer>
  );
};

export default VideoRecommendation;
