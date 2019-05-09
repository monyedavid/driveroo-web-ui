import React, { Component } from 'react';
import { Button } from 'reactstrap';
import moment from 'moment';
// import classnames from 'classnames';
// import PropTypes from 'prop-types';

export default class Gifts extends Component {
  render() {
    const {
      giftDetails: { _id, winners_name, winners_email, movie, createdAt },
      index,
      toggle,
    } = this.props;
    return (
      <React.Fragment>
        <tbody>
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{winners_name}</td>
            <td>{winners_email}</td>
            <td>{movie}</td>
            <td>{moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
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
    );
  }
}
