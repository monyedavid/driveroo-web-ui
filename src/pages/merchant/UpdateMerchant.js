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
import { createMerchantState } from '../../initializers';
import { updateMerchant, getMerchant } from '../../redux/actions/merchant';

class CreateMerchant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...createMerchantState,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { getMerchant } = this.props;
    getMerchant(this.props.match.params._id);
  }

  /**
   * BankDetails: {accountNumber: "0165166229", accountName: "Merchant man  Wema", name: "wema"}
bannerImage: "http://res.cloudinary.com/dnbvtgujy/image/upload/v1556034874/g9do9kf1djgt6oxa1qqe.jpg"
email: "griffinc317@gmail.com"
location: "East Coast West Coast"
logo: "http://res.cloudinary.com/dnbvtgujy/image/upload/v1556034909/inakpject1zs19glghk7.jpg"
name: "your friendly neighborhood merchant man"
ngo: true
ngoPhoneNumber: "2348132561527"
phone: "2349072777130"
summary: "some-rndom-summary"
tagLine: "some-randm-tag-line"
thankYouMessage: "everybody gets one."
__v: 0
_id: "5cbf355daa57550a9c7d2120"
   */

  componentWillReceiveProps(nextProps) {
    if (nextProps.merch.merchant === null && !nextProps.merch.loading) {
      this.props.history.push('/lost-bot'); // create page
    }

    if (nextProps.merch.merchant !== null) {
      const stateCopy = {
        ...nextProps.merch.merchant,
      };

      delete stateCopy['BankDetails'];
      this.setState({
        ...stateCopy,
        bank_name: nextProps.merch.merchant.BankDetails.accountName,
        bank_account_number: nextProps.merch.merchant.BankDetails.accountNumber,
        bank_account_name: nextProps.merch.merchant.BankDetails.name,
      });

      console.log(this.state, 'STATE ACTUALL');
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
    console.log(this.state);
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
  merch: state.merchant,
});

export default connect(
  map_state_to_props,
  { updateMerchant, getMerchant },
)(withRouter(CreateMerchant));
