import Page from 'components/Page';
import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

class CreateVoucher extends Component {

  render() {

    return (
      <Page
        title="Create Vouchers"
        breadcrumbs={[{ name: 'Create Voucher', active: true }]}
      >`
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>Create Voucher</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label for="voucher_code" sm={3}>
                      Voucher Code
                    </Label>
                    <Col sm={6}>
                      <Input type="text" name="voucher_code" placeholder="voucher code" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="balance" sm={3}>
                      Voucher Balance
                    </Label>
                    <Col sm={6}>
                      <Input
                        type="text"
                        name="balance"
                        placeholder="balance"
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="voucher_value" sm={3}>
                      Voucher Value
                    </Label>
                    <Col sm={6}>
                      <Input type="text" name="voucher_value" placeholder="voucher value" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="reference" sm={3}>
                      Reference
                    </Label>
                    <Col sm={6}>
                      <Input type="text" name="reference" placeholder="reference" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="wallet" sm={3}>
                      Wallet
                    </Label>
                    <Col sm={6}>
                      <Input type="text" name="wallet" placeholder="wallet" />
                    </Col>
                  </FormGroup>

                  <FormGroup check row>
                    <Col sm={{ size: 9, offset: 3 }}>
                      <Button>Create Voucher</Button>
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

export default CreateVoucher;
