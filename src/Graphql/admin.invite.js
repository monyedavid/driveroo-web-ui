import * as rp from 'request-promise';

export class UAdmin {
  constructor(url, session) {
    this.url = url ? url : process.env.DRIVER_MS;
    this.options = {
      withCredentials: true,
      json: true,
      jar: rp.jar(),
    };
  }

  async inivite_Admin({ email, mobile }) {
    return rp.post(this.url, {
      ...this.options,
      body: {
        query: `
                    mutation{
                        admin_(params: {email: "${email}", mobile: "${mobile}"}) {
                        __typename
                            ...on Error {
                                path
                                message
                            }
                            
                            ...on _admin {
                                ok
                                mssg
                            }
                        }
                    }
                `,
      },
    });
  }
}
