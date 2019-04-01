import Page from 'components/Page';
import React from 'react';
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

const CreateMovie = () => {
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
                <FormGroup row>
                  <Label for="movie-title" sm={3}>
                    Movie Title
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="movie-title"
                      placeholder="title of movie"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="synopsis" sm={3}>
                    Description/Synopsis
                  </Label>
                  <Col sm={9}>
                    <Input type="textarea" name="synopsis" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="age-restriction" sm={3}>
                    Age Restriction
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="age-restriction"
                      placeholder="age restriction"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="genre" sm={3}>
                    Genre
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="genre"
                      placeholder="Genre - separate multiple genres by comma"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="director" sm={3}>
                    Director
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="director"
                      placeholder="movie director"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="youtube-trailer" sm={3}>
                    Youtube Trailer
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="youtube-trailer"
                      placeholder="trailer URL"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="running-time" sm={3}>
                    Running Time
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="running-time"
                      placeholder="duration of movie"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="card-img" sm={3}>
                    Card Image
                  </Label>
                  <Col sm={9}>
                    <Input type="file" name="card-img" />
                    <FormText color="muted">Image for card display</FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="synopis-img" sm={3}>
                    Synopsis Image
                  </Label>
                  <Col sm={9}>
                    <Input type="file" name="synopis-img" />
                    <FormText color="muted">Size: 100px by 100px</FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="banner-img" sm={3}>
                    Banner Image
                  </Label>
                  <Col sm={9}>
                    <Input type="file" name="banner-img" />
                    <FormText color="muted">Size: 200px by 405px</FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="featured-img" sm={3}>
                    Featured Image
                  </Label>
                  <Col sm={9}>
                    <Input type="file" name="featured-img" />
                    <FormText color="muted">Size: 450px by 560px</FormText>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="checkbox2" sm={3}>
                    Is it Featured?
                  </Label>
                  <Col sm={{ size: 9 }}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" /> Yes
                      </Label>
                    </FormGroup>
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
};

export default CreateMovie;
