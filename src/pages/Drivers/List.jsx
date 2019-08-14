import Page from 'components/Page';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Table, Row } from 'reactstrap';
import TicketItem from '../../components/common/List/MovieItem';
// import Spinner from '../../components/common/spinner';
// import spinner_image from '../../utils/spin.gif';
import { getMoviesTickets } from '../../redux/actions/movies';

class ListMovies extends Component {
  componentDidMount() {}

  render() {
    const {
      driver: { loading, driver },
    } = this.props;

    let list_movieTicket_items;

    loading === true && driver == null
      ? (list_movieTicket_items = <React.Fragment />)
      : loading === false && driver == null
      ? (list_movieTicket_items = <React.Fragment />)
      : driver.AllTickets.length > 0
      ? (list_movieTicket_items = driver.AllTickets.map(driver => (
          <TicketItem
            key={driver._id}
            ticketDetails={driver}
            history={this.props.history}
          />
        )))
      : (list_movieTicket_items = <h4>No Movie Tickets Where Found!</h4>);

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
                          <th>Movie Title</th>
                          <th>AVAILABLE</th>
                          <th>PURCHASE COUNT</th>
                          <th>FILMHOUSE ID</th>
                          <th>DURATION</th>
                          <th>GENRE</th>
                          <th>Showtime</th>
                        </tr>
                      </thead>

                      {/* DYNAMIC BODY */}
                      {list_movieTicket_items}
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
  driver: state.driver,
});

export default connect(
  map_state_to_props,
  { getMoviesTickets },
)(withRouter(ListMovies));
