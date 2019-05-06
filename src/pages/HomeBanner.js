import Page from 'components/Page';
import React, { Component } from 'react';
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
import AdditionalBanner from './extras/AdditionalBanner';
import randomString from 'randomstring';

class HomeBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      banners: []
    }
  }

  addBanner = (e) => {
    let banners = this.state.banners;

    banners.push({
      key: randomString.generate({ length: 8 })
    });

    this.setState({
      banners
    })
  }

  render() {
    const allBanners = this.state.banners;
    let additionalBanners;
    additionalBanners = allBanners.map(banner => {
      return (<AdditionalBanner key={banner.key} />);
    })

    return (
      <Page
        title="Update Home Banner"
        breadcrumbs={[{ name: 'Update Home Banner', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>Home Banners</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label for="banner-img" sm={3}>
                      Banner Image
                    </Label>
                    <Col sm={8}>
                      <Input type="file" name="banner-img" />
                      <FormText color="muted">Size: 450px by 200px</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="synopsis" sm={3}>
                      Synopsis
                    </Label>
                    <Col sm={8}>
                      <Input type="textarea" name="synopsis" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="tags" sm={3}>
                      Tags
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="tags"
                        placeholder="Tags - separate tags by comma"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="youtube-trailer-url" sm={3}>
                      Youtube Trailer URL
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="youtube-trailer-url"
                        placeholder="E.g https://youtube.com/u876dhbcd"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="movie-page-link" sm={3}>
                      Movie Page Link
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="movie-page-link"
                        placeholder="https://movies.nairabox.com/movies/5c3d9df78ead0e0d6d8b4571"
                      />
                    </Col>
                  </FormGroup>

                  { additionalBanners }

                  <FormGroup check row>
                    <Col sm={{ size: 9, offset: 3 }}>
                      <a href="#" onClick={this.addBanner}>Add More Banner</a>
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 9, offset: 3 }}>
                      <Button>Create Banner</Button>
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

export default HomeBanner;
