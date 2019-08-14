import * as rp from 'request-promise';
import config from './config';

export class GSAuth {
  constructor(url, session) {
    this.url = url ? url : config.ams;
    this.options = {
      withCredentials: true,
      json: true,
      jar: rp.jar(),
    };
  }

  async login({ emailmobile, password }) {
    return rp.post(this.url, {
      ...this.options,
      body: {
        query: `
            mutation {
                login(
                emailormobile: "${emailmobile}"
                password: "${password}"
                model: "admin"
                ) {
                    path
                    message
                    model
                    sessionId
                }
            }
          
                `,
      },
    });
  }

  async register({ email, password, mobile, firstName, lastName }) {
    return rp.post(this.url, {
      ...this.options,
      body: {
        query: `
                params: {
                    email: "${email}",
                    password: "${password}",
                    mobile: "${mobile}",
                    firstName: "${firstName}",
                    lastName: "${lastName}",
                },
                  model: "admin"
            `,
      },
    });
  }

  async logout() {
    return rp.post(this.url, {
      ...this.options,
      body: {
        query: `
            mutation {
                logout
            }
            `,
      },
    });
  }

  async me() {
    return rp.post(this.url, {
      ...this.options,
      body: {
        query: `
                {
                    me {
                    __typename
                    ...on Error {
                        path
                        message
                    }
                    
                    ...on me_data {
                        user {
                        active
                        firstName
                        lastName
                        mobile
                        email
                        avatar
                        }
                        token
                    }
                    }
                }
            `,
      },
    });
  }

  async admin_link({ registerationId, firstName, lastName, password }) {
    return rp.post(this.url, {
      ...this.options,
      body: {
        query: `
          mutation {
            admin_link_register(
              params: {
                encrypt_id: "${registerationId}",
                password: "${password}",
                firstName: "${firstName}",
                lastName: "${lastName}"
              }
            ) {
              ok
              path
              message
            }
          }
            `,
      },
    });
  }
}
