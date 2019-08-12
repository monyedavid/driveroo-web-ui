import { STATE_LOGIN, STATE_SIGNUP } from 'components/auth/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import AuthModalPage from 'pages/auth/AuthModalPage';
import AuthPage from 'pages/auth/AuthPage';
// pages
import DashboardPage from 'pages/dashboard/DashboardPage';

import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './styles/reduction.scss';

// MOVIE PAGES ||
import CreateMovie from 'pages/movie/CreateMovie';
import ListMovies from 'pages/movie/ListMovies';
// SEND GIFTS <<
import GiftTicket from 'pages/gift/GiftTicket';
import GiftedTickets from 'pages/gift/GiftedTickets';
// ADD SHOW TIME ==> TICKET AVAILBLE
import AddShowTime from 'pages/movie-showtime/AddShowTime';
// REDEEM TICKETS || GIFTED
import RedeemTicket from 'pages/redeem/RedeemTicket';
import RedeemedTickets from 'pages/redeem/RedeemedTickets';
// MERCHANTS
import CreateMerchant from 'pages/merchant/CreateMerchant';
import ListMerchants from 'pages/merchant/ListMerchants';
import UpdateMerchants from 'pages/merchant/UpdateMerchant';

// TRANSACTIONS ACTIVITY
import DailyTransactions from 'pages/transaction/DailyTransactions';
import WeeklyTransactions from 'pages/transaction/WeeklyTransactions';
import MonthlyTransactions from 'pages/transaction/MonthlyTransactions';
import RangeTransactions from 'pages/transaction/RangeTransactions';
// VOUCHERS
import CreateVoucher from 'pages/vouchers/CreateVoucher';
import VoucherBalance from 'pages/vouchers/VoucherBalance';

// PRIVATE ROUTER
import PrivateRoute from 'components/common/PrivateRoute';
import {
  check_token_storage,
  expired_token_logout,
} from 'utils/auth/checkTokenStorage';

// REDUX
import { Provider } from 'react-redux';
import store from 'redux/store';

// Check for token and set user
check_token_storage();
expired_token_logout();

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
                path="/"
                layout={EmptyLayout}
                component={props => (
                  <AuthPage {...props} authState={STATE_LOGIN} />
                )}
              />
              <LayoutRoute
                exact
                path="/signup"
                layout={EmptyLayout}
                component={props => (
                  <AuthPage {...props} authState={STATE_SIGNUP} />
                )}
              />
              <LayoutRoute
                exact
                path="/login-modal"
                layout={MainLayout}
                component={AuthModalPage}
              />

              <LayoutRoute
                exact
                path="/dashboard"
                layout={MainLayout}
                component={DashboardPage}
              />
              <LayoutRoute
                exact
                path="/create-movie"
                layout={MainLayout}
                component={CreateMovie}
              />
              <LayoutRoute
                exact
                path="/add-showtime/:_id"
                layout={MainLayout}
                component={AddShowTime}
              />
              <LayoutRoute
                exact
                path="/list-movies"
                layout={MainLayout}
                component={ListMovies}
              />
              <LayoutRoute
                exact
                path="/redeem-ticket"
                layout={MainLayout}
                component={RedeemTicket}
              />
              <LayoutRoute
                exact
                path="/redeemed-tickets"
                layout={MainLayout}
                component={RedeemedTickets}
              />
              <LayoutRoute
                exact
                path="/gift-ticket"
                layout={MainLayout}
                component={GiftTicket}
              />
              <LayoutRoute
                exact
                path="/gifted-tickets"
                layout={MainLayout}
                component={GiftedTickets}
              />
              <LayoutRoute
                exact
                path="/create-merchant"
                layout={MainLayout}
                component={CreateMerchant}
              />
              <LayoutRoute
                exact
                path="/list-merchants"
                layout={MainLayout}
                component={ListMerchants}
              />
              <LayoutRoute
                exact
                path="/update-merchant/:_id"
                layout={MainLayout}
                component={UpdateMerchants}
              />
              <LayoutRoute
                exact
                path="/daily-transactions"
                layout={MainLayout}
                component={DailyTransactions}
              />
              <LayoutRoute
                exact
                path="/monthly-transactions"
                layout={MainLayout}
                component={MonthlyTransactions}
              />
              <LayoutRoute
                exact
                path="/weekly-transactions"
                layout={MainLayout}
                component={WeeklyTransactions}
              />
              <LayoutRoute
                exact
                path="/range-transactions"
                layout={MainLayout}
                component={RangeTransactions}
              />
              <LayoutRoute
                exact
                path="/create-voucher"
                layout={MainLayout}
                component={CreateVoucher}
              />
              <LayoutRoute
                exact
                path="/voucher-balance"
                layout={MainLayout}
                component={VoucherBalance}
              />
              <LayoutRoute
                exact
                path="/register"
                layout={MainLayout}
                component={AuthPage}
              />
              <Redirect to="/" />
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
