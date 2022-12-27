import React, { useState, useRef, useCallback } from 'react';

import genresJSON from '../../dummy-data/genres.json';

import AdditionalContent from './components/additional-content/AdditionalContent';
import Icon from '../../utils/components/icon/Icon';
import Button from '../../utils/components/button/Button';
import ChipButton from '../../utils/components/chip-button/ChipButton';

import {
  UploadVideoContainer,
  UploadVideoUploadVideoFileContainer,
  UploadVideoVideoFileTitleLabel,
  UploadVideoVideoDescriptionContainer,
  UploadVideoVideoDescriptionTitle,
  UploadVideoVideoTitleInput,
  UploadVideoVideoDescriptionInput,
  UploadVideoVideoThumbnailContainer,
  UploadVideoVideoThumbnailTitleLabel,
  UploadVideoVideoThumbnailContentContainer,
  UploadVideoVideoThumbnailImgContainer,
  UploadVideoVideoThumbnailImg,
  UploadVideoVideoThumbnailImgUploadContainer,
  UploadVideoVideoThumbnailImgNameContainer,
  UploadVideoVideoThumbnailImgNameLabel,
  UploadVideoVideoThumbnailImgInfoLabel,
  UploadVideoVideoGenreContainer,
  UploadVideoVideoGenreTitleLabel,
  UploadVideoSelectedGenreContainer,
  UploadVideoSelectedGenreTitleLabel,
  UploadVideoSelectedGenreItemContainer,
  UploadVideoEmptySelectedGenreItemLabel,
  UploadVideoSelectGenreContainer,
  UploadVideoSelectGenreTitleLabel,
  UploadVideoSelectGenreItemContainer,
  UploadVideoSelectGenreInfoLabel
} from './styles/UploadVideo.styled';
import {
  UploadVideoButtonUploadVideoThumbnailStyles,
  UploadVideoButtonUploadStyles
} from './styles/UploadVideo.style';

interface UploadVideoProps {
  isNft: boolean;
}

