import Page from 'components/Page';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Table, Row } from 'reactstrap';
import $ from 'jquery';
$.Datatable = require('datatables.net');

class RangeTransactions extends Component {
  componentDidMount() {
    $('#rangetranstable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        {
          extend: 'collection',
          text: 'Export',
          buttons: ['copy', 'excel', 'csv', 'pdf', 'print'],
        },
      ],
    });
  }

  render() {
    return (
      <Page
        title="Range Transactions"
        breadcrumbs={[{ name: 'Range Transactions', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>Range Transactions</CardHeader>
              <CardBody>
                <Col>
                  <Card body>
                    <Table striped={true} id="rangetranstable">
                      <thead>
                        <tr>
                          <th>Trans ID</th>
                          <th>Amount</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th>Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">8365344</th>
                          <td>15,000</td>
                          <td>6 Movie tickets</td>
                          <td>11/Apr/2019</td>
                          <td>9:45:20am</td>
                        </tr>
                        <tr>
                          <th scope="row">9823465</th>
                          <td>240,000</td>
                          <td>VIP Ticket - Ay Live</td>
                          <td>11/Apr/2019</td>
                          <td>9:45:20am</td>
                        </tr>
                        <tr>
                          <th scope="row">3564685</th>
                          <td>1,500</td>
                          <td>Movie Ticket - Avengers</td>
                          <td>11/Apr/2019</td>
                          <td>9:45:20am</td>
                        </tr>
                      </tbody>
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

export default RangeTransactions;
