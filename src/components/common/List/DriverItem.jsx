import * as React from 'react';
import { Button } from 'reactstrap';
// import classnames from 'classnames';
// import PropTypes from 'prop-types';

export default function TicketItem({ dd, history, i }) {
  return (
    <React.Fragment>
      <tbody>
        <tr>
          <th scope="row">{i}</th>
          <td>{dd.avatar}</td>
          <td>{`${dd.firstName} ${dd.lastName}`}</td>
          <td>{dd.email}</td>
          <td>{dd.mobile}</td>
          <td>{dd.driver_rating ? dd.driver_rating : 'No rating yet'}</td>
          <td>
            {' '}
            <Button
              color="secondary"
              onClick={() => {
                console.log('view Primary secondary Addresse');
              }}
              size="lg"
              active
            >
              VIEW LAST SEEN
            </Button>
          </td>
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
