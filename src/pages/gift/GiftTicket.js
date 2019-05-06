import Page from 'components/Page';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getMoviesTickets } from '../../redux/actions/movies';
import { getCinemas } from '../../redux/actions/cinemas';
import { addGift } from '../../redux/actions/gift';
import moment from 'moment';

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
import { createGiftState } from '../../initializers';
import { mongodateFormatter } from '../../utils/gendate';
import DatePicker from 'react-date-picker';
import 'react-datepicker/dist/react-datepicker.css';

class GiftTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...createGiftState,
      movie_select: [],
      cinema_location: [],
    };
  }

  componentDidMount() {
    const { getMoviesTickets, getCinemas } = this.props;
    getMoviesTickets();
    getCinemas();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mt) {
      const { loading, movieTickets } = nextProps.mt;
      if (loading === false && movieTickets !== null) {
        let selectionArray = ['please select a movie'];
        const { AllTickets } = movieTickets;
        AllTickets.forEach(({ name, _id }) => {
          selectionArray.push({ name, _id });
        });
        this.setState({ movie_select: selectionArray });
      }
    }

    if (nextProps.cinema) {
      const { loading, cinemas } = nextProps.cinema;
      if (loading === false && cinemas !== null) {
        let selectionArray = ['please select a cinema location'];
        cinemas.forEach(({ name, _id }) => {
          selectionArray.push({ name, _id });
        });
        this.setState({ cinema_location: selectionArray });
      }
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { addGift, history } = this.props;

    const newStateObject = {
      ...this.state,
    };
    delete newStateObject['cinema_location'];
    delete newStateObject['movie_select'];
    // format date + time
    if (newStateObject['date'] !== '') {
      newStateObject['date'] = mongodateFormatter(
        newStateObject.date,
        newStateObject.time,
      );
    }

    this.state.cinema_location.forEach(({ name, _id }) => {
      if (name === newStateObject['cinema']) {
        newStateObject['cinema'] = _id;
      }
    });
    // delete time
    delete newStateObject['time'];
    addGift(newStateObject, history);
  };

  calenderonChange = date => this.setState({ date });

  render() {
    return (
      <Page
        title="Gift Ticket"
        breadcrumbs={[{ name: 'Gift Ticket', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>Gift Ticket</CardHeader>
              <CardBody>
                <Form>
                  {/* SELECT MOVIE  */}
                  <FormGroup row>
                    <Label for="movie" sm={3}>
                      Select Movie
                    </Label>
                    <Col sm={6}>
                      <Input
                        type="select"
                        name="movie"
                        onChange={this.onChange}
                      >
                        {this.state.movie_select.map((obj, i) => {
                          return <option key={i}>{obj.name}</option>;
                        })}
                      </Input>
                    </Col>
                  </FormGroup>

                  {/* SELECT CINEMA */}
                  <FormGroup row>
                    <Label for="cinema" sm={3}>
                      Select Cinema
                    </Label>
                    <Col sm={6}>
                      <Input
                        type="select"
                        name="cinema"
                        onChange={this.onChange}
                      >
                        {this.state.cinema_location.map((obj, i) => {
                          return <option key={i}>{obj.name}</option>;
                        })}
                      </Input>
                    </Col>
                  </FormGroup>

                  {/* SELECT DATE Time */}
                  <FormGroup row className="align-items-center">
                    <Label for="date-time" sm={3}>
                      Select Date/Time
                    </Label>
                    <Col sm={1}>Date:</Col>
                    <Col sm={2}>
                      <DatePicker
                        name="date"
                        onChange={this.calenderonChange}
                        value={this.state.date}
                      />
                    </Col>
                    <Col sm={1}>Time:</Col>
                    <Col sm={2}>
                      <Input
                        type="text"
                        name="time"
                        placeholder={
                          moment()
                            .format('LTS')
                            .split(' ')[0]
                        }
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* WINNERS NAME */}
                  <FormGroup row>
                    <Label for="winners_name" sm={3}>
                      Winner's Name
                    </Label>
                    <Col sm={6}>
                      <Input
                        type="text"
                        name="winners_name"
                        placeholder="winner's name"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* WINNERS EMAIL */}
                  <FormGroup row>
                    <Label for="winners_email" sm={3}>
                      Winner's Email
                    </Label>
                    <Col sm={6}>
                      <Input
                        type="email"
                        name="winners_email"
                        placeholder="winner's email"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* WINNERS PHONE */}
                  <FormGroup row>
                    <Label for="winners_phone" sm={3}>
                      Winner's Phone
                    </Label>
                    <Col sm={6}>
                      <Input
                        type="phone"
                        name="winners_phone"
                        placeholder="winner's mobile"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* QUANTIITY */}
                  <FormGroup row>
                    <Label for="quantity" sm={3}>
                      Quantity
                    </Label>
                    <Col sm={1}>
                      <Input
                        type="text"
                        name="quantity"
                        placeholder="qty"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* BUTTON */}
                  <FormGroup check row>
                    <Col sm={{ size: 9, offset: 3 }}>
                      <Button onClick={this.onSubmit}>Gift Ticket</Button>
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
  gift: state.gift,
  mt: state.movieTickets,
  cinema: state.cinemas,
});

export default connect(
  map_state_to_props,
  { getMoviesTickets, getCinemas, addGift },
)(withRouter(GiftTicket));
