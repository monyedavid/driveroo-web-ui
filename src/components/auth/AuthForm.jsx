import logo200Image from 'assets/img/driveroo/03.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function AuthForm(props) {
  const {
    showLogo,
    usernameLabel,
    usernameInputProps,
    passwordLabel,
    passwordInputProps,
    confirmPasswordLabel,
    confirmPasswordInputProps,
    children,
    onLogoClick,
    // davids special
    registerationId,
    page,
  } = props;

  const isLogin = () => {
    return page === 'login';
  };

  const isSignup = () => {
    return page === 'signup';
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (page === 'login') console.log('Doing login avctivty');

    if (page === 'signup') console.log('Doing signup avctivty');
  };

  const renderButtonText = () => {
    if (page === 'login') return 'Login';

    if (page === 'signup') return 'SignUp';
  };

  return (
    <Form onSubmit={handleSubmit}>
      {showLogo && (
        <div className="text-center pb-4">
          <img
            src={logo200Image}
            className="rounded"
            style={{ width: 60, height: 60, cursor: 'pointer' }}
            alt="logo"
            onClick={onLogoClick}
          />
        </div>
      )}
      <FormGroup>
        <Label for={usernameLabel}>{usernameLabel}</Label>
        <Input {...usernameInputProps} />
      </FormGroup>
      <FormGroup>
        <Label for={passwordLabel}>{passwordLabel}</Label>
        <Input {...passwordInputProps} />
      </FormGroup>
      {isSignup() && (
        <FormGroup>
          <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
          <Input {...confirmPasswordInputProps} />
        </FormGroup>
      )}
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          {isSignup() ? 'Agree the terms and policy' : 'Remember me'}
        </Label>
      </FormGroup>
      <hr />
      <Button
        size="lg"
        className="bg-gradient-theme-left border-0"
        block
        onClick={handleSubmit}
      >
        {renderButtonText()}
      </Button>
      {children}
    </Form>
  );
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameLabel: 'Email',
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password',
  },
  onLogoClick: () => {},
};

export default AuthForm;
