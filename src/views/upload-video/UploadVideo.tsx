import React from 'react';

import { UploadVideoContainer } from './UploadVideo.styles';

interface UploadVideoProps {
  isNft: boolean;
}

const UploadVideo: React.FC<UploadVideoProps> = (props: UploadVideoProps) => {
  const { isNft } = props;

  return (
    <UploadVideoContainer>
      Upload Video
    </UploadVideoContainer>
  );
};

export default UploadVideo;
