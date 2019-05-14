import AuthForm, { STATE_LOGIN, STATE_SIGNUP } from 'components/auth/AuthForm';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';

class AuthPage extends React.Component {
  handleAuthState = authState => {
    console.log('this is auth state', authState);
    if (authState) {
      if (authState === STATE_LOGIN) {
        this.props.history.push('/');
      }

      if (authState === STATE_SIGNUP) {
        this.props.history.push('/signup');
      }
    }

    if (!authState) {
      if (this.props.location.pathname == '/signup') {
        console.log('DONIG SIGNINUP STUFFS');
      }

      if (this.props.location.pathname == '/') {
        console.log('DOING LOGIN STUFFS');
      }
    }
  };

  handleLogoClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Col md={6} lg={4}>
          <Card body>
            <AuthForm
              authState={this.props.authState}
              onChangeAuthState={this.handleAuthState}
              onLogoClick={this.handleLogoClick}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default AuthPage;
