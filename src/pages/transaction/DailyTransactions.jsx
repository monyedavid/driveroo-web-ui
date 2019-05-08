import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from 'components/Page';
import TransactionItem from '../../components/common/List/TransactionItem';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Table,
  Row,
} from 'reactstrap';
import { dateFormatter } from '../../utils/gendate';
// MODAL CREATE DYNAMIC MODALS
import Dialogue from '../../components/common/Modal/a.index';
import DialogueTitle from '../../components/common/Modal/Title';
import DialogueContent from '../../components/common/Modal/Content';
import DialogueAction from '../../components/common/Modal/Action';
// SPINNER IMAGES
import LoadSpinner from '../../components/common/spinner';
import spin from '../../utils/spin.gif';
// TRANSACTION DETAILS
import { TransactionDetail } from './TransactionDetails';

import {
  getDailyTransaction,
  setTransaction,
} from '../../redux/actions/transaction';

class DailyTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // min: dateFormatter().min,
      // max: dateFormatter().max,
      modal: false,
      min: '2019-03-16',
      max: '2019-03-16',
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    dateFormatter();
    const { min, max } = this.state;
    const { getDailyTransaction } = this.props;
    getDailyTransaction(min, max);
    // get weekly transactions for last one week
  }

  toggle(index) {
    const { transaction, setTransaction } = this.props;
    let data = transaction.daily;

    if (typeof index === 'number') {
      console.log('YAHH');
      setTransaction(data[index]);
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

  render() {
    const {
      transaction: { loading, daily, detail },
    } = this.props;
    let transactionItem;

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
    let transactionDialog;
    let dialogueAction;

    if (daily && !loading) {
      // populates data table loaidng a merchant??
      dialogueTitle = (
        <DialogueTitle
          simpleContext={
            detail === null || detail === undefined ? '' : detail.message
          }
        />
      );
      dialogueContent = (
        <DialogueContent
          contextComponent={
            detail === null ? (
              <LoadSpinner src={spin} />
            ) : (
              <TransactionDetail {...detail} />
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
      transactionDialog = (
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
    } else {
      transactionDialog = <React.Fragment />;
    }

    /**
     *  @component   TransactionItem
     *  @property    TYPE = [1 | 2 | 3]
     *  @type1       DAILY
     *  @type2       WEEKLY
     *  @type3       MONTHLY
     */

    loading === true && daily == null
      ? (transactionItem = <React.Fragment />)
      : loading === false && daily == null
      ? (transactionItem = <React.Fragment />)
      : daily.length > 0
      ? (transactionItem = daily.map((details, i) => (
          <TransactionItem
            key={details._id}
            toggle={this.toggle}
            index={i}
            type={2}
            transactionDetails={details}
          />
        )))
      : (transactionItem = <h4>No Movie Tickets Where Found!</h4>);

    return (
      <React.Fragment>
        {transactionDialog}
        <Page
          title="Daily Transactions"
          breadcrumbs={[{ name: 'Daily Transactions', active: true }]}
        >
          <Row>
            <Col xl={12} lg={12} md={12}>
              <Card>
                <CardHeader>
                  Daily Transactions from {this.state.min} - {this.state.max}
                </CardHeader>
                <CardBody>
                  <Col>
                    <Card body>
                      <Table striped={true} id="weeklytranstable">
                        <thead>
                          <tr>
                            <th>Trans ID</th>
                            <th>UID</th>
                            <th>Amount</th>
                            <th>Platform.</th>
                            <th>Event Name</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Details</th>
                          </tr>
                        </thead>

                        {transactionItem}
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
  transaction: state.transactions,
});

export default connect(
  map_state_to_props,
  { getDailyTransaction, setTransaction },
)(withRouter(DailyTransactions));
