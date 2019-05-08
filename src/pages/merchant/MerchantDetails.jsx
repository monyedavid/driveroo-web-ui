import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from 'components/Page';
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap';

export const MerchantDetails = ({
  email,
  phone,
  ngo,
  ngoPhoneNumber,
  tagLine,
  location,
  summary,
  thankYouMessage,
  bannerImage,
  logo,
  website,
  BankDetails: { accountNumber, name, accountName },
}) => {
  return (
    <Page>
      <Row>
        <Col xl={6} lg={6} md={6}>
          <ListGroup>
            <ListGroupItem>Email: {email}</ListGroupItem>
            <ListGroupItem>Phone: {phone}</ListGroupItem>
            <ListGroupItem>
              Is Merchant an NGO: {ngo ? 'Yes' : 'no'}
            </ListGroupItem>
            {/* <ListGroupItem>Banner Image: </ListGroupItem> */}
            {ngo ? (
              <ListGroupItem>NGO Phone: {ngoPhoneNumber} </ListGroupItem>
            ) : null}
            <ListGroupItem>Tagline: {tagLine}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col xl={6} lg={6} md={6}>
          <ListGroup>
            <ListGroupItem>Thank You Message: {thankYouMessage} </ListGroupItem>
            <ListGroupItem>Website: {website}</ListGroupItem>
            <ListGroupItem>Location: {location}</ListGroupItem>
            <ListGroupItem>Summary: {summary}</ListGroupItem>
            <ListGroupItem>Bank Name: {name} </ListGroupItem>
            <ListGroupItem>Account Number: {accountNumber}</ListGroupItem>
            <ListGroupItem>Account Name {accountName}:</ListGroupItem>
          </ListGroup>
        </Col>
        {/* <Col>
            <ListGroupItem>
              <Link to="">Edit Merchant's Details</Link> |{' '}
              <Link to="">Delete Merchant</Link>
            </ListGroupItem>
          </Col> */}
      </Row>
    </Page>
  );
};
