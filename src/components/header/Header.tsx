import React, { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';

import Icon from '../../utils/components/icon/Icon';
import SvgIcon from '../../utils/components/svg-icon/SvgIcon';
import IconButton from '../../utils/components/icon-button/IconButton';
import { Popper, PopperContent } from '../../utils/components/popper';
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
  HeaderUploadVideoPopperItemContainer,
  HeaderUploadVideoPopperItemContentContainer,
  HeaderUploadVideoPopperItemContentLabel,
  HeaderContentLoginRegisterContainer,
  HeaderContentLoginLoginLink,
  HeaderContentRegisterLink
} from "./styles/Header.styled";

interface HeaderProps {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { setIsOpenSidebar } = props;
  const navigate = useNavigate();

  const [isOpenPopperVideoUpload, setIsOpenPopperVideoUpload] = useState<boolean>(false);

  const onSidebarClick = useCallback(() => {
    setIsOpenSidebar(prevState => !prevState);
  }, [setIsOpenSidebar]);

  const onMenuUploadVideoClick = useCallback(() => {
    setIsOpenPopperVideoUpload(prevState => !prevState);
  }, []);

  const onPopperContentUploadVideoClick = useCallback((url: string) => {
    setIsOpenPopperVideoUpload(false);
    navigate(url);
  }, [navigate]);

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
            NFTube
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
            {/* Popper */}
            <Popper>
              <IconButton
                src={'/assets/icons/upload-page-icon.svg'}
                onClick={onMenuUploadVideoClick}
              />
              <PopperContent isOpen={isOpenPopperVideoUpload}>
                <HeaderUploadVideoPopperItemContainer>
                  {/* Upload Video */}
                  <HeaderUploadVideoPopperItemContentContainer
                    onClick={() => onPopperContentUploadVideoClick('/upload-video')}
                  >
                    <SvgIcon
                      name={'video-icon'}
                      fill={'#5303EE'}
                      width={20}
                    />
                    <HeaderUploadVideoPopperItemContentLabel>
                      Upload Video
                    </HeaderUploadVideoPopperItemContentLabel>
                  </HeaderUploadVideoPopperItemContentContainer>

                  {/* Upload NFT */}
                  <HeaderUploadVideoPopperItemContentContainer
                    onClick={() => onPopperContentUploadVideoClick('/upload-nft')}
                  >
                    <div style={{
                      backgroundColor: 'red',
                      borderRadius: '4px'
                    }}>
                      <Icon
                        src={'/assets/images/nft-logo.png'}
                        width={20}
                      />
                    </div>
                    <HeaderUploadVideoPopperItemContentLabel>
                      Upload NFT
                    </HeaderUploadVideoPopperItemContentLabel>
                  </HeaderUploadVideoPopperItemContentContainer>
                </HeaderUploadVideoPopperItemContainer>
              </PopperContent>
            </Popper>
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
