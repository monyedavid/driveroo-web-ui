import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from 'components/Page';
import TransactionItem from '../../components/common/List/TransactionItem';
import { Link, withRouter } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Table, Row } from 'reactstrap';
import { monthGeneratorFormatter } from '../../utils/gendate';
import { getMonthlyTransaction } from '../../redux/actions/transaction';

class MonthlyTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // min: monthGeneratorFormatter().min,
      // max: monthGeneratorFormatter().max,
      min: '2019-04',
      max: '2019-04',
    };
  }

  componentDidMount() {
    monthGeneratorFormatter();
    const { min, max } = this.state;
    const { getMonthlyTransaction } = this.props;
    getMonthlyTransaction(min, max);
    // get weekly transactions for last one week
  }

  render() {
    const {
      transaction: { loading, monthly },
    } = this.props;
    let transactionItem;

    /**
     *  @component   TransactionItem
     *  @property    TYPE = [1 | 2 | 3]
     *  @type1       DAILY
     *  @type2       WEEKLY
     *  @type3       MONTHLY
     */

    loading === true && monthly == null
      ? (transactionItem = <React.Fragment />)
      : loading === false && monthly == null
      ? (transactionItem = <React.Fragment />)
      : monthly.length > 0
      ? (transactionItem = monthly.map((details, i) => (
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
        title="Monthly Transactions"
        breadcrumbs={[{ name: 'Monthly Transactions', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>
                Monthly Transactions from {this.state.min} - {this.state.max}
              </CardHeader>
              <CardBody>
                <Col>
                  <Card body>
                    <Table striped={true} id="monthlyTransaction">
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
  { getMonthlyTransaction },
)(withRouter(MonthlyTransactions));
