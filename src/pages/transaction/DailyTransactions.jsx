import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from 'components/Page';
import TransactionItem from '../../components/common/List/TransactionItem';
import { Link, withRouter } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Table, Row } from 'reactstrap';
import { dateFormatter } from '../../utils/gendate';
import { getDailyTransaction } from '../../redux/actions/transaction';

class DailyTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // min: dateFormatter().min,
      // max: dateFormatter().max,
      min: '2019-03-16',
      max: '2019-03-16',
    };
  }

  componentDidMount() {
    dateFormatter();
    const { min, max } = this.state;
    const { getDailyTransaction } = this.props;
    getDailyTransaction(min, max);
    // get weekly transactions for last one week
  }

  render() {
    const {
      transaction: { loading, daily },
    } = this.props;
    let transactionItem;

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
            index={i}
            type={2}
            transactionDetails={details}
          />
        )))
      : (transactionItem = <h4>No Movie Tickets Where Found!</h4>);

    return (
      <Page
        title="Daily Transactions"
        breadcrumbs={[{ name: 'Daily Transactions', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>Daily Transactions</CardHeader>
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
    );
  }
}

const map_state_to_props = state => ({
  transaction: state.transactions,
});

export default connect(
  map_state_to_props,
  { getDailyTransaction },
)(withRouter(DailyTransactions));
