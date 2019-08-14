import { STATE_LOGIN } from 'components/auth/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import AuthPage from 'pages/auth/AuthPage';
// pages
import DashboardPage from 'pages/dashboard/DashboardPage';

import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import ListMovies from 'pages/Drivers/List';

// import PrivateRoute from 'components/common/PrivateRoute';
// import { checksessionSetUser } from 'utils/auth/checkSession';

// REDUX
import { Provider } from 'react-redux';
import store from 'redux/store';

// Check for token and set user
// checksessionSetUser();

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

/**
 *  @description  PRIVAVTErOUTER FOR AUTHORIZED VIEW
 *  @use          <PrivateRoute exact path="/dashboard" component={DashBoard} />
 */

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={getBasename()}>
          <GAListener>
            <Switch>
              <LayoutRoute
                exact
                path="/auth/:id?"
                layout={EmptyLayout}
                component={props => (
                  <AuthPage {...props} authState={STATE_LOGIN} />
                )}
              />

              <LayoutRoute
                exact
                path="/dashboard"
                layout={MainLayout}
                component={DashboardPage}
              />
              <LayoutRoute
                exact
                path="/list-movies"
                layout={MainLayout}
                component={ListMovies}
              />

              <Redirect to="/auth" />
            </Switch>
          </GAListener>
        </BrowserRouter>
      </Provider>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
