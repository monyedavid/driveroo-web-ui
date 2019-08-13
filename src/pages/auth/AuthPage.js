import React, { Component } from 'react';
import AuthForm from 'components/auth/AuthForm';
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
  }

  handleAuthState = authState => {
    console.log('this is auth state', authState);
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
              page={this.state.page}
              registerationId={this.props.match.params.id}
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
