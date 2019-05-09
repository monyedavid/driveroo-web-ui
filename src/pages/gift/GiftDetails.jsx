import React from 'react';
import moment from 'moment';
import Page from 'components/Page';
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap';

export const GiftDetail = ({
  _id,
  updatedAt,
  createdAt,
  movie,
  cinema,
  date,
  winners_email,
  winners_phone,
  quantity,
  revoked,
}) => {
  return (
    <Page>
      <Row>
        <Col xl={6} lg={6} md={6}>
          <ListGroup>
            <ListGroupItem>Customer Email: {winners_email}</ListGroupItem>
            <ListGroupItem>Custonmer Phone: {winners_phone}</ListGroupItem>
            <ListGroupItem>Quantity: {quantity}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col xl={6} lg={6} md={6}>
          <ListGroup>
            <ListGroupItem>Movie: {movie} </ListGroupItem>
            <ListGroupItem>Cinema: {cinema}</ListGroupItem>
            <ListGroupItem>Revoked: {revoked} </ListGroupItem>
            <ListGroupItem>View Date {date}:</ListGroupItem>
            <ListGroupItem>
              Date Issued: {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}{' '}
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Page>
  );
};

/**
 *      "gifts": [
        {
            "_id": "5ccf3798402c242128fb5dcf",
            "updatedAt": "2019-05-05T19:20:56.854Z",
            "createdAt": "2019-05-05T19:20:56.854Z",
            "movie": "Glass",
            "cinema": "5cc03d7231f58a2a608279b9",
            "date": "2019-05-14T7:14:38.000Z",
            "winners_name": "LORD LUGARD",
            "winners_email": "griffinc317@gmail.com",
            "winners_phone": "09072777130",
            "quantity": "3",
            "__v": 0,
            "revoked": false
 */
