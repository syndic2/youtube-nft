import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header/Header";
import Sidebar from '../../components/sidebar/Sidebar';
import {
  MainLayoutContainer,
  MainLayoutContentContainer,
  MainLayoutOutlet
} from './MainLayout.styles';

const MainLayout: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  return (
    <MainLayoutContainer>
      <Header setIsOpenSidebar={setIsOpenSidebar} />
      <MainLayoutContentContainer>
        <Sidebar isOpen={isOpenSidebar} />
        <MainLayoutOutlet>
          <Outlet />
        </MainLayoutOutlet>
      </MainLayoutContentContainer>
    </MainLayoutContainer>
  );
};

export default MainLayout;
