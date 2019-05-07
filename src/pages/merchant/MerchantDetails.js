import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import Page from 'components/Page';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

class MerchantDetails extends Component {

  render() {
    return (
      <Page
        title="Merchant's Name"
        breadcrumbs={[{ name: 'Merchant Name', active: true }]}
      >
        <Row>
          <Col xl={6} lg={6} md={6}>
            <ListGroup>
              <ListGroupItem>Merchant's Name: abc xyz</ListGroupItem>
              <ListGroupItem>Merchant's Email: abc xyz</ListGroupItem>
              <ListGroupItem>Phone: abc xyz</ListGroupItem>
              <ListGroupItem>Is Merchant an NGO: No</ListGroupItem>
              <ListGroupItem>Banner Image: </ListGroupItem>
              <ListGroupItem>NGO Phone: </ListGroupItem>
              <ListGroupItem>Tagline: abc xyz</ListGroupItem>
            </ListGroup>
          </Col>
          <Col xl={6} lg={6} md={6}>
            <ListGroup>
              <ListGroupItem>Thank You Message: </ListGroupItem>
              <ListGroupItem>Website: www.website.com</ListGroupItem>
              <ListGroupItem>Location: abc xyz</ListGroupItem>
              <ListGroupItem>Summary: abc xyz</ListGroupItem>
              <ListGroupItem>Bank Name: </ListGroupItem>
              <ListGroupItem>Account Number: abc xyz</ListGroupItem>
              <ListGroupItem>Account Name:</ListGroupItem>
            </ListGroup>
          </Col>
          <Col>
            <ListGroupItem><Link to="">Edit Merchant's Details</Link> | <Link to="">Delete Merchant</Link></ListGroupItem>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default MerchantDetails;
