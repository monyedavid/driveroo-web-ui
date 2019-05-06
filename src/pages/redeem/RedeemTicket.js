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
                      <Button>Redeem Ticket</Button>
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
};

export default RedeemTicket;
