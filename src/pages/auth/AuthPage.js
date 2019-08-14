import React, { Component } from 'react';
import AuthForm from 'components/auth/AuthForm';
import { regUser, loginUser, me } from '../../redux/actions/auth';
import { clearErrors } from 'redux/actions/shared';
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
    const {
      match,
      errors,
      regUser,
      loginUser,
      authState,
      clearErrors,
      history,
      me,
    } = this.props;

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
              registerationId={match.params.id}
              authState={authState}
              errors={errors}
              me={me}
              registerUser={regUser}
              loginUser={loginUser}
              clearErrors={clearErrors}
              onChangeAuthState={this.handleAuthState}
              onLogoClick={this.handleLogoClick}
              history={history}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

const map_state_to_props = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  map_state_to_props,
  { regUser, loginUser, clearErrors, me },
)(AuthPage);
