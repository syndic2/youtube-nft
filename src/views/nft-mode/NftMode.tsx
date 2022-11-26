import React from "react";

import TrendingVideo from '../../components/trending-video/TrendingVideo';
import ShortClip from '../../components/short-clip/ShortClip';
import Divider from '../../utils/components/divider/Divider';

import {
  NftModeContainer,
  NftModeTitleLabel
} from "./NftMode.styles";

const NftMode: React.FC = () => {
  return (
    <NftModeContainer>
      <NftModeTitleLabel>mint your moment</NftModeTitleLabel>
      <TrendingVideo />
      <Divider />
      <ShortClip />
      <Divider />
    </NftModeContainer>
  );
};

export default NftMode;
