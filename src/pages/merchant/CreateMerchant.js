import React, { Component } from 'react';
import Page from 'components/Page';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { createMerchantState } from '../../initializers';
import { addMerchants } from '../../redux/actions/merchant';

class CreateMerchant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...createMerchantState,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangePic = e => {
    this.setState({
      [e.target.name]: [e.target.files[0]],
    });
  };

  onChange = e => {
    e.target.name === 'bannerImage' || e.target.name === 'logo'
      ? this.onChangePic(e)
      : this.setState({
          [e.target.name]: e.target.value,
        });
  };

  onSubmit = async e => {
    e.preventDefault();

    const fd = new FormData();
    const mutable_state = {
      ...this.state,
    };

    delete mutable_state['logo'];
    delete mutable_state['bannerImage'];

    Object.keys(mutable_state).forEach(k => {
      fd.append(k, mutable_state[k]);
    });

    fd.append(
      'bannerImage',
      this.state.bannerImage['0'],
      this.state.bannerImage['0'].name,
    );
    fd.append('logo', this.state.logo[0], this.state.logo['0'].name);

    const { addMerchants, history } = this.props;

    // perform action here?!?
    addMerchants(fd, history);
  };

  render() {
    const {} = this.props;
    return (
      <Page
        title="New Merchant"
        breadcrumbs={[{ name: 'New Merchant', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>Create a new Merchant</CardHeader>
              <CardBody>
                <Form>
                  {/* NAME */}
                  <FormGroup row>
                    <Label for="name" sm={3}>
                      Merchant Name
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="name"
                        placeholder="merchant's name"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* EMAIL */}
                  <FormGroup row>
                    <Label for="email" sm={3}>
                      Merchant Email
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="email"
                        placeholder="merchant's email"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* PHONE */}
                  <FormGroup row>
                    <Label for="phone" sm={3}>
                      Merchant Phone
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="phone"
                        placeholder="merchant's phone"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* LOGO */}
                  <FormGroup row>
                    <Label for="logo" sm={3}>
                      Merchant's Logo
                    </Label>
                    <Col sm={8}>
                      <Input type="file" name="logo" onChange={this.onChange} />
                      <FormText color="muted">Size: 100px by 100px</FormText>
                    </Col>
                  </FormGroup>

                  {/* NGO CHECH */}
                  <FormGroup row>
                    <Label for="isMerchantNGO" sm={3}>
                      Is Merchant an NGO?
                    </Label>
                    <Col sm={{ size: 8 }}>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="ngo"
                            id="isMerchantNGO"
                            onClick={() => {
                              this.setState(previousState => ({
                                ngo: !previousState.ngo,
                              }));
                            }}
                          />{' '}
                          {this.state.ngo ? 'Yes' : 'No'}
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>

                  {/* BANNER IMAGE */}
                  <FormGroup row>
                    <Label for="bannerImage" sm={3}>
                      Banner Image
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="file"
                        name="bannerImage"
                        onChange={this.onChange}
                      />
                      <FormText color="muted">Size: 450px by 200px</FormText>
                    </Col>
                  </FormGroup>

                  {/* NGO PHONE NUMBER  */}
                  <FormGroup row>
                    <Label for="ngoPhoneNumber" sm={3}>
                      NGO's Phone
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="ngoPhoneNumber"
                        placeholder="ngo-phone"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* TAGLINE */}
                  <FormGroup row>
                    <Label for="tagLine" sm={3}>
                      Tagline
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="tagLine"
                        placeholder="tagline"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* TAHNK YOU MESSAGE */}
                  <FormGroup row>
                    <Label for="thankYouMessage" sm={3}>
                      Thank You Message
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="thankYouMessage"
                        placeholder="thank-you-message"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* WEBSITE */}
                  <FormGroup row>
                    <Label for="website" sm={3}>
                      Website
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="website"
                        placeholder="website"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* LOCATION */}
                  <FormGroup row>
                    <Label for="location" sm={3}>
                      Location
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="location"
                        placeholder="merchant's address"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* SUMMARY */}
                  <FormGroup row>
                    <Label for="summary" sm={3}>
                      Summary
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="textarea"
                        name="summary"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* BANK NAME */}
                  <FormGroup row>
                    <Label for="bank_name" sm={3}>
                      Name of Bank
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="bank_name"
                        placeholder="bank-name"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* ACCOUNT NAME */}
                  <FormGroup row>
                    <Label for="bank_account_name" sm={3}>
                      Account Name
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="bank_account_name"
                        placeholder="account-name"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* ACCOUNT NUMBER */}
                  <FormGroup row>
                    <Label for="bank_account_number" sm={3}>
                      Account Number
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="bank_account_number"
                        placeholder="account-number"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* CREATE MERCHANT */}
                  <FormGroup check row>
                    <Col sm={{ size: 9, offset: 3 }}>
                      <Button onClick={this.onSubmit}>Create Merchant</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

const map_state_to_props = state => ({
  merchant: state.merchant,
});

export default connect(
  map_state_to_props,
  { addMerchants },
)(withRouter(CreateMerchant));
