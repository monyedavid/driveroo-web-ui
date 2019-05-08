import Page from 'components/Page';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
  Table,
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import randomString from 'randomstring';

class RedeemTicket extends Component {

  render() {

    return (
      <Page
        title="Redemptions"
        breadcrumbs={[{ name: 'Redeem Ticket', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>Redeem Ticket</CardHeader>
              <CardBody>
                <Form>
                  {/* <Col xl={6} lg={6} md={6}>

                  </Col>
                  <Col xl={6} lg={6} md={6}>

                  </Col> */}

                  <FormGroup row>
                    <Label for="phone" sm={3}>
                      Phone Number
                    </Label>
                    <Col sm={6}>
                      <Input type="phone" name="phone" placeholder="phone number...or" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="email" sm={3}>
                      Email
                    </Label>
                    <Col sm={6}>
                      <Input
                        type="email"
                        name="email"
                        placeholder="...or email"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 9, offset: 3 }}>
                      <Button>Show Ticket Details</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>Ticket Details</CardHeader>
              <CardBody>
                <Table striped={true} id="listmerchantstable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Customer Details</th>
                      <th>Movie Details</th>
                      <th>Purchase Details</th>
                      <th>Validity</th>
                      <th>Amount</th>
                      <th>Redeem</th>
                    </tr>
                  </thead>
                  <tr>
                    <td>1</td>
                    <td>Oluwatunmbi Banto<br /><br />someverylongemail@gmail.com<br /><br />08074665617</td>
                    <td>Filmhouse, Lekki<br /><br />The Big Curse of La LLrona<br /><br />24-Mar-2019; 11:40Am</td>
                    <td>Date: 15-Mar-2019<br /><br />Time: 6:05 PM<br /><br />Category: Adult</td>
                    <td>ISSUED<br /></td>
                    <td>Qty: 2<br/>Amt: N4,000</td>
                    <td><Button>Redeem</Button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Customer Name<br /><br />Customer Email<br /><br />Customer Phone No</td>
                    <td>Filmhouse, Lekki<br /><br />Avengers Endgame<br /><br />24-Mar-2019; 11:40Am</td>
                    <td>Date: 15-Mar-2019<br /><br />Time: 6:05 PM<br /><br />Category: Adult</td>
                    <td>ISSUED<br /></td>
                    <td>Qty: 2<br />Amt: N4,000</td>
                    <td><Button>Redeem</Button></td>
                  </tr>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
};

export default RedeemTicket;
