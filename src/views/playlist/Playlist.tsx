import React from 'react';

import videoPlaylists from '../../dummy-data/video-playlists.json';

import { VideoMapper } from '../../data/video/mappers/video.mapper';
import PlaylistItem from './components/playlist-item/PlaylistItem';
import { PlaylistContainer, PlaylistContentContainer } from './styles/Playlist.styled.component';

const Playlist: React.FC = () => {
  return (
    <PlaylistContainer>
      <PlaylistContentContainer>
        {videoPlaylists.map((videoPlaylist, index) => (
          <PlaylistItem
            key={index}
            videoPlaylistTitle={videoPlaylist.video_playlist_title}
            publicationStatus={videoPlaylist.publication_status}
            videoPlaylistThumbnail={videoPlaylist.video_playlist_thumbnail}
            playlistVideos={videoPlaylist.videos.map(video => VideoMapper.toVideoModel(video))}
          />
        ))}
      </PlaylistContentContainer>
    </PlaylistContainer>
  );
};

export default Playlist;
