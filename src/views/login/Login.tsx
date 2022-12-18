import React, { useCallback } from "react";
import { useNavigate } from 'react-router-dom';

import {
  AuthFormContainer,
  AuthFormTitleLabel,
  AuthFormBodyContainer,
  AuthFormBodyFieldContainer,
  AuthFormBodyFieldLabel,
  AuthFormBodyInputField,
  AuthFormFooterContainer,
  AuthFormFooterButton,
  AuthFormFooterForgotPasswordLink
} from '../../utils/styles/AuthForm.styles';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onLoginClick = useCallback(() => {
    navigate('/nft-mode');
  }, [navigate]);

  return (
    <AuthFormContainer>
      {/* Header */}
      <AuthFormTitleLabel>Welcome back!</AuthFormTitleLabel>

      {/* Body */}
      <AuthFormBodyContainer>
        {/* Email */}
        <AuthFormBodyFieldContainer>
          <AuthFormBodyFieldLabel>Email</AuthFormBodyFieldLabel>
          <AuthFormBodyInputField
            name={'email'}
            placeholder={'Enter your email address'}
          />
        </AuthFormBodyFieldContainer>

        {/* Password */}
        <AuthFormBodyFieldContainer>
          <AuthFormBodyFieldLabel>Password</AuthFormBodyFieldLabel>
          <AuthFormBodyInputField
            name={'password'}
            placeholder={'Enter your email password'}
          />
        </AuthFormBodyFieldContainer>
      </AuthFormBodyContainer>

      {/* Footer */}
      <AuthFormFooterContainer>
        <AuthFormFooterButton onClick={onLoginClick}>
          Sign In
        </AuthFormFooterButton>
        <AuthFormFooterForgotPasswordLink href={'#'}>
          Forgot your password?
        </AuthFormFooterForgotPasswordLink>
      </AuthFormFooterContainer>
    </AuthFormContainer>
  );
};

export default Login;
