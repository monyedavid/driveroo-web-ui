import Page from 'components/Page';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Table, Row } from 'reactstrap';
import MerchantItem from '../../components/common/List/MerchantItem';
import DemoModal from '../../components/common/Modal/index';
import { getMerchants } from '../../redux/actions/merchant';

class ListMerchants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    const { getMerchants } = this.props;
    getMerchants();
  }

  toggle() {
    console.log('YO TEST');
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    const {
      merch: { loading, merchants },
    } = this.props;
    let listMerchantItems;

    loading === true && merchants == null
      ? (listMerchantItems = <React.Fragment />)
      : loading === false && merchants == null
      ? (listMerchantItems = <React.Fragment />)
      : merchants.length > 0
      ? (listMerchantItems = merchants.map((merch, i) => (
          <MerchantItem
            key={merch._id}
            toggle={this.toggle}
            history={this.props.history}
            index={i}
            ticketDetails={merch}
          />
        )))
      : (listMerchantItems = <h4>No Movie Tickets Where Found!</h4>);

    return (
      <React.Fragment>
        <DemoModal modal={this.state.modal} toggle={this.toggle} />
        <Page
          title="List Merchants"
          breadcrumbs={[{ name: 'List Merchants', active: true }]}
        >
          <Row>
            <Col xl={12} lg={12} md={12}>
              <Card>
                <CardHeader>List Of All Merchants</CardHeader>
                <CardBody>
                  <Col>
                    <Card body>
                      <Table striped={true} id="listmerchantstable">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Details</th>
                            <th>Edit</th>
                          </tr>
                        </thead>
                        {listMerchantItems}
                      </Table>
                    </Card>
                  </Col>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Page>
      </React.Fragment>
    );
  }
}

const map_state_to_props = state => ({
  merch: state.merchant,
});

export default connect(
  map_state_to_props,
  { getMerchants },
)(withRouter(ListMerchants));
