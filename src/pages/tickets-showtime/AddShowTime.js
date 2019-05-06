import Page from "./node_modules/components/Page";
import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  Row
} from "reactstrap";
import DatePicker from "react-datepicker";
import randomString from "randomstring";

class AddShowTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: [],
      showtimes: []
    };
  }

  addAdditionalClass = e => {
    e.preventDefault();
    // Take a copy of the class state and add a key to it
    let classes = this.state.classes;
    classes.push({
      key: randomString.generate({ length: 8 })
    });
    this.setState({
      classes
    });
  };

  addAdditionalShowtime = e => {
    e.preventDefault();
    // Take a copy of the showtimes state and add a key to it
    let showtimes = this.state.showtimes;
    showtimes.push({
      key: randomString.generate({ length: 8 })
    });
    this.setState({
      showtimes
    });
  };

  removeShowtime = ({ item, e }) => {
    e.preventDefault();
    // alert("Key: "+showtimeID);
    alert("howdy" + item);
  };

  render() {
    let allAdditionalClasses, allAdditionalShowtimes;
    const { classes, showtimes } = this.state;
    allAdditionalClasses = classes.map(singleClass => {
      return (
        <FormGroup key={singleClass.key} row className="align-items-center">
          <Col sm={{ size: 1, offset: 3 }}>Date:</Col>
          <Col sm={2}>
            <Input type="text" name="date" placeholder="dd/mm/yyyy" />
          </Col>
          <Col sm={1}>Time:</Col>
          <Col sm={2}>
            <Input type="text" name="time" placeholder="HH:mm" />
          </Col>
          <Col sm={2} style={{ fontSize: ".8rem" }}>
            <a href="#">remove</a>
          </Col>
        </FormGroup>
      );
    });

    allAdditionalShowtimes = showtimes.map(singleShowtime => {
      return (
        <FormGroup key={singleShowtime.key} row className="align-items-center">
          <Col sm={{ size: 1, offset: 3 }}>Class:</Col>
          <Col sm={2}>
            <Input type="text" name="class" placeholder="student" />
          </Col>
          <Col sm={1}>Price:</Col>
          <Col sm={2}>
            <Input type="text" name="price" placeholder="price" />
          </Col>
          <Col sm={2} style={{ fontSize: ".8rem" }}>
            <a href="#">remove</a>
          </Col>
        </FormGroup>
      );
    });

    return (
      <Page
        title="Add Showtime"
        breadcrumbs={[{ name: "Captain Marvel", active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>Movie Title: Captain Marvel</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label for="movie-title" sm={3}>
                      Cinema
                    </Label>
                    <Col sm={8}>
                      <Input type="select" name="selectMulti">
                        <option>Ozone Cinemas, V.I</option>
                        <option>Filmhouse Cinema, Lekki</option>
                        <option>Genesis Cinema, Oniru</option>
                        <option>Viva Cinemas, Ilorin</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row className="align-items-center">
                    <Label for="age-restriction" sm={3}>
                      Showing Times
                    </Label>
                    <Col sm={1}>Date:</Col>
                    <Col sm={2}>
                      <Input
                        type="text"
                        name="running-time"
                        placeholder="dd/mm/yyyy"
                      />
                    </Col>
                    <Col sm={1}>Time:</Col>
                    <Col sm={2}>
                      <Input
                        type="text"
                        name="running-time"
                        placeholder="HH:mm"
                      />
                    </Col>
                    <Col sm={2}>
                      <a href="#" onClick={this.addAdditionalClass}>
                        {" "}
                        Add Time{" "}
                      </a>
                    </Col>
                  </FormGroup>

                  {allAdditionalClasses}

                  <FormGroup row>
                    <Label for="running-time" sm={3}>
                      Ticket Classes
                    </Label>
                    <Col sm={1}>Class:</Col>
                    <Col sm={2}>
                      <Input
                        type="text"
                        name="running-time"
                        placeholder="adult"
                      />
                    </Col>
                    <Col sm={1}>Price:</Col>
                    <Col sm={2}>
                      <Input
                        type="text"
                        name="running-time"
                        placeholder="2,500"
                      />
                    </Col>
                    <Col sm={2}>
                      <a href="#" onClick={this.addAdditionalShowtime}>
                        {" "}
                        Add Class{" "}
                      </a>
                    </Col>
                  </FormGroup>

                  {allAdditionalShowtimes}

                  <FormGroup row>
                    <Label for="limit" sm={3}>
                      Limit
                    </Label>
                    <Col sm={1}>
                      <Input type="text" name="limit" placeholder="limit" />
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 9, offset: 3 }}>
                      <Button>Create Movie</Button>
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

export default AddShowTime;
