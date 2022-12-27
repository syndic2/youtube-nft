import React, { useState, useCallback } from 'react';

import { VideoModel } from '../../../../../../data/video/models/video.model';
import IconButton from '../../../../../../utils/components/icon-button/IconButton';
import VideoItem from '../../../../../../components/video-item/VideoItem';
import {
  PlaylistVideoContainer,
  PlaylistVideoTitleContainer,
  PlaylistVideoTitleLabel,
  PlaylistVideoVideosContainer
} from './styles/PlaylistVideo.styled';

interface PlaylistVideoProps {
  videos: VideoModel[];
}

const PlaylistVideo: React.FC<PlaylistVideoProps> = (props: PlaylistVideoProps) => {
  const {
    videos
  } = props;

  const [playlistVideos, setPlaylistVideos] = useState<VideoModel[]>(videos);
  const [sortOrder, setSortOrder] = useState<number>(1);

  const onSortPlaylistVideosClick = useCallback(() => {
    const orderValue = sortOrder * -1;
    setSortOrder(orderValue);
    setPlaylistVideos(prevState => [...prevState].sort((a, b) => a.videoTitle < b.videoTitle ? orderValue : -orderValue));
  }, [sortOrder]);

  return (
    <PlaylistVideoContainer>
      {/* Title */}
      <PlaylistVideoTitleContainer>
        <IconButton
          iconName={'sort-amount-down-icon'}
          fill={'white'}
          width={20}
          onClick={onSortPlaylistVideosClick}
        />
        <PlaylistVideoTitleLabel>Sort</PlaylistVideoTitleLabel>
      </PlaylistVideoTitleContainer>

      {/* Videos */}
      <PlaylistVideoVideosContainer>
        {playlistVideos.map((playlistVideo, index) => (
          <VideoItem
            key={index}
            video={playlistVideo}
          />
        ))}
      </PlaylistVideoVideosContainer>
    </PlaylistVideoContainer>
  );
};

export default PlaylistVideo;
