import React, { Component } from 'react';
import moment from 'moment';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// import classnames from 'classnames';
// import PropTypes from 'prop-types';
// import { dateDisplayFormatter } from '../../../utils/gendate';

export default class TransactionItem extends Component {
  render() {
    const {
      transactionDetails: {
        _id,
        amount,
        platform,
        transactionID,
        uid,
        eventName,
        customerName,
        createdAt,
      },
      index,
      toggle,
      type,
    } = this.props;
    return type === 2 ? (
      <React.Fragment>
        <tbody>
          <tr>
            <th scope="row">{transactionID}</th>
            <td>{uid}</td>
            <td>{amount}</td>
            <td>{platform}</td>
            <td>{eventName}</td>
            <td>{customerName}</td>
            <th>{moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</th>
            <td>
              <Button
                color="secondary"
                onClick={() => toggle(index)}
                size="lg"
                active
              >
                details
              </Button>
            </td>
          </tr>
        </tbody>
      </React.Fragment>
    ) : type === 1 ? (
      <React.Fragment />
    ) : type === 3 ? (
      <React.Fragment />
    ) : null;
  }
}
// dateDisplayFormatter(createdAt, true)
