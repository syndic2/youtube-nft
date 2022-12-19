import React, { useCallback } from "react";
import { useNavigate } from 'react-router-dom';

import Button from '../../utils/components/button/Button';
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
} from '../../utils/styled-components/AuthForm.styled.component';

import { LoginFooterContentContainer } from './styles/Login.styled.component';
import {
  LoginButtonSignUpContainerStyles,
  LoginButtonLabelSignUpStyles
} from './styles/Login.style';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onLoginClick = useCallback(() => {
    navigate('/nft-mode');
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate('/auth/register');
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
        <LoginFooterContentContainer>
          <Button
            text={'Sign Up'}
            containerStyles={LoginButtonSignUpContainerStyles}
            labelStyles={LoginButtonLabelSignUpStyles}
            onClick={onSignUpClick}
          />
          <AuthFormFooterForgotPasswordLink href={'#'}>
            Forgot your password?
          </AuthFormFooterForgotPasswordLink>
        </LoginFooterContentContainer>
      </AuthFormFooterContainer>
    </AuthFormContainer>
  );
};

export default Login;
