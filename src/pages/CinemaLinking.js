import Page from 'components/Page';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Card, CardBody, CardHeader, Col,
  Form, FormGroup, FormText, Input,
  Label, Row,
} from 'reactstrap';

import CinemaLocations from './CinemaLinkingLocations';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFilmhouseMovies } from '../redux/actions/movies-linking.js';
import { getNairaboxMovies, postFilmhouseIdTicketId } from '../redux/actions/nairaboxMovies';

class CinemaLinking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemaHouse: "filmhouse",
      searchString: "",
      filtered: [],

      selectedNairaboxMovie: '',
    }
  }

  onCinemaHouseSelect = (e) => {

    let { getFilmhouseMovies } = this.props;
    this.setState({ cinemaHouse: e.target.value });
    console.log('selected: ', e.target.value)
    this.setState({ searchString: '' });
    this.setState({ filtered: [] });
    getFilmhouseMovies(e.target.value)

  }

  onNairaboxSelect = (e) => {

    //console.log('e: ', JSON.stringify(e, null, 4))
    console.log('e.target.value: ', e.target.value);
    console.log('e: ', e);
    this.setState({ selectedNairaboxMovie: e.target.value });
    //getFilmhouseMovies(e.target.value)

  }

  onLinkCinemas = () => {
    let { filtered, selectedNairaboxMovie, cinemaHouse } = this.state;
    let toMatchCinemaMovieId = filtered[0].id;
    let nairaboxMovieId = selectedNairaboxMovie;
    console.log(`toMatchCinemaMovieId: ${toMatchCinemaMovieId}, nairaboxMovieId: ${nairaboxMovieId} `);
    this.props.postFilmhouseIdTicketId(toMatchCinemaMovieId, nairaboxMovieId,
      { filmhouseid: toMatchCinemaMovieId, ticketId: nairaboxMovieId }, cinemaHouse);

  }


  onSearchString = (e) => {
    let { value } = e.target;
    this.setState({ searchString: value });
    this.filterDown(value);
  }

  filterDown = (val) => {
    let { filmhouseMovies } = this.props;

    let filteredDown = filmhouseMovies && filmhouseMovies.filter((item, index, arr) => {
      return item.title.toLowerCase()
        .indexOf(val.toLowerCase()) !== -1
    })

    this.setState({ filtered: filteredDown });

  }

  componentDidMount() {

    let { getFilmhouseMovies, getNairaboxMovies } = this.props;
    console.log('this.state.cinemaHouse: ', this.state.cinemaHouse)
    getFilmhouseMovies(this.state.cinemaHouse);
    getNairaboxMovies();

  }

  render() {


    let { cinemaHouse, searchString, selectedNairaboxMovie, filtered } = this.state;
    let { nairaboxMovies, nairaboxMoviesReducer } = this.props;

    let nairaboxMoviesOptions = nairaboxMovies[0] && nairaboxMovies.map((item, ind) => {
      return <option value={item.id} key={item.id + '-' + ind}>{item.title}</option>
    })


    return (
      <Page
        title="Cinema Linking"
        breadcrumbs={[{ name: 'Cinema Linking', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>Cinema Linking</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label for="email" sm={3}>
                      Select Cinema
                    </Label>
                    <Col sm={6}>
                      <Input type="select" name="select-cinema"
                        value={cinemaHouse}
                        onChange={this.onCinemaHouseSelect}
                      >
                        <option value="filmhouse">Filmhouse Cinema</option>
                        <option value="genesis">Genesis Cinema</option>
                      </Input>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="email" sm={3}>
                      Enter Movie
                    </Label>
                    <Col sm={4}>
                      <Input type="text" name="cinema-movie"
                        value={searchString}
                        onChange={this.onSearchString}

                        list="theFiltered"
                      />

                      <datalist id="theFiltered">
                        {
                          filtered && filtered.map((item, index) => {
                            return <option key={item.id + '-' + index} value={item.title} />
                          })
                        }
                      </datalist>


                    </Col>
                    <Col sm={2}>
                      <Button>Search</Button>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="phone" sm={3}>
                      Result
                    </Label>
                    <Col sm={6}>
                      {this.state.filtered[0] && this.state.filtered[0].title}
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="phone" sm={3}>
                      Nairabox Movie
                    </Label>
                    <Col sm={6}>
                      <Input type="select" name="select-movie"
                        value={selectedNairaboxMovie}
                        onChange={this.onNairaboxSelect}
                      >
                        {nairaboxMoviesOptions}

                      </Input>
                    </Col>
                  </FormGroup>

                  <FormGroup check row>
                    <Col sm={{ size: 9, offset: 3 }}>
                      <Button onClick={this.onLinkCinemas}>
                        {
                          nairaboxMoviesReducer.fetching ? '... loading... ' :
                            (!nairaboxMoviesReducer.doneId ? 'Link Cinemas' :
                              (nairaboxMoviesReducer.fetched ? 'done successfull' :
                                (nairaboxMoviesReducer.error ? `failed ${
                                  nairaboxMoviesReducer.error.message}}` : '')
                              ))
                        }



                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <CinemaLocations />
      </Page>
    );
  }



};

function mapStateToProps(state) {
  //console.log('state.nairaboxMoviesReducer: ', JSON.stringify(state.nairaboxMoviesReducer, null, 4));
  let { filmHouseMoviesReducer, nairaboxMoviesReducer } = state;
  let { movies } = filmHouseMoviesReducer;
  return {
    filmhouseMovies: movies,
    nairaboxMovies: nairaboxMoviesReducer.movies,
    nairaboxMoviesReducer
  }
}
function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({ getFilmhouseMovies, getNairaboxMovies, postFilmhouseIdTicketId }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CinemaLinking);
