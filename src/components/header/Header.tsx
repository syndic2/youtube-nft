import React, { useCallback } from "react";

import IconButton from '../../utils/components/icon-button/IconButton';
import {
  HeaderContainer,
  HeaderSideMenuIconButton,
  HeaderSideMenuIcon,
  HeaderContentContainer,
  HeaderContentTitleLinkContainer,
  HeaderContentTitleLogo,
  HeaderContentTitleLabel,
  HeaderContentMenuContainer,
  HeaderContentMenuSearchBoxContainer,
  HeaderContentMenuSearchInput,
  HeaderContentMenuUploadVideoContainer,
  HeaderContentLoginRegisterContainer,
  HeaderContentLoginLoginLink,
  HeaderContentRegisterLink
} from "./Header.styles";

interface HeaderProps {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { setIsOpenSidebar } = props;

  const onSidebarClick = useCallback(() => {
    setIsOpenSidebar(prevState => !prevState);
  }, [setIsOpenSidebar]);

  return (
    <HeaderContainer>
      {/* Sidebar Button */}
      <HeaderSideMenuIconButton onClick={onSidebarClick}>
        <HeaderSideMenuIcon src={'/assets/icons/hamburger-button.svg'} />
      </HeaderSideMenuIconButton>

      {/* Header Content */}
      <HeaderContentContainer>
        {/* Title */}
        <HeaderContentTitleLinkContainer to={'/nft-mode'}>
          <HeaderContentTitleLogo src={'/assets/images/logo.png'} />
          <HeaderContentTitleLabel>
            taesun nft
          </HeaderContentTitleLabel>
        </HeaderContentTitleLinkContainer>

        {/* Menu */}
        <HeaderContentMenuContainer>
          {/* Search Box */}
          <HeaderContentMenuSearchBoxContainer>
            <IconButton src={'/assets/icons/search-icon.svg'} />
            <HeaderContentMenuSearchInput
              name={'q'}
              placeholder={'Search'}
            />
          </HeaderContentMenuSearchBoxContainer>

          {/*  Upload Video and Settings */}
          <HeaderContentMenuUploadVideoContainer>
            <IconButton src={'/assets/icons/upload-page-icon.svg'} />
            <IconButton src={'/assets/icons/user-setting-icon.svg'} />
          </HeaderContentMenuUploadVideoContainer>
        </HeaderContentMenuContainer>

        {/* Login & Register */}
        <HeaderContentLoginRegisterContainer>
          <HeaderContentLoginLoginLink to={'/auth/login'}>
            Login
          </HeaderContentLoginLoginLink>
          <HeaderContentRegisterLink to={'/auth/register'}>
            Register
          </HeaderContentRegisterLink>
        </HeaderContentLoginRegisterContainer>
      </HeaderContentContainer>
    </HeaderContainer>
  );
};

export default Header;
