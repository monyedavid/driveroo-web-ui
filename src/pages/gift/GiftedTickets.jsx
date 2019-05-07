import Page from 'components/Page';
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Table, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GiftedItem from '../../components/common/List/GiftItem';
import { getGifts } from '../../redux/actions/gift';

class GiftedTickets extends Component {
  componentDidMount() {
    const { getGifts } = this.props;
    getGifts();
  }

  render() {
    const {
      gifts: { loading, gifts },
    } = this.props;
    let listGiftItems;

    loading === true && gifts == null
      ? (listGiftItems = <React.Fragment />)
      : loading === false && gifts == null
      ? (listGiftItems = <React.Fragment />)
      : gifts.length > 0
      ? (listGiftItems = gifts.map((gift, i) => (
          <GiftedItem key={gift._id} index={i} giftDetails={gift} />
        )))
      : (listGiftItems = <h4>No Movie Tickets Where Found!</h4>);

    return (
      <Page
        title="Gifted Tickets"
        breadcrumbs={[{ name: 'Gifted Tickets', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>Gifted Tickets</CardHeader>
              <CardBody>
                <Col>
                  <Card body>
                    <Table striped={true} id="giftedticketstable">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Winner's Name</th>
                          <th>Winner's Email</th>
                          <th>Movie Title</th>
                          <th>Date/Time</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      {listGiftItems}
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
  gifts: state.gift,
});

export default connect(
  map_state_to_props,
  { getGifts },
)(GiftedTickets);
