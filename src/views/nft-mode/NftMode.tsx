import React from "react";

import TrendingVideo from '../../components/trending-video/TrendingVideo';
import ShortClipVideo from '../../components/short-clip-video/ShortClipVideo';
import Divider from '../../utils/components/divider/Divider';

import {
  NftModeContainer,
  NftModeTitleLabel
} from "./styles/NftMode.styled";

const NftMode: React.FC = () => {
  return (
    <NftModeContainer>
      <NftModeTitleLabel>mint your moment</NftModeTitleLabel>
      <TrendingVideo />
      <Divider />
      <ShortClipVideo />
      <Divider />
    </NftModeContainer>
  );
};

export default NftMode;
