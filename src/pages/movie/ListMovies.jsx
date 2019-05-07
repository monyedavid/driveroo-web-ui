import Page from 'components/Page';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Table, Row } from 'reactstrap';
import TicketItem from '../../components/common/List/MovieItem';
// import Spinner from '../../components/common/spinner';
// import spinner_image from '../../utils/spin.gif';
import { getMoviesTickets } from '../../redux/actions/movies';

class ListMovies extends Component {
  componentDidMount() {
    const { getMoviesTickets } = this.props;
    getMoviesTickets();
  }

  render() {
    const {
      mt: { loading, movieTickets },
    } = this.props;

    let list_movieTicket_items;

    loading === true && movieTickets == null
      ? (list_movieTicket_items = <React.Fragment />)
      : loading === false && movieTickets == null
      ? (list_movieTicket_items = <React.Fragment />)
      : movieTickets.AllTickets.length > 0
      ? (list_movieTicket_items = movieTickets.AllTickets.map(mt => (
          <TicketItem key={mt._id} ticketDetails={mt} />
        )))
      : (list_movieTicket_items = <h4>No Movie Tickets Where Found!</h4>);

    return (
      <Page
        title="List Movies"
        breadcrumbs={[{ name: 'List Movies', active: true }]}
      >
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
  mt: state.movieTickets,
});

export default connect(
  map_state_to_props,
  { getMoviesTickets },
)(withRouter(ListMovies));
