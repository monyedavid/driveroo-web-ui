import * as React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from 'utils/constants';
import { MdAnnouncement } from 'react-icons/md';
import logo200Image from 'assets/img/driveroo/03.png';
import PropTypes from 'prop-types';
import isEmpty from 'validaton/is-empty';

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
    loginUser,
    errors,
    clearErrors,
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
  let ns;
  const isLogin = () => {
    return page === 'login';
  };

  const isSignup = () => {
    return page === 'signup';
  };

  React.useEffect(() => {
    if (!isEmpty(errors))
      errors.forEach(err => {
        ns.addNotification({
          title: <MdAnnouncement />,
          message: err.message,
          level: 'error',
        });
      });
  }, [errors, ns]);

  const handleSubmit = event => {
    event.preventDefault();
    if (page === 'login') {
      clearErrors();
      loginUser({ username, password });
    }

    if (page === 'signup') {
      if (password !== confirm)
        ns.addNotification({
          title: <MdAnnouncement />,
          message: 'PASSWORD MISMATCH PLEASE TRY AGAIN',
          level: 'error',
        });

      if (password === confirm) {
        registerUser({ firstName, lastName, password, registerationId });
      }
    }
  };

  const renderButtonText = () => {
    if (page === 'login') return 'Login';

    if (page === 'signup') return 'SignUp';
  };

  const disableButton = () => {
    if (isLogin) {
      if (username === '' || password === '') return true;
      return false;
    }

    if (isSignup) {
      if (firstName === '' || lastName === '' || password === '') return true;
      return false;
    }

    return false;
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
        disabled={disableButton()}
        className="bg-gradient-theme-left border-0"
        block
        onClick={handleSubmit}
      >
        {renderButtonText()}
      </Button>
      {children}

      <NotificationSystem
        dismissible={false}
        ref={notificationSystem => (ns = notificationSystem)}
        style={NOTIFICATION_SYSTEM_STYLE}
      />
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
  usernameLabel: 'Email or Phone Number',
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com or +X 000',
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
