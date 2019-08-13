import React, { Component } from 'react';
import AuthForm from 'components/auth/AuthForm';
import { registerUser, loginUser } from '../../redux/actions/auth';
import { Card, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';

class AuthPage extends Component {
  constructor() {
    super();
    this.state = {
      page: 'login',
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    if (this.props.match.params.id) this.setState({ page: 'signup' });
    if (!this.props.match.params.id) {
      console.log('time difference');
      this.setState({ page: 'login' });
    }
  }

  handleAuthState = authState => {
    console.log('this is auth state', authState);
  };

  handleLogoClick = () => {
    console.log('clicking logo');
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
              page={this.state.page}
              registerationId={this.props.match.params.id}
              authState={this.props.authState}
              registerUser={this.props.registerUser}
              loginUser={this.props.loginUser}
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
  { registerUser, loginUser },
)(AuthPage);
