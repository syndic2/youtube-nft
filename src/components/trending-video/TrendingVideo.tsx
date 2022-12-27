import React, { useState, useCallback } from 'react';
import { Swiper as SwiperInstance, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import videos from '../../dummy-data/videos.json';

import { VideoMapper } from '../../data/video/mappers/video.mapper';
import Icon from '../../utils/components/icon/Icon';
import IconButton from '../../utils/components/icon-button/IconButton';
import VideoItem from '../video-item/VideoItem';
import {
  TrendingVideoContainer,
  TredingVideoVideosContainer,
  TrendingVideoTitleContainer,
  TredingVideoTitleLabel
} from './styles/TrendingVideo.styled';

const TrendingVideo: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  const onSwiperPrev = useCallback(() => {
    swiper && swiper.slidePrev();
  }, [swiper]);

  const onSwiperNext = useCallback(() => {
    swiper && swiper.slideNext();
  }, [swiper]);

  return (
    <TrendingVideoContainer>
      {/* Title */}
      <TrendingVideoTitleContainer>
        <Icon
          src={'/assets/images/trending-logo.png'}
          width={32}
          height={32}
        />
        <TredingVideoTitleLabel>trending</TredingVideoTitleLabel>
      </TrendingVideoTitleContainer>

      {/* Videos */}
      <TredingVideoVideosContainer>
        <IconButton
          src={'/assets/icons/arrow-left.svg'}
          onClick={onSwiperPrev}
        />
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <VideoItem
                video={VideoMapper.toVideoModel(video)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton
          src={'/assets/icons/arrow-right.svg'}
          onClick={onSwiperNext}
        />
      </TredingVideoVideosContainer>
    </TrendingVideoContainer>
  );
};

export default TrendingVideo;
