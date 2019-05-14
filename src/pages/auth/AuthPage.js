import React, { Component } from 'react';
import AuthForm, { STATE_LOGIN, STATE_SIGNUP } from 'components/auth/AuthForm';
import { Card, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';

class AuthPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirm: '',
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

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

const map_state_to_props = state => ({
  auth: state.auth,
  erors: state.errors,
});

export default connect(
  map_state_to_props,
  {},
)(AuthPage);
