import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { dateDisplayFormatter } from '../../../utils/gendate';

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
        type,
      } = this.props,
      details = `/details/${_id}`;
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
            <th>{dateDisplayFormatter(createdAt, true)}</th>
            <td>
              <Link to={details}>Details</Link>
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
