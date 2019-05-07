import React, { Component } from 'react';

import {
    Button, Card, CardBody, Col,
    Form, FormGroup, Input, Label, Row,
} from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLocations } from '../redux/actions/locations';
import { getShowtimes } from '../redux/actions/showtimes-linking'

class CinemaLocations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cinemaHouse: "filmhouse",
            cinemaLocation: '',
        }
    }

    onCinemaHouseSelect = (e) => {
        this.setState({ cinemaHouse: e.target.value });
    }

    onCinemaLocationSelect = (e) => {
        console.log('cinemaLocation: ', e.target.value)
        this.setState({ cinemaLocation: e.target.value });
        this.props.getShowtimes(e.target.value);
    }

    componentDidMount() {
        this.props.getLocations();
    }

    render() {
        let { cinemaHouse, cinemaLocation, status } = this.state;
        let { locations, showtimesReducer, showtimes } = this.props;
        let filmhouseLocations = locations && locations.filter((item, index, arr) => {

            let { name } = item;
            if (!name) return null;
            console.log('cinemaHouse to filter: ', cinemaHouse)
            return item.name.toLowerCase().indexOf(cinemaHouse) !== -1;
        })

        return (
            <Row>
                <Col xl={12} lg={12} md={12}>
                    <Card>
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
                                    <Label for="phone" sm={3}>
                                        Select Location
                                </Label>
                                    <Col sm={6}>
                                        <Input type="select"
                                            onChange={this.onCinemaLocationSelect}
                                            value={cinemaLocation} name="select-location" >
                                            <option value=''>Select location</option>
                                            {
                                                filmhouseLocations.map((item, ind, arr) => {
                                                    return (<option key={item._id}
                                                        value={item.siteId}>{item.name}</option>)
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup check row>
                                    <Col sm={{ size: 9, offset: 3 }}>
                                        <Button>

                                            {
                                                showtimesReducer.fetching ? '... loading... ' :
                                                    (!showtimesReducer.fetched ? 'Get Showtimes' :
                                                        (showtimesReducer.fetched ? 'done successfull' :
                                                            (showtimesReducer.error ? `failed ${
                                                                showtimesReducer.error.message}}` : '')
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

        )

    }

}


function mapStateToProps(state) {
    let { locationsReducer, showtimesReducer } = state;
    let { locations } = locationsReducer;
    let { showtimes } = showtimesReducer;

    return {
        locations, showtimes, showtimesReducer, locationsReducer
    }
}
function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({ getLocations, getShowtimes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CinemaLocations);