import Page from 'components/Page';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Table, Row } from 'reactstrap';
import $ from 'jquery';
$.Datatable = require('datatables.net');

class ListMovies extends Component {
  componentDidMount() {
    $('#redeemedticketstable').DataTable({
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
        title="Redeemed Tickets"
        breadcrumbs={[{ name: 'Redeemed Tickets', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>All Redeemed Tickets</CardHeader>
              <CardBody>
                <Col>
                  <Card body>
                    <Table striped={true} id="redeemedticketstable">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Movie Title</th>
                          <th>Phone Number</th>
                          <th>Email</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row">1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>Otto</td>
                          <td>
                            <Link to="/">Show Details</Link>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">2</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>Thornton</td>
                          <td>
                            <Link to="/">Show Details</Link>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">3</td>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>the Bird</td>
                          <td>
                            <Link to="/">Show Details</Link>
                          </td>
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

export default ListMovies;
