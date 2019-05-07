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

class VoucherBalance extends Component {

  render() {

    return (
      <Page
        title="Redemptions"
        breadcrumbs={[{ name: 'Redeem Ticket', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>Voucher Balance</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label for="voucher_code" sm={3}>
                      Voucher Code:
                    </Label>
                    <Col sm={6}>
                      <Input type="phone" name="voucher_code" placeholder="enter voucher code" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="voucher balance" sm={3}>
                      Voucher Code:
                    </Label>
                    <Col sm={6}>
                      N3, 5000, 000
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

export default VoucherBalance;
