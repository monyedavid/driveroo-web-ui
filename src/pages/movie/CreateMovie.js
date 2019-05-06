import Page from 'components/Page';
import React, { Component } from 'react';
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
import { createMovieState } from '../../initializers';
import { addMovieTicket } from '../../redux/actions/movies';

class CreateMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...createMovieState,
    };
  }

  onChangePic = e => {
    this.setState({
      [e.target.name]: [e.target.files[0]],
    });
  };

  pictureDictionary = {
    artwork: true, // synopis image
    cardImage: true,
    bannerImage: true,
    featuredImage: true,
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.pictureDictionary[e.target.name]
      ? this.onChangePic(e)
      : this.setState({
          [e.target.name]: e.target.value,
        });
  };

  onSubmit = async e => {
    e.preventDefault();
    const mutable_state = {
      ...this.state,
    };

    delete mutable_state['artwork'];
    delete mutable_state['bannerImage'];
    delete mutable_state['cardImage'];
    delete mutable_state['featuredImage'];
    delete mutable_state['featured_check'];
    delete mutable_state['image_check'];

    const fd = new FormData();

    Object.keys(mutable_state).forEach(k => {
      fd.append(k, mutable_state[k]);
    });

    if (this.state.artwork !== '') {
      fd.append(
        'artwork',
        this.state.artwork['0'],
        this.state.artwork['0'].name,
      );
    }

    if (this.state.cardImage !== '') {
      fd.append(
        'cardImage',
        this.state.cardImage['0'],
        this.state.cardImage['0'].name,
      );
    }

    if (this.state.bannerImage !== '') {
      fd.append(
        'bannerImage',
        this.state.bannerImage['0'],
        this.state.bannerImage['0'].name,
      );
    }

    if (this.state.featuredImage !== '') {
      fd.append(
        'featuredImage',
        this.state.featuredImage['0'],
        this.state.featuredImage['0'].name,
      );
    }

    if (this.state.synopsisImage !== '') {
      fd.append(
        'synopsisImage',
        this.state.synopsisImage['0'],
        this.state.synopsisImage['0'].name,
      );
    }

    // perform action here douche_bag
    const { addMovieTicket, history } = this.props;

    addMovieTicket(fd, history);
  };

  render() {
    const { featured_check, image_check } = this.state;
    let featured_render;
    let image_render;

    image_check
      ? (image_render = (
          <React.Fragment>
            {/* 
                  CARD IMAGE */}
            <FormGroup row>
              <Label for="cardImage" sm={3}>
                Card Image
              </Label>
              <Col sm={9}>
                <Input type="file" name="cardImage" onChange={this.onChange} />
                <FormText color="muted">Image for card display</FormText>
              </Col>
            </FormGroup>

            {/* ARTWOK*/}
            <FormGroup row>
              <Label for="artwork" sm={3}>
                ArtWork
              </Label>
              <Col sm={9}>
                <Input type="file" name="artwork" />
                <FormText color="muted">Size: 100px by 100px</FormText>
              </Col>
            </FormGroup>

            {/* BANNER IMAGE */}
            <FormGroup row>
              <Label for="bannerImage" sm={3}>
                Banner Image
              </Label>
              <Col sm={9}>
                <Input
                  type="file"
                  name="bannerImage"
                  onChange={this.onChange}
                />
                <FormText color="muted">Size: 200px by 405px</FormText>
              </Col>
            </FormGroup>

            {/* SYNOPSIS IMAGE */}
            <FormGroup row>
              <Label for="synopsisImage" sm={3}>
                Synopsis Image
              </Label>
              <Col sm={9}>
                <Input
                  type="file"
                  name="synopsisImage"
                  onChange={this.onChange}
                />
                <FormText color="muted">Size: 200px by 405px</FormText>
              </Col>
            </FormGroup>
          </React.Fragment>
        ))
      : (image_render = <React.Fragment />);

    featured_check
      ? (featured_render = (
          <React.Fragment>
            {/* STARRING */}
            <FormGroup row>
              <Label for="featured" sm={3}>
                Starring
              </Label>
              <Col sm={9}>
                <Input type="text" name="featured" placeholder="starring" />
              </Col>
            </FormGroup>

            {/* FEATURED IMAGE  */}
            <FormGroup row>
              <Label for="featuredImage" sm={3}>
                Featured Image
              </Label>
              <Col sm={9}>
                <Input
                  type="file"
                  name="featuredImage"
                  onChange={this.onChange}
                />
                <FormText color="muted">Size: 450px by 560px</FormText>
              </Col>
            </FormGroup>
          </React.Fragment>
        ))
      : (featured_render = <React.Fragment />);
    return (
      <Page
        title="Create Movies"
        breadcrumbs={[{ name: 'Create Movie', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>Create a new movie</CardHeader>
              <CardBody>
                <Form>
                  {/* MOVIE TICKET NAME */}
                  <FormGroup row>
                    <Label for="name" sm={3}>
                      Movie Title
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="name"
                        placeholder="title of movie"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* SYNPOSIS || SUMMARY */}
                  <FormGroup row>
                    <Label for="summary" sm={3}>
                      Description/Synopsis
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="textarea"
                        name="summary"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* AGE RESTRICTION */}
                  <FormGroup row>
                    <Label for="ageRestriction" sm={3}>
                      Age Restriction
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="ageRestriction"
                        placeholder="age restriction"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* GENRE */}
                  <FormGroup row>
                    <Label for="genre" sm={3}>
                      Genre
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="genre"
                        placeholder="Genre - separate multiple genres by comma"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* DIRECTOR */}
                  <FormGroup row>
                    <Label for="director" sm={3}>
                      Director
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="director"
                        placeholder="movie director"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* YOUTUBE TRAILER */}
                  <FormGroup row>
                    <Label for="youtube_trailer" sm={3}>
                      Youtube Trailer
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="youtube_trailer"
                        placeholder="Trailer URL"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* RUNNING TIME */}
                  <FormGroup row>
                    <Label for="duration" sm={3}>
                      Running Time
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="duration"
                        placeholder="duration of movie"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/*IMAGE UPLOADS || CHECKBOX */}
                  <FormGroup row>
                    <Label for="checkboxFeatured" sm={3}>
                      Upload Images?
                    </Label>
                    <Col sm={{ size: 9 }}>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="image_check"
                            id="checkboxFeatured"
                            onClick={() => {
                              this.setState(previousState => ({
                                image_check: !previousState.image_check,
                              }));
                            }}
                          />{' '}
                          {this.state.image_check ? 'Yes' : 'No'}
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>

                  {image_render}

                  {/*FEATURED || CHECKBOX */}
                  <FormGroup row>
                    <Label for="checkboxFeatured" sm={3}>
                      Featured?
                    </Label>
                    <Col sm={{ size: 9 }}>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="featured_check"
                            id="checkboxFeatured"
                            onClick={() => {
                              this.setState(previousState => ({
                                featured_check: !previousState.featured_check,
                              }));
                            }}
                          />{' '}
                          {this.state.featured_check ? 'Yes' : 'No'}
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>

                  {featured_render}

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
                                available: previousState.available == 1 ? 0 : 1,
                              }));
                            }}
                          />{' '}
                          {this.state.available == 1 ? 'Yes' : 'No'}
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>

                  {/* PURCHASE COUNT */}
                  <FormGroup row>
                    <Label for="purchaseCount" sm={3}>
                      Number of tickets bought
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="purchaseCount"
                        placeholder="Purchae Count"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* VID  */}
                  <FormGroup row>
                    <Label for="vid" sm={3}>
                      VID
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="vid"
                        placeholder="VId --"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* NUMBER OF VIEWS */}
                  <FormGroup row>
                    <Label for="number_of_views" sm={3}>
                      Number of Views
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="number_of_views"
                        placeholder="Number of Views"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* FILMHOUSE_ID */}
                  <FormGroup row>
                    <Label for="filmhouse_id" sm={3}>
                      FILMHOUSE ID
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="filmhouse_id"
                        placeholder="Film House ID"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* BUTTON || CREATE MOVIE  */}
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
    );
  }
}

const map_state_to_props = state => ({
  movie: state.movieTickets,
});

export default connect(
  map_state_to_props,
  { addMovieTicket },
)(withRouter(CreateMovie));
