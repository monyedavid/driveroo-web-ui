import React, { Component } from 'react';
import { Button } from 'reactstrap';
// import classnames from 'classnames';
// import PropTypes from 'prop-types';

export default class TicketItem extends Component {
  render() {
    const {
        ticketDetails: {
          _id,
          name,
          available,
          purchaseCount,
          filmhouse_id,
          duration,
          genre,
        },
        history,
      } = this.props,
      addShowtimeLink = `/add-showtime/${_id}`;
    return (
      <React.Fragment>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{name}</td>
            <td>{available}</td>
            <td>{purchaseCount}</td>
            <td>{filmhouse_id}</td>
            <td>{duration}</td>
            <td>{genre}</td>
            <td>
              <Button
                color="secondary"
                onClick={() => {
                  console.log('view Primary secondary Addresse');
                }}
                size="lg"
                active
              >
                VIEW PTSD ADDRESS
              </Button>
            </td>
          </tr>
        </tbody>
      </React.Fragment>
    );
  }
}
