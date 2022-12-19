import React from 'react';

import Icon from '../../../../utils/components/icon/Icon';
import Button from '../../../../utils/components/button/Button';
import {
  VideoCommentContainer,
  VideoCommentInputCommentContainer,
  VideoCommentInputCommentContentContainer,
  VideoCommentInput,
  VideoCommentActionContainer
} from './styles/VideoComment.styled.component';
import {
  VideoCommentButtonContainerCancelStyles,
  VideoCommentButtonLabelCancelStyles
} from './styles/VideoComment.style';

const VideoComment: React.FC = () => {
  return (
    <VideoCommentContainer>
      {/* Input Comment */}
      <VideoCommentInputCommentContainer>
        <VideoCommentInputCommentContentContainer>
          <Icon
            src={'/assets/icons/user-icon.svg'}
            backgroundColor={'#2D2D2D'}
            borderRadius={'50%'}
            width={22}
            height={22}
            padding={'10px'}
          />
          <VideoCommentInput placeholder={'Add comment'} />
        </VideoCommentInputCommentContentContainer>
      </VideoCommentInputCommentContainer>

      <VideoCommentActionContainer>
        <Button
          text={'Cancel'}
          containerStyles={VideoCommentButtonContainerCancelStyles}
          labelStyles={VideoCommentButtonLabelCancelStyles}
        />
        <Button
          text={'Comment'}
        />
      </VideoCommentActionContainer>

      {/* Video Comments */}
    </VideoCommentContainer>
  );
};

export default VideoComment;
