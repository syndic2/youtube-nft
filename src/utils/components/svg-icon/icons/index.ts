import { ReactComponent as HomeIcon } from '../icons/home-icon.svg';
import { ReactComponent as PlaylistIcon } from '../icons/playlist-icon.svg';
import { ReactComponent as NftIcon } from '../icons/nft-icon.svg';
import { ReactComponent as AnalyticsIcon } from '../icons/analytics-icon.svg';
import { ReactComponent as StarIcon } from '../icons/star-icon.svg';
import { ReactComponent as ShortClipIcon } from '../icons/shortclip-icon.svg';
import { ReactComponent as CameraIcon } from '../icons/camera-icon.svg';
import { ReactComponent as DiamondIcon } from '../icons/diamond-icon.svg';

export type ICON_TYPES = keyof typeof Icons;

export const Icons = {
  'home-icon': HomeIcon,
  'playlist-icon': PlaylistIcon,
  'nft-icon': NftIcon,
  'analytics-icon': AnalyticsIcon,
  'star-icon': StarIcon,
  'shortclip-icon': ShortClipIcon,
  'camera-icon': CameraIcon,
  'diamond-icon': DiamondIcon
};
