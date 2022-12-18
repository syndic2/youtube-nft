import React, { useState, useRef, useCallback, useEffect } from 'react';

import { VideoModel } from '../../../../data/video/models/video.model';
import IconButton from '../../../../utils/components/icon-button/IconButton';
import Dropdown from '../../../../utils/components/dropdown/Dropdown';
import PublicationDropdownContent from './components/publication-dropdown-item/PublicationDropdownContent';
import PlaylistVideo from './components/playlist-video/PlaylistVideo';

import {
  PlaylistItemContainer,
  PlaylistItemPreviewContainer,
  PlaylistItemPreviewThumbnail,
  PlaylistItemTitleContainer,
  PlaylistItemInputTitleContainer,
  PlaylistItemInputTitle
} from './PlaylistItem.styles';

interface PlaylistItemProps {
  videoPlaylistTitle: string;
  publicationStatus: string;
  videoPlaylistThumbnail: string;
  playlistVideos: VideoModel[];
}

const PlaylistItem: React.FC<PlaylistItemProps> = (props: PlaylistItemProps) => {
  const {
    videoPlaylistTitle: playlistTitle,
    videoPlaylistThumbnail,
    playlistVideos
  } = props;

  const [videoPlaylistTitle, setVideoPlaylistTitle] = useState<string | undefined>(undefined);
  const [playlistInputTitleElementWidth, setPlaylistInputTitleElementWidth] = useState<number>(0);
  const playlistItemInputTitleElement = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setVideoPlaylistTitle(playlistTitle);
    setPlaylistInputTitleElementWidth(Number(playlistTitle.length));

    if (playlistItemInputTitleElement.current) playlistItemInputTitleElement.current.disabled = true;
  }, [playlistTitle, playlistItemInputTitleElement]);

  const onVideoPlaylistTitleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoPlaylistTitle(event.target.value);
    playlistItemInputTitleElement.current && setPlaylistInputTitleElementWidth(playlistItemInputTitleElement.current?.value.length);
  }, [playlistItemInputTitleElement]);

  const onEditVideoPlaylistTitleClick = useCallback(() => {
    if (playlistItemInputTitleElement.current) {
      playlistItemInputTitleElement.current.disabled = false;
      playlistItemInputTitleElement.current.focus();
    }
  }, [playlistItemInputTitleElement]);

  return (
    <PlaylistItemContainer>
      {/* Preview Thumbnail */}
      <PlaylistItemPreviewContainer>
        <PlaylistItemPreviewThumbnail
          src={videoPlaylistThumbnail}
        />
      </PlaylistItemPreviewContainer>

      {/* Playlist Title */}
      <PlaylistItemTitleContainer>
        <PlaylistItemInputTitleContainer>
          <PlaylistItemInputTitle
            ref={playlistItemInputTitleElement}
            name={'video_playlist_title'}
            value={videoPlaylistTitle}
            width={playlistInputTitleElementWidth}
            onChange={onVideoPlaylistTitleChange}
          />
          <IconButton
            iconName={'pencil-icon'}
            fill={'white'}
            width={20}
            onClick={onEditVideoPlaylistTitleClick}
          />
        </PlaylistItemInputTitleContainer>
        <Dropdown
          title={'Publication'}
          DropdownContent={<PublicationDropdownContent />}
        />
      </PlaylistItemTitleContainer>

      {/* Playlist Video */}
      <PlaylistVideo
        videos={playlistVideos}
      />
    </PlaylistItemContainer>
  );
};

export default PlaylistItem;
