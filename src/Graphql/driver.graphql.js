import * as rp from 'request-promise';
import config from './config';

export class GSDriver {
  constructor(token) {
    this.url = config.dms; // config.ams; //url ? url : config.ams;
    this.options = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDUxMzkzMGI4ZTVhMDY5NDAwMjEzMTQiLCJ1c2VyZnVsbG5hbWUiOiJUZXN0IEFkbWluIEJPdCIsIm1vYmlsZSI6IjA5MDcyNzc3MTMwIiwibW9kZWwiOiJhZG1pbiIsImlhdCI6MTU2NTc3NzQxMiwiZXhwIjoxNTY2MzgyMjEyfQ.HGI0UpH38GtmL6b3LBX7b_qwCLIxG55aMMc231RG2wg`,
      },
      json: true,
    };
  }

  async getDriversDetails() {
    return rp.post(this.url, {
      ...this.options,
      body: {
        query: `
        {
        findAllDrivers {
          __typename
             ...on Error {
            path
            message
          }
          ...on DriverResults{
            active
            firstName
            lastName
            mobile
            email
            confirmed
            forgotPasswordLock
            avatar
            dob
            mothers_maiden_name
            primary_location {
              address
              landmark
              city
              state
              lat
              long
            }
            secondary_location {
              address
              landmark
              city
              state
              lat
              long
            }
            tertiary_location {
              address
              landmark
              city
              state
              lat
              long
            }
            resolved_bvn_data {
              first_name
              last_name
              dob
              mobile
              bvn
            }
            driver_reviews {
                userId
              rate
              message
            }
            driver_rating
            last_seen {
              long
              lat
              timeStamp
            }
          }
        }
      }
        `,
      },
    });
  }
}
