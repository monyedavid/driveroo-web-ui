import Page from 'components/Page';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Table, Row } from 'reactstrap';
import DriverItem from '../../components/common/List/DriverItem';
import { allDrivers } from '../../redux/actions/drivers';

class ListMovies extends Component {
  componentDidMount() {
    const { auth, allDrivers } = this.props;
    //if (auth.isAuthenticated) allDrivers(auth.user.token);
    allDrivers(auth.user.token);
  }

  render() {
    const {
      driver: { loading, driver },
    } = this.props;

    let list_driver_items;

    loading === true && driver == null
      ? (list_driver_items = <React.Fragment />)
      : loading === false && driver == null
      ? (list_driver_items = <React.Fragment />)
      : driver.AllTickets.length > 0
      ? (list_driver_items = driver.AllTickets.map(driver => (
          <DriverItem
            key={driver._id}
            ticketDetails={driver}
            history={this.props.history}
          />
        )))
      : (list_driver_items = <h4>No Movie Tickets Where Found!</h4>);

    return (
      <Page title="Drivers" breadcrumbs={[{ name: 'Drivers', active: true }]}>
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>List all movies</CardHeader>
              <CardBody>
                <Col>
                  <Card body>
                    <Table
                      striped={true}
                      id="listmoviestable"
                      // ref={el => {
                      //   this.theTable = el;
                      // }}
                    >
                      {/* HEAD */}
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Avatar</th>
                          <th>Full name</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>Driver Rating</th>
                          <th>Last Seen</th>
                          <th>Home Addreses</th>
                        </tr>
                      </thead>

                      {/* DYNAMIC BODY */}
                      {list_driver_items}
                      {/* TRACK */}
                    </Table>
                  </Card>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

const map_state_to_props = state => ({
  auth: state.auth,
  driver: state.driver,
  loading: state.loading,
});

export default connect(
  map_state_to_props,
  { allDrivers },
)(withRouter(ListMovies));
