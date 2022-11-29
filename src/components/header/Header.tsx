import React, { useCallback } from "react";
import { useNavigate } from 'react-router-dom';

import IconButton from '../../utils/components/icon-button/IconButton';
import {
  HeaderContainer,
  HeaderSideMenuIconButton,
  HeaderSideMenuIcon,
  HeaderContentContainer,
  HeaderContentTitleContainer,
  HeaderContentTitleLogo,
  HeaderContentTitleLabel,
  HeaderContentMenuContainer,
  HeaderContentMenuSearchBoxContainer,
  HeaderContentMenuSearchInput,
  HeaderContentMenuUploadVideoContainer,
  HeaderContentLoginRegisterContainer,
  HeaderContentLoginLoginLink,
  HeaderContentRegisterButton
} from "./Header.styles";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const onRegisterClick = useCallback(() => {
    navigate('/auth/register');
  }, []);

  return (
    <HeaderContainer>
      {/* Side Menu Button */}
      <HeaderSideMenuIconButton>
        <HeaderSideMenuIcon src={'/assets/icons/hamburger-button.svg'} />
      </HeaderSideMenuIconButton>

      {/* Header Content */}
      <HeaderContentContainer>
        {/* Title */}
        <HeaderContentTitleContainer>
          <HeaderContentTitleLogo src={'/assets/images/logo.png'} />
          <HeaderContentTitleLabel href={'/nft-mode'}>
            taesun nft
          </HeaderContentTitleLabel>
        </HeaderContentTitleContainer>

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
          <HeaderContentLoginLoginLink href={'/auth/login'}>
            Login
          </HeaderContentLoginLoginLink>
          <HeaderContentRegisterButton onClick={onRegisterClick}>
            Register
          </HeaderContentRegisterButton>
        </HeaderContentLoginRegisterContainer>
      </HeaderContentContainer>
    </HeaderContainer>
  );
};

export default Header;
