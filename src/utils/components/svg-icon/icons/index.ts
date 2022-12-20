import { ReactComponent as HomeIcon } from '../icons/home-icon.svg';
import { ReactComponent as PlaylistIcon } from '../icons/playlist-icon.svg';
import { ReactComponent as NftIcon } from '../icons/nft-icon.svg';
import { ReactComponent as AnalyticsIcon } from '../icons/analytics-icon.svg';
import { ReactComponent as StarIcon } from '../icons/star-icon.svg';
import { ReactComponent as ShortClipIcon } from '../icons/shortclip-icon.svg';
import { ReactComponent as CameraIcon } from '../icons/camera-icon.svg';
import { ReactComponent as DiamondIcon } from '../icons/diamond-icon.svg';
import { ReactComponent as PencilIcon } from '../icons/pencil-icon.svg';
import { ReactComponent as ChevronUpIcon } from '../icons/chevron-up-icon.svg';
import { ReactComponent as ChevronDownIcon } from '../icons/chevron-down-icon.svg';
import { ReactComponent as UserShieldIcon } from '../icons/user-shield-icon.svg';
import { ReactComponent as GlobeIcon } from '../icons/globe-icon.svg';
import { ReactComponent as LinkIcon } from '../icons/link-icon.svg';
import { ReactComponent as SortAmountDownIcon } from '../icons/sort-amount-down-icon.svg';
import { ReactComponent as VideoIcon } from '../icons/video-icon.svg';

export type ICON_TYPES = keyof typeof Icons;

export const Icons = {
  'home-icon': HomeIcon,
  'playlist-icon': PlaylistIcon,
  'nft-icon': NftIcon,
  'analytics-icon': AnalyticsIcon,
  'star-icon': StarIcon,
  'shortclip-icon': ShortClipIcon,
  'camera-icon': CameraIcon,
  'diamond-icon': DiamondIcon,
  'pencil-icon': PencilIcon,
  'chevron-up-icon': ChevronUpIcon,
  'chevron-down-icon': ChevronDownIcon,
  'user-shield-icon': UserShieldIcon,
  'globe-icon': GlobeIcon,
  'link-icon': LinkIcon,
  'sort-amount-down-icon': SortAmountDownIcon,
  'video-icon': VideoIcon
};
