import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  AuthLayoutContainer,
  AuthLayoutContentContainer,
  AuthLayoutContentWrapperImage
} from './styles/AuthLayout.styled';

const AuthLayout: React.FC = () => {
  return (
    <AuthLayoutContainer>
      <AuthLayoutContentContainer>
        <AuthLayoutContentWrapperImage src={'/assets/images/blue-box-left.png'} />
        <Outlet />
        <AuthLayoutContentWrapperImage src={'/assets/images/blue-box-right.png'} />
      </AuthLayoutContentContainer>
    </AuthLayoutContainer>
  );
};

export default AuthLayout;
