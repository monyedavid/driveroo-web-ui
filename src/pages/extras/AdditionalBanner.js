import React from 'react';
import { Col, FormGroup, FormText, Input, Label } from 'reactstrap';

const AdditionalBanner = () => {
  return (
    <div style={{ marginTop: '3rem' }}>
      <hr />
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
          <Input type="text" name="movie-page-link" placeholder="" />
        </Col>
      </FormGroup>
    </div>
  );
};

export default AdditionalBanner;
