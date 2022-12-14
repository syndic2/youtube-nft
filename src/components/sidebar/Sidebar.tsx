import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ICON_TYPES } from '../../utils/components/svg-icon/icons';
import SvgIcon from '../../utils/components/svg-icon/SvgIcon';

import {
  SidebarContainer,
  SidebarMenuContainer,
  SidebarMenuLabel
} from './Sidebar.styles';

interface SidebarProps {
  isOpen: boolean;
}

interface SidebarMenuPathProps {
  path: string;
  label: string;
  icon: {
    type: ICON_TYPES;
    width?: string | number;
  };
  isSelected: boolean;
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { isOpen } = props;
  const navigate = useNavigate();

  const [menuPaths, setMenuPaths] = useState<SidebarMenuPathProps[]>([
    {
      path: '/home',
      label: 'Home',
      icon: {
        type: 'home-icon',
        width: 40
      },
      isSelected: true
    },
    {
      path: '/playlist',
      label: 'Playlist',
      icon: {
        type: 'playlist-icon',
        width: 35
      },
      isSelected: false
    },
    {
      path: '/nft-mode',
      label: 'NFT Mode',
      icon: {
        type: 'nft-icon',
        width: 40
      },
      isSelected: false
    },
    {
      path: '/analytics-mode',
      label: 'Analytics Mode',
      icon: {
        type: 'analytics-icon',
        width: 40
      },
      isSelected: false
    },
    {
      path: '/subscriber',
      label: 'Subscriber',
      icon: {
        type: 'star-icon',
        width: 40
      },
      isSelected: false
    },
    {
      path: '/short-clip',
      label: 'Short-Clip',
      icon: {
        type: 'shortclip-icon',
        width: 40
      },
      isSelected: false
    },
    {
      path: '/studio',
      label: 'Studio',
      icon: {
        type: 'camera-icon',
        width: 100
      },
      isSelected: false
    },
    {
      path: '/premium-member',
      label: 'Premium Member',
      icon: {
        type: 'diamond-icon',
        width: 40
      },
      isSelected: false
    }
  ]);

  const onSelectMenu = useCallback((path: string) => {
    setMenuPaths(preveState => preveState.map(menuPath => {
      if (menuPath.path !== path) return { ...menuPath, isSelected: false };
      return { ...menuPath, isSelected: true };
    }));
    navigate(path);
  }, []);

  return isOpen ? (
    <SidebarContainer>
      {menuPaths.map((menuPath, index) => (
        <SidebarMenuContainer
          key={index}
          isSelected={menuPath.isSelected}
          onClick={() => onSelectMenu(menuPath.path)}
        >
          <SvgIcon
            name={menuPath.icon.type}
            fill={'#1D4888'}
            width={menuPath.icon.width}
          />
          <SidebarMenuLabel>{menuPath.label}</SidebarMenuLabel>
        </SidebarMenuContainer>
      ))}
    </SidebarContainer>
  ) : null;
};

export default Sidebar;
