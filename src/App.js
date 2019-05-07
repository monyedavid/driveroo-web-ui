import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import AlertPage from 'pages/AlertPage';
import AuthModalPage from 'pages/AuthModalPage';
import AuthPage from 'pages/AuthPage';
import BadgePage from 'pages/BadgePage';
import ButtonGroupPage from 'pages/ButtonGroupPage';
import ButtonPage from 'pages/ButtonPage';
import CardPage from 'pages/CardPage';
import ChartPage from 'pages/ChartPage';
// pages
import DashboardPage from 'pages/DashboardPage';
import DropdownPage from 'pages/DropdownPage';
import FormPage from 'pages/FormPage';
import InputGroupPage from 'pages/InputGroupPage';
import ModalPage from 'pages/ModalPage';
import ProgressPage from 'pages/ProgressPage';
import TablePage from 'pages/TablePage';
import TypographyPage from 'pages/TypographyPage';
import WidgetPage from 'pages/WidgetPage';

import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './styles/reduction.scss';
// CINEMA LINKING //
import CinemaLinking from 'pages/CinemaLinking';
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
import MerchantDetails from 'pages/merchant/MerchantDetails';
// TRANSACTIONS ACTIVITY
import DailyTransactions from 'pages/transaction/DailyTransactions';
import WeeklyTransactions from 'pages/transaction/WeeklyTransactions';
import MonthlyTransactions from 'pages/transaction/MonthlyTransactions';
import RangeTransactions from 'pages/transaction/RangeTransactions';
// ???????
import HomeBanner from 'pages/HomeBanner';
// PRIVATE ROUTER
import PrivateRoute from 'components/common/PrivateRoute';

// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';

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
                path="/cinema-linking"
                layout={MainLayout}
                component={CinemaLinking}
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
                path="/details/:id"
                layout={MainLayout}
                component={MerchantDetails}
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
                path="/home-banner"
                layout={MainLayout}
                component={HomeBanner}
              />
              <LayoutRoute
                exact
                path="/progress"
                layout={MainLayout}
                component={ProgressPage}
              />
              <LayoutRoute
                exact
                path="/modals"
                layout={MainLayout}
                component={ModalPage}
              />
              <LayoutRoute
                exact
                path="/forms"
                layout={MainLayout}
                component={FormPage}
              />
              <LayoutRoute
                exact
                path="/input-groups"
                layout={MainLayout}
                component={InputGroupPage}
              />
              <LayoutRoute
                exact
                path="/charts"
                layout={MainLayout}
                component={ChartPage}
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
