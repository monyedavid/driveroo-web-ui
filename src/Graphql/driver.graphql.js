import * as rp from 'request-promise';
import config from './config';

export class GSDriver {
  constructor(token) {
    this.url = config.ams; // config.ams; //url ? url : config.ams;
    this.options = {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: true,
      jar: rp.jar(),
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
