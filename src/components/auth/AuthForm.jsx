import * as React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import logo200Image from 'assets/img/driveroo/03.png';
import PropTypes from 'prop-types';

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
    firstNameLabel,
    lastNameLabel,
    registerUser,
    // loginUser,
    // davids special
    registerationId,
    page,
  } = props;

  // LOGIN STATE
  const [username, setusername] = React.useState('');
  const [password, setpassword] = React.useState('');

  const [confirm, setconfirm] = React.useState('');
  const [firstName, setfirstName] = React.useState('');
  const [lastName, setlastName] = React.useState('');

  const isLogin = () => {
    return page === 'login';
  };

  const isSignup = () => {
    return page === 'signup';
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (page === 'login') {
      console.log('Doing login avctivty', username, password);
    }

    if (page === 'signup') {
      console.log(
        'Doing signup avctivty',
        firstName,
        lastName,
        password,
        confirm,
      );
      // decode address

      if (password === confirm) {
        registerUser({ firstName, lastName, password, registerationId });
      }
    }
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
      {isSignup() && (
        <FormGroup>
          <Label for={firstNameLabel}>{firstNameLabel}</Label>
          <Input
            name={'firstname'}
            onChange={e => {
              setfirstName(e.target.value);
            }}
          />
        </FormGroup>
      )}
      {isSignup() && (
        <FormGroup>
          <Label for={lastNameLabel}>{lastNameLabel}</Label>
          <Input
            name={'lastname'}
            onChange={e => {
              setlastName(e.target.value);
            }}
          />
        </FormGroup>
      )}

      {isLogin() && (
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input
            name={'username'}
            onChange={e => {
              setusername(e.target.value);
            }}
            {...usernameInputProps}
          />
        </FormGroup>
      )}

      <FormGroup>
        <Label for={passwordLabel}>{passwordLabel}</Label>
        <Input
          name={'password'}
          onChange={e => {
            setpassword(e.target.value);
          }}
          {...passwordInputProps}
        />
      </FormGroup>
      {isSignup() && (
        <FormGroup>
          <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
          <Input
            name={'confirmpassword'}
            onChange={e => {
              setconfirm(e.target.value);
            }}
            {...confirmPasswordInputProps}
          />
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
  firstName: PropTypes.string,
  lastName: PropTypes.string,
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
  firstNameLabel: 'First Name',
  lastNameLabel: 'Last Name',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    placeholder: 'confirm your password',
  },
  onLogoClick: () => {},
};

export default AuthForm;
