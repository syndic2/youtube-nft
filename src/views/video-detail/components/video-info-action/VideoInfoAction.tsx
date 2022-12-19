import React, { useState, useCallback } from 'react';

import Icon from '../../../../utils/components/icon/Icon';
import Button from '../../../../utils/components/button/Button';
import IconButton from '../../../../utils/components/icon-button/IconButton';
import Divider from '../../../../utils/components/divider/Divider';

import {
  VideoInfoActionContainer,
  VideoInfoActionVideoTitleContainer,
  VideoInfoActionVideoTitleContentContainer,
  VideoInfoActionVideoTitleLabel,
  VideoInfoActionAddNFTButton,
  VideoInfoActionUserInfoActionContainer,
  VideoInfoActionUserInfoContainer,
  VideoInfoActionUserInfoContentContainer,
  VideoInfoActionUserNameSubscribersContainer,
  VideoInfoActionUserNameLabel,
  VideoInfoActionUserSubscribersLabel,
  VideoInfoActionSupportTipContainer,
  VideoInfoActionActionContainer,
  VideoInfoActionLikeDislikeContainer,
  VideoInfoActionShareSaveContainer,
  VideoInfoActionVideoDescriptionContainer
} from './styles/VideoInfoAction.styled.component';
import {
  VideoInfoActionButtonContainerLikeStyles,
  VideoInfoActionButtonContainerDislikeStyles,
  VideoInfoActionButtonContainerShareStyles,
  VideoInfoActionButtonContainerAddToPlaylistStyles
} from './styles/VideoInfoAction.style';

const VideoUserInfoAction: React.FC = () => {
  const [likeCount, setLikeCount] = useState<number>(0);
  const [dislikeCount, setDislikeCount] = useState<number>(0);

  const onLikeClick = useCallback(() => {
    setLikeCount(prevState => prevState += 1);
  }, []);

  const onDislikeClick = useCallback(() => {
    setDislikeCount(prevState => prevState += 1);
  }, []);

  return (
    <VideoInfoActionContainer>
      {/* Video Title */}
      <VideoInfoActionVideoTitleContainer>
        <VideoInfoActionVideoTitleContentContainer>
          <VideoInfoActionVideoTitleLabel>Video 1</VideoInfoActionVideoTitleLabel>
          <IconButton
            src={'/assets/icons/mute-icon.svg'}
          />
        </VideoInfoActionVideoTitleContentContainer>
        <VideoInfoActionAddNFTButton>nft+</VideoInfoActionAddNFTButton>
      </VideoInfoActionVideoTitleContainer>

      {/* User Info & Action */}
      <VideoInfoActionUserInfoActionContainer>
        {/* User Info */}
        <VideoInfoActionUserInfoContainer>
          <VideoInfoActionUserInfoContentContainer>
            <Icon
              src={'/assets/icons/user-icon.svg'}
              backgroundColor={'#2D2D2D'}
              borderRadius={'50%'}
              width={16}
              height={16}
              padding={'10px'}
            />
            <VideoInfoActionUserNameSubscribersContainer>
              <VideoInfoActionUserNameLabel>Name 1</VideoInfoActionUserNameLabel>
              <VideoInfoActionUserSubscribersLabel>100 subscribers</VideoInfoActionUserSubscribersLabel>
            </VideoInfoActionUserNameSubscribersContainer>
          </VideoInfoActionUserInfoContentContainer>

          <VideoInfoActionSupportTipContainer>
            <Button
              text={'Support'}
            />
            <Button
              text={'Tip'}
              startIcon={(
                <Icon
                  src={'/assets/icons/won-currency-icon.svg'}
                  borderRadius={'50%'}
                  backgroundColor={'#F7D45F'}
                  width={12}
                  height={12}
                  padding={'8px'}
                />
              )}
            />
          </VideoInfoActionSupportTipContainer>
        </VideoInfoActionUserInfoContainer>

        {/* Action */}
        <VideoInfoActionActionContainer>
          {/* Like & Dislike */}
          <VideoInfoActionLikeDislikeContainer>
            <Button
              text={String(likeCount)}
              startIcon={(
                <Icon
                  src={'/assets/icons/fire-icon.svg'}
                  width={16}
                  height={16}
                  padding={'none'}
                />
              )}
              containerStyles={VideoInfoActionButtonContainerLikeStyles}
              onClick={onLikeClick}
            />

            <Divider
              orientation={'vertical'}
              thickness={4}
              color={'#DDDDDD'}
              height={'45px'}
            />

            <Button
              text={String(dislikeCount)}
              startIcon={(
                <Icon
                  src={'/assets/icons/water-icon.svg'}
                  width={16}
                  height={16}
                  padding={'none'}
                />
              )}
              containerStyles={VideoInfoActionButtonContainerDislikeStyles}
              onClick={onDislikeClick}
            />
          </VideoInfoActionLikeDislikeContainer>

          {/* Share & Save */}
          <VideoInfoActionShareSaveContainer>
            <Button
              text={'Share'}
              startIcon={(
                <Icon
                  src={'/assets/icons/share-icon.svg'}
                  width={16}
                  height={16}
                  padding={'none'}
                />
              )}
              containerStyles={VideoInfoActionButtonContainerShareStyles}
            />
            <Button
              text={'Save'}
              startIcon={(
                <Icon
                  src={'/assets/icons/add-playlist-icon.svg'}
                  width={16}
                  height={16}
                  padding={'none'}
                />
              )}
              containerStyles={VideoInfoActionButtonContainerAddToPlaylistStyles}
            />
          </VideoInfoActionShareSaveContainer>
        </VideoInfoActionActionContainer>
      </VideoInfoActionUserInfoActionContainer>

      {/* Video Description */}
      <VideoInfoActionVideoDescriptionContainer>
        Description
      </VideoInfoActionVideoDescriptionContainer>
    </VideoInfoActionContainer>
  );
};

export default VideoUserInfoAction;
