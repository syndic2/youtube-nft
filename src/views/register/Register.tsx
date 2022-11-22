import React from 'react';

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

const Register: React.FC = () => {
  return (
    <AuthFormContainer>
      {/* Header */}
      <AuthFormTitleLabel>Heyo, welcome to the club</AuthFormTitleLabel>

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

        {/* Confirm Password */}
        <AuthFormBodyFieldContainer>
          <AuthFormBodyFieldLabel>Confirm Password</AuthFormBodyFieldLabel>
          <AuthFormBodyInputField
            name={'confirm_password'}
            placeholder={'Enter confirm password'}
          />
        </AuthFormBodyFieldContainer>
      </AuthFormBodyContainer>

      {/* Footer */}
      <AuthFormFooterContainer>
        <AuthFormFooterButton>
          Sign Up
        </AuthFormFooterButton>
        <AuthFormFooterForgotPasswordLink href={'#'}>
          Forgot your password?
        </AuthFormFooterForgotPasswordLink>
      </AuthFormFooterContainer>
    </AuthFormContainer>
  );
}

export default Register;