const UploadVideo: React.FC<UploadVideoProps> = (props: UploadVideoProps) => {
  const { isNft } = props;

  const [thumbnailImgPreview, setThumbnailImgPreview] = useState<string | undefined>(undefined);
  const [thumbnailImgFile, setThumbnailImgFile] = useState<File | undefined>(undefined);
  const thumbnailInputFileRef = useRef<HTMLInputElement | null>(null);

  const [genres] = useState(genresJSON);
  const [selectedGenres, setSelectedGenres] = useState([
    genresJSON[0],
    genresJSON[1],
    genresJSON[2],
    genresJSON[3],
    genresJSON[4]
  ]);

  const onBrowseThumbnailFileClick = useCallback(() => {
    thumbnailInputFileRef.current && thumbnailInputFileRef.current.click();
  }, []);

  const onThumbnailFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setThumbnailImgPreview(URL.createObjectURL(event.target.files[0]));
    setThumbnailImgFile(event.target.files[0]);
  }, []);

  const onAddGenreClick = useCallback((genre: any) => {
    const selectedGenre = selectedGenres.find(selectedGenre => selectedGenre.genre_id === genre.genre_id);
    if (selectedGenre) return;

    setSelectedGenres(selectedGenres => [...selectedGenres, genre]);
  }, [selectedGenres]);

  const onRemoveGenreClick = useCallback((genreId: string) => {
    setSelectedGenres(selectedGenres => selectedGenres.filter(genre => genre.genre_id !== genreId));
  }, []);

  return (
    <UploadVideoContainer>
      {/* Upload Video */}
      <UploadVideoUploadVideoFileContainer>
        <UploadVideoVideoFileTitleLabel>
          {isNft ? 'NFT' : 'video'} upload
        </UploadVideoVideoFileTitleLabel>
        <Icon
          src={'/assets/images/upload-icon.png'}
          width={190}
          height={95}
          borderRadius={'45px'}
          backgroundColor={'white'}
        />
      </UploadVideoUploadVideoFileContainer>

      {/* Video Description */}
      <UploadVideoVideoDescriptionContainer>
        <UploadVideoVideoDescriptionTitle>Description</UploadVideoVideoDescriptionTitle>
        <UploadVideoVideoTitleInput
          placeholder={'Title'}
        />
        <UploadVideoVideoDescriptionInput
          placeholder={'Description'}
          rows={10}
        />
      </UploadVideoVideoDescriptionContainer>

      {/* Upload Thumbnail */}
      <UploadVideoVideoThumbnailContainer>
        <UploadVideoVideoThumbnailTitleLabel>Thumbnail</UploadVideoVideoThumbnailTitleLabel>
        <UploadVideoVideoThumbnailContentContainer>
          {/* Video Thumbnail Preview */}
          <UploadVideoVideoThumbnailImgContainer>
            <UploadVideoVideoThumbnailImg
              src={thumbnailImgPreview ? thumbnailImgPreview : '/assets/icons/plain-image-icon.svg'}
            />
          </UploadVideoVideoThumbnailImgContainer>

          {/* Video Thumbnail Upload */}
          <UploadVideoVideoThumbnailImgUploadContainer>
            {/* Video Thumbnail File Name */}
            <UploadVideoVideoThumbnailImgNameContainer>
              <UploadVideoVideoThumbnailImgNameLabel>
                {thumbnailImgFile ? thumbnailImgFile.name : 'Choose your thumbnail'}
              </UploadVideoVideoThumbnailImgNameLabel>
              <UploadVideoVideoThumbnailImgInfoLabel>
                Recommended thumbnail is 16:9 with size max 1mb
              </UploadVideoVideoThumbnailImgInfoLabel>
            </UploadVideoVideoThumbnailImgNameContainer>

            {/* Video Thumbnail Upload Button */}
            <>
              <Button
                text={'Browse'}
                containerStyles={UploadVideoButtonUploadVideoThumbnailStyles}
                onClick={onBrowseThumbnailFileClick}
              />
              <input
                ref={thumbnailInputFileRef}
                type={'file'}
                accept={'image/png, image/jpeg'}
                hidden
                onChange={onThumbnailFileChange}
              />
            </>
          </UploadVideoVideoThumbnailImgUploadContainer>
        </UploadVideoVideoThumbnailContentContainer>
      </UploadVideoVideoThumbnailContainer>

      {/* Genres */}
      <UploadVideoVideoGenreContainer>
        <UploadVideoVideoGenreTitleLabel>Genre</UploadVideoVideoGenreTitleLabel>

        {/* Selected Genres */}
        <UploadVideoSelectedGenreContainer>
          <UploadVideoSelectedGenreTitleLabel>
            Selected Tag (5 Max)
          </UploadVideoSelectedGenreTitleLabel>
          <UploadVideoSelectedGenreItemContainer>
            {selectedGenres.length === 0 ? (
              <UploadVideoEmptySelectedGenreItemLabel>
                Crypto, NFT, Game, Music, Vlog, . . . .
              </UploadVideoEmptySelectedGenreItemLabel>
            ) : selectedGenres.map((selectedGenre, index) => (
              <ChipButton
                key={index}
                text={selectedGenre.genre_name}
                onClick={() => onRemoveGenreClick(selectedGenre.genre_id)}
              />
            ))}
          </UploadVideoSelectedGenreItemContainer>
        </UploadVideoSelectedGenreContainer>

        {/* Select Genres */}
        <UploadVideoSelectGenreContainer>
          <UploadVideoSelectGenreTitleLabel>Select Tags</UploadVideoSelectGenreTitleLabel>
          <UploadVideoSelectGenreItemContainer>
            {genres.map((genre, index) => (
              <ChipButton
                key={index}
                text={genre.genre_name}
                onClick={() => onAddGenreClick(genre)}
              />
            ))}
          </UploadVideoSelectGenreItemContainer>
          <UploadVideoSelectGenreInfoLabel>
            Add tags so its easier for people who enjoy your type of content to find you. If your content are suited to mature audience, you can tag it as 'mature'
          </UploadVideoSelectGenreInfoLabel>
        </UploadVideoSelectGenreContainer>
      </UploadVideoVideoGenreContainer>

      {/* Additional Content */}
      <AdditionalContent />

      <Button
        text={'Upload'}
        containerStyles={UploadVideoButtonUploadStyles}
      />
    </UploadVideoContainer>
  );
};

export default UploadVideo;
