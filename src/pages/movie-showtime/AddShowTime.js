import Page from 'components/Page';
import moment from 'moment';
import cd from 'clean-deep';
import LoadSpinner from '../../components/common/spinner';
import { mongodateFormatter } from '../../utils/gendate';
import spinner_image from '../../utils/spin.gif';
import React, { Component } from 'react';
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
  Spinner,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addShowTIme, ctg } from '../../initializers';
import DatePicker from 'react-date-picker';
import { getMovieTicket } from '../../redux/actions/movies';
import { getCinemas } from '../../redux/actions/cinemas';
import { newShowTime } from '../../redux/actions/showtime';

class AddShowTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...addShowTIme,
      classes: [], // ticketTYpes!!
      showtimes: [], // showingAt!!
      cinema_location: [],
    };
  }

  componentDidMount() {
    const {
      match: { params },
      getMovieTicket,
      getCinemas,
    } = this.props;
    // GET CINEMAS
    getCinemas();
    // GET TICKET DETAILS
    if (params._id) {
      getMovieTicket(params._id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mt.movieTicket === null && !nextProps.mt.loading) {
      this.props.history.push('/lost-bot'); // create page
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

  addAdditionalShowtime = e => {
    e.preventDefault();
    if (this.state.date == '' || this.state.time == '') return null;

    let showtimes = this.state.showtimes;
    const len = this.state.showtimes.length;
    showtimes.push({
      key: len,
      date: this.state.date,
      time: this.state.time,
    });
    this.setState({
      showtimes,
      date: '',
      time: '',
    });
  };

  addAdditionalClassess = e => {
    e.preventDefault();
    if (this.state.price == '' || this.state.class == '') return null;
    let classes = this.state.classes;
    const len = this.state.classes.length;
    classes.push({
      key: len,
      price: this.state.price,
      class: this.state.class,
    });
    this.setState({
      classes,
      class: '',
      price: '',
    });
  };

  calenderonChange = date => this.setState({ date });

  onSubmit = e => {
    e.preventDefault();
    const { newShowTime, history } = this.props;
    const stateObjectCopy = {
      ...this.state,
      sold: 2,
      ticketID: this.props.match.params._id,
    };

    delete stateObjectCopy['class'];
    delete stateObjectCopy['date'];
    delete stateObjectCopy['time'];
    delete stateObjectCopy['price'];

    // Generate UID
    stateObjectCopy['cinema_location'].forEach(obj => {
      if (obj.name === stateObjectCopy['cinema']) {
        stateObjectCopy['uid'] = obj._id;
      }
    });

    delete stateObjectCopy['cinema'];
    delete stateObjectCopy['cinema_location'];

    // generate showing AT mongodate array
    let newdateArray = [];
    stateObjectCopy['showtimes'].forEach((st, i) => {
      const formattedDate = mongodateFormatter(st.date, st.time);
      newdateArray.push({ date: formattedDate, i });
    });

    stateObjectCopy['showtimes'] = newdateArray;

    // generate ticket type object array  {class : price}
    let newTicketTypeArray = [];
    stateObjectCopy['classes'].forEach((st, i) => {
      newTicketTypeArray.push({ class: st.class, price: st.price });
    });

    stateObjectCopy['classes'] = newTicketTypeArray;
    newShowTime(stateObjectCopy, history);
  };

  render() {
    const {
      mt: { movieTicket, loading },
    } = this.props;

    let showtimecontent;
    let allAdditionalClasses, allAdditionalShowtimes;

    const { classes, showtimes } = this.state;
    allAdditionalShowtimes = showtimes.map(st => {
      return (
        <FormGroup key={st.key} row className="align-items-center">
          <Col sm={{ size: 1, offset: 3 }}>Date:</Col>
          <Col sm={2}>
            <DatePicker disabled={true} value={st.date} />
          </Col>
          <Col sm={1}>Time:</Col>
          <Col sm={2}>
            <Input type="text" disabled={true} placeholder={st.time} />
          </Col>
          <Col sm={2} style={{ fontSize: '.8rem' }}>
            <a href="#">remove</a>
          </Col>
        </FormGroup>
      );
    });

    allAdditionalClasses = classes.map(classObject => {
      return (
        <FormGroup key={classObject.key} row className="align-items-center">
          <Col sm={{ size: 1, offset: 3 }}>Class:</Col>
          <Col sm={2}>
            <Input
              type="text"
              disabled={true}
              placeholder={classObject.class}
            />
          </Col>
          <Col sm={1}>Price:</Col>
          <Col sm={2}>
            <Input
              type="text"
              disabled={true}
              placeholder={classObject.price}
            />
          </Col>
          <Col sm={2} style={{ fontSize: '.8rem' }}>
            <a href="#">remove</a>
          </Col>
        </FormGroup>
      );
    });

    // const { name } = movieTicket;
    loading || movieTicket === null
      ? (showtimecontent = <LoadSpinner src={spinner_image} />)
      : (showtimecontent = (
          <Page
            title="Add Showtime"
            breadcrumbs={[{ name: movieTicket.name, active: true }]}
          >
            <Row>
              <Col xl={12} lg={12} md={12}>
                <Card>
                  <CardHeader>Movie Title: {movieTicket.name}</CardHeader>
                  <CardBody>
                    <Form>
                      {/* GET CINEMAS */}
                      <FormGroup row>
                        <Label for="cinema" sm={3}>
                          Cinema
                        </Label>
                        <Col sm={8}>
                          <Input
                            type="select"
                            name="cinema"
                            onChange={this.onChange}
                          >
                            {this.state.cinema_location.length > 1 ? (
                              this.state.cinema_location.map((obj, i) => {
                                return <option key={i}>{obj.name}</option>;
                              })
                            ) : (
                              <option key={101}>
                                Currently Loading Cinemas 🤓🤓🤓🤓🤓🤓😘
                              </option>
                            )}
                          </Input>
                        </Col>
                      </FormGroup>

                      {/* ADD SHOWING TIMES */}
                      <FormGroup row className="align-items-center">
                        <Label for="age-restriction" sm={3}>
                          Showing Times
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
                            value={this.state.time}
                            onChange={this.onChange}
                          />
                        </Col>
                        <Col sm={2}>
                          <a href="#" onClick={this.addAdditionalShowtime}>
                            {' '}
                            Add Time{' '}
                          </a>
                        </Col>
                      </FormGroup>

                      {allAdditionalShowtimes}

                      {/* TICKET CLSS */}
                      <FormGroup row>
                        <Label for="Class-Definition" sm={3}>
                          Ticket Classes
                        </Label>
                        <Col sm={1}>Class:</Col>
                        <Col sm={2}>
                          <Input
                            type="text"
                            name="class"
                            placeholder={ctg()}
                            value={this.state.class}
                            onChange={this.onChange}
                          />
                        </Col>
                        <Col sm={1}>Price:</Col>
                        <Col sm={2}>
                          <Input
                            type="text"
                            name="price"
                            placeholder="🤑🤑🤑"
                            value={this.state.price}
                            onChange={this.onChange}
                          />
                        </Col>
                        <Col sm={2}>
                          <a href="#" onClick={this.addAdditionalClassess}>
                            {' '}
                            Add Class{' '}
                          </a>
                        </Col>
                      </FormGroup>

                      {allAdditionalClasses}

                      <FormGroup row>
                        <Label for="limit" sm={3}>
                          Limit
                        </Label>
                        <Col sm={1}>
                          <Input
                            type="text"
                            name="limit"
                            placeholder="limit"
                            onChange={this.onChange}
                          />
                        </Col>
                      </FormGroup>

                      {/*AVAILABLE|| CHECKBOX */}
                      <FormGroup row>
                        <Label for="checkboxFeatured" sm={3}>
                          Available?
                        </Label>
                        <Col sm={{ size: 9 }}>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="checkbox"
                                name="available"
                                id="checkboxFeatured"
                                onClick={() => {
                                  this.setState(previousState => ({
                                    available:
                                      previousState.available == 1 ? 0 : 1,
                                  }));
                                }}
                              />{' '}
                              {this.state.available == 1 ? 'Yes' : 'No'}
                            </Label>
                          </FormGroup>
                        </Col>
                      </FormGroup>

                      <FormGroup check row>
                        <Col sm={{ size: 9, offset: 3 }}>
                          <Button onClick={this.onSubmit}>Create Movie</Button>
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Page>
        ));

    return <React.Fragment>{showtimecontent}</React.Fragment>;
  }
}

const map_state_to_props = state => ({
  mt: state.movieTickets,
  cinema: state.cinemas,
});
export default connect(
  map_state_to_props,
  { getMovieTicket, getCinemas, newShowTime },
)(AddShowTime);
