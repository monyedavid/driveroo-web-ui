import Page from 'components/Page';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Table, Row } from 'reactstrap';
import MerchantItem from '../../components/common/List/MerchantItem';
// MODAL CREATE DYNAMIC MODALS
import Dialogue from '../../components/common/Modal/a.index';
import DialogueTitle from '../../components/common/Modal/Title';
import DialogueContent from '../../components/common/Modal/Content';
import DialogueAction from '../../components/common/Modal/Action';
import { MerchantDetails } from './MerchantDetails';
import LoadSpinner from '../../components/common/spinner';
import spin from '../../utils/spin.gif';

import { getMerchants, getMerchant } from '../../redux/actions/merchant';
import { Button } from 'reactstrap';

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

  toggle(_id) {
    this.props.getMerchant(_id);
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  close() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    const {
      merch: { loading, merchants, merchant },
    } = this.props;
    let listMerchantItems;

    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: 'absolute', top: '15px', right: '15px' }}
        onClick={this.close}
      >
        &times;
      </button>
    );

    let dialogueTitle;
    let dialogueContent;
    let merchantDialog;
    let dialogueAction;

    // populates data table loaidng a merchant??

    if (!loading && merchant !== null && merchants !== null) {
    }

    dialogueTitle = (
      <DialogueTitle simpleContext={merchant === null ? '' : merchant.name} />
    );

    dialogueContent = (
      <DialogueContent
        contextComponent={
          merchant === null ? (
            <LoadSpinner src={spin} />
          ) : (
            <MerchantDetails {...merchant} />
          )
        }
      />
    );

    dialogueAction = (
      <DialogueAction
        contextComponent={
          <Button color="secondary" onClick={this.toggle}>
            Cancel
          </Button>
        }
      />
    );

    merchantDialog = (
      <Dialogue
        DialogTitle={dialogueTitle}
        DialogContent={dialogueContent}
        DialogActions={dialogueAction}
        isOpen={this.state.modal}
        toggle={this.toggle}
        // className={}
        externalCloseBtn={externalCloseBtn}
      />
    );

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
        {merchantDialog}
        {/* <DemoModal modal={this.state.modal} toggle={this.toggle} /> */}
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
  { getMerchants, getMerchant },
)(withRouter(ListMerchants));
