import React from "react";

import { TrendingVideo } from '../../components/trending-video/TrendingVideo';
import {
  NftModeContainer,
  NftModeTitleLabel
} from "./NftMode.styles";

const NftMode: React.FC = () => {
  return (
    <NftModeContainer>
      <NftModeTitleLabel>mint your moment</NftModeTitleLabel>
      <TrendingVideo />
    </NftModeContainer>
  );
};

export default NftMode;
