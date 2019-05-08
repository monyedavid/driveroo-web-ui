import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

// import classnames from 'classnames';
// import PropTypes from 'prop-types';

export default class Merchant extends Component {
  render() {
    const {
      ticketDetails: { _id, name, email, phone, location },
      index,
      toggle,
      history,
    } = this.props;

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
              <Button
                color="secondary"
                onClick={() => toggle(_id)}
                size="lg"
                active
              >
                details
              </Button>
            </td>
            <td>
              <Button
                color="secondary"
                onClick={() => {
                  history.push(`/update-merchant/${_id}`);
                }}
                size="lg"
                active
              >
                edit
              </Button>
            </td>
          </tr>
        </tbody>
      </React.Fragment>
    );
  }
}
