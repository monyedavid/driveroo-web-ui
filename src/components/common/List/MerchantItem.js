import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import classnames from 'classnames';
// import PropTypes from 'prop-types';

export default class Merchant extends Component {
  render() {
    const {
        ticketDetails: { _id, name, email, phone, location },
        index,
      } = this.props,
      details = `/details/${_id}`;
    return (
      <React.Fragment>
        <tbody>
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{location}</td>
            <td>
              <Link to={details}>Details</Link>
            </td>
            <td>
              <Link to={details}>Edit+Delete</Link>
            </td>
          </tr>
        </tbody>
      </React.Fragment>
    );
  }
}
