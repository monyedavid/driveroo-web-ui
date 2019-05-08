import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { dateDisplayFormatter } from '../../../utils/gendate';
// import classnames from 'classnames';
// import PropTypes from 'prop-types';

export default class Gifts extends Component {
  render() {
    const {
        giftDetails: { _id, winners_name, winners_email, movie, createdAt },
        index,
      } = this.props,
      details = `/details/${_id}`;
    return (
      <React.Fragment>
        <tbody>
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{winners_name}</td>
            <td>{winners_email}</td>
            <td>{movie}</td>
            <td>{dateDisplayFormatter(createdAt, true)}</td>
            <td>
              <Link to={details}>Details</Link>
            </td>
          </tr>
        </tbody>
      </React.Fragment>
    );
  }
}
