import React, { Component } from 'react';
import Page from 'components/Page';
import LoadSpinner from '../../components/common/spinner';
import spinner_image from '../../utils/spin.gif';
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
import { updateMerchantState } from '../../initializers';
import { updateMerchant, getMerchant } from '../../redux/actions/merchant';

class CreateMerchant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...updateMerchantState,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { getMerchant } = this.props;
    getMerchant(this.props.match.params._id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.merch.merchant === null && !nextProps.merch.loading) {
      this.props.history.push('/lost-bot'); // create page
    }

    const { merchant } = nextProps.merch;
    if (merchant !== null) {
      this.setState({
        bannerImage: merchant.bannerImage, // file
        name: merchant.name,
        email: merchant.email,
        phone: merchant.phone,
        ngo: merchant.ngo,
        ngoPhoneNumber: merchant.ngoPhoneNumber,
        tagLine: merchant.tagLine,
        logo: merchant.logo, // file
        location: merchant.location,
        bank_name: merchant.BankDetails.name,
        bank_account_number: merchant.BankDetails.accountNumber,
        bank_account_name: merchant.BankDetails.accountName,
        summary: merchant.summary,
        thankYouMessage: merchant.thankYouMessage,
        website: merchant.website,
      });
    }
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
    const {
      merch: { merchant },
      updateMerchant,
      history,
    } = this.props;

    const updatedItems = {
      ...this.state,
    };

    const fd = new FormData();

    Object.keys(updatedItems).forEach(key => {
      if (
        key === 'bank_account_name' ||
        key === 'bank_account_number' ||
        key == 'bank_name'
      ) {
        return;
      }
      if (updatedItems[key] === merchant[key]) {
        delete updatedItems[key];
      }
    });

    Object.keys(updatedItems).forEach(k => {
      if (k === 'bannerImage') {
        return fd.append(
          'bannerImage',
          this.state.bannerImage['0'],
          this.state.bannerImage['0'].name,
        );
      }

      if (k === 'logo') {
        return fd.append('logo', this.state.logo[0], this.state.logo['0'].name);
      }

      fd.append(k, updatedItems[k]);
    });

    updateMerchant(merchant._id, fd, history);
  };

  render() {
    return (
      <Page
        title="Update Merchant"
        breadcrumbs={[{ name: 'Update Merchant', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>Update Merchant</CardHeader>
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
                        value={this.state.name}
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
                        value={this.state.email}
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
                        value={this.state.phone}
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
                            defaultChecked={this.state.ngo}
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
                  {this.state.ngo ? (
                    <FormGroup row>
                      <Label for="ngoPhoneNumber" sm={3}>
                        NGO's Phone
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          name="ngoPhoneNumber"
                          value={this.state.ngoPhoneNumber}
                          placeholder="ngo-phone"
                          onChange={this.onChange}
                        />
                      </Col>
                    </FormGroup>
                  ) : (
                    <React.Fragment />
                  )}

                  {/* TAGLINE */}
                  <FormGroup row>
                    <Label for="tagLine" sm={3}>
                      Tagline
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="tagLine"
                        value={this.state.tagLine}
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
                        value={this.state.thankYouMessage}
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
                        value={this.state.website}
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
                        value={this.state.location}
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
                        value={this.state.summary}
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
                        value={this.state.bank_name}
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
                        value={this.state.bank_account_name}
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
                        value={this.state.bank_account_number}
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* CREATE MERCHANT */}
                  <FormGroup check row>
                    <Col sm={{ size: 9, offset: 3 }}>
                      <Button onClick={this.onSubmit}>Update Merchant</Button>
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
  merch: state.merchant,
});

export default connect(
  map_state_to_props,
  { updateMerchant, getMerchant },
)(withRouter(CreateMerchant));
