import React, { Component } from 'react';
import Page from 'components/Page';
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap';

export const TransactionDetail = ({
  _id,
  updatedAt,
  createdAt,
  uid,
  destination,
  amount,
  message,
  className,
  eventName,
  purchaseID,
  customerName,
  customerPhone,
  customerEmail,
  platform,
  transactionID,
  transferFee,
  balance,
  savings,
  ticketID,
  classID,
  ticketTotal,
  ticketCount,
  response,
  status,
  transferType,
  currency,
}) => {
  return (
    <div>These Nuts</div>
    // <Page>
    //   <Row>
    //     <Col xl={6} lg={6} md={6}>
    //       <ListGroup>
    //         <ListGroupItem>Email: {email}</ListGroupItem>
    //         <ListGroupItem>Phone: {phone}</ListGroupItem>
    //         <ListGroupItem>
    //           Is Merchant an NGO: {ngo ? 'Yes' : 'no'}
    //         </ListGroupItem>
    //         {/* <ListGroupItem>Banner Image: </ListGroupItem> */}
    //         {ngo ? (
    //           <ListGroupItem>NGO Phone: {ngoPhoneNumber} </ListGroupItem>
    //         ) : null}
    //         <ListGroupItem>Tagline: {tagLine}</ListGroupItem>
    //       </ListGroup>
    //     </Col>
    //     <Col xl={6} lg={6} md={6}>
    //       <ListGroup>
    //         <ListGroupItem>Thank You Message: {thankYouMessage} </ListGroupItem>
    //         <ListGroupItem>Website: {website}</ListGroupItem>
    //         <ListGroupItem>Location: {location}</ListGroupItem>
    //         <ListGroupItem>Summary: {summary}</ListGroupItem>
    //         <ListGroupItem>Bank Name: {name} </ListGroupItem>
    //         <ListGroupItem>Account Number: {accountNumber}</ListGroupItem>
    //         <ListGroupItem>Account Name {accountName}:</ListGroupItem>
    //       </ListGroup>
    //     </Col>
    //   </Row>
    // </Page>
  );
};

/**
 * _id(pin): "5cb5a6fcaa57732fb4ad122f"
updatedAt(pin): "2019-03-16T11:49:35.968Z"
createdAt(pin): "2019-03-16T11:49:35.968Z"
uid(pin): "f988874e-2f5f-49b2-86f8-b4bc92276a32"
destination(pin): "079-179-6832 x86644"
amount(pin): 334.02
message(pin): "Transfer From 079-179-6832 x86644 to f988874e-2f5f-49b2-86f8-b4bc92276a32 was successful"
className(pin): "et"
eventName(pin): "eos id ut"
purchaseID(pin): "5cb2e474623af20be0656421"
customerName(pin): "Anissa98@yahoo.com through XclusivePlus By Diamond"
customerPhone(pin): "178.628.3198"
customerEmail(pin): "Anissa98@yahoo.com"
platform(pin): "reprehenderit suscipit distinctio"
transactionID(pin): "692288565ee5e-cda8-4a44-bbe8-073759487a0c"
transferFee(pin): 83746
balance(pin): 20631
savings(pin): 11513
ticketID(pin): "5cb2e474623af20be0656421"
classID(pin): "5cb2e474623af20be0656422"
ticketTotal(pin): 65906
ticketCount(pin): 4539
__v(pin): 0
response(pin): "SUCCESS"
status(pin): 200
transferType(pin): "CINEMA"
currency(pin): "NGN"
 */
