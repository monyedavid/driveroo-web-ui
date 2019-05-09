import Page from 'components/Page';
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Table, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import GiftedItem from '../../components/common/List/GiftItem';
import { GiftDetail } from './GiftDetails';
// MODAL CREATE DYNAMIC MODALS
import Dialogue from '../../components/common/Modal/a.index';
import DialogueTitle from '../../components/common/Modal/Title';
import DialogueContent from '../../components/common/Modal/Content';
import DialogueAction from '../../components/common/Modal/Action';
// SPINNER IMAGES
import LoadSpinner from '../../components/common/spinner';
import spin from '../../utils/spin2.gif';
import { getGifts, setGift } from '../../redux/actions/gift';

class GiftedTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.close = this.close.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle(index) {
    const {
      gifts: { gifts },
      setGift,
    } = this.props;
    let data = gifts;

    if (typeof index === 'number') {
      setGift(data[index]);
    }
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  close() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }
  componentDidMount() {
    const { getGifts } = this.props;
    getGifts();
  }

  render() {
    const {
      gifts: { loading, gifts, detail },
    } = this.props;
    let listGiftItems;

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
    let dialogueAction;
    let GiftDialog;

    if (gifts && !loading) {
      // populates data table loaidng a merchant??
      dialogueTitle = (
        <DialogueTitle
          simpleContext={
            detail === null || detail === undefined ? '' : detail.winners_name
          }
        />
      );
      dialogueContent = (
        <DialogueContent
          contextComponent={
            detail === null ? (
              <LoadSpinner src={spin} />
            ) : (
              <GiftDetail {...detail} />
            )
          }
        />
      );
      dialogueAction = (
        <DialogueAction
          contextComponent={
            <Button color="secondary" onClick={this.close}>
              Cancel
            </Button>
          }
        />
      );
      GiftDialog = (
        <Dialogue
          DialogTitle={dialogueTitle}
          DialogContent={dialogueContent}
          // DialogActions={dialogueAction}
          isOpen={this.state.modal}
          toggle={this.toggle}
          // className={}
          externalCloseBtn={externalCloseBtn}
        />
      );
    } else {
      GiftDialog = <React.Fragment />;
    }

    loading === true && gifts == null
      ? (listGiftItems = <React.Fragment />)
      : loading === false && gifts == null
      ? (listGiftItems = <React.Fragment />)
      : gifts.length > 0
      ? (listGiftItems = gifts.map((gift, i) => (
          <GiftedItem
            key={gift._id}
            toggle={this.toggle}
            index={i}
            giftDetails={gift}
          />
        )))
      : (listGiftItems = <h4>No Movie Tickets Where Found!</h4>);

    return (
      <React.Fragment>
        {GiftDialog}
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
      </React.Fragment>
    );
  }
}

const map_state_to_props = state => ({
  gifts: state.gift,
});

export default connect(
  map_state_to_props,
  { getGifts, setGift },
)(GiftedTickets);
