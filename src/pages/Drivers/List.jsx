import Page from 'components/Page';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Table,
  Row,
  Button,
} from 'reactstrap';
import DriverItem from 'components/common/List/DriverItem';
import Dialogue from 'components/common/Modal/a.index';
import DialogueTitle from 'components/common/Modal/Title';
import DialogueContent from 'components/common/Modal/Content';
import LoadSpinner from 'components/common/spinner';
import spin from 'utils/spin.gif';
import DialogueAction from 'components/common/Modal/Action';
import { allDrivers, setDriver } from 'redux/actions/drivers';

class ListMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }

  toggle(_id) {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  close() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  componentDidMount() {
    const { auth, allDrivers } = this.props;
    //if (auth.isAuthenticated) allDrivers(auth.user.token);
    allDrivers(auth.user.token);
  }

  render() {
    const {
      driver: { loading, drivers, driver },
      setDriver,
    } = this.props;

    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: 'absolute', top: '15px', right: '15px' }}
        onClick={this.close}
      >
        &times;
      </button>
    );

    let dialogueTitle;
    let dialogueContent;
    let driverDialogue;
    let dialogueAction;

    if (driver && !loading) {
      // populates data table loaidng a merchant??
      dialogueTitle = (
        <DialogueTitle
          simpleContext={
            driver === null || driver === undefined ? '' : driver.name
          }
        />
      );

      dialogueContent = (
        <DialogueContent
          contextComponent={
            driver === null ? <LoadSpinner src={spin} /> : <h1>grahsnsl</h1>
          }
        />
      );
      dialogueAction = (
        <DialogueAction
          contextComponent={
            <Button color="secondary" onClick={this.close}>
              Cancel
            </Button>
          }
        />
      );

      driverDialogue = (
        <Dialogue
          DialogTitle={dialogueTitle}
          DialogContent={dialogueContent}
          DialogActions={dialogueAction}
          isOpen={this.state.modal}
          toggle={this.toggle}
          // className={}
          externalCloseBtn={externalCloseBtn}
        />
      );
    }

    let list_driver_items;

    loading === true && drivers == null
      ? (list_driver_items = <React.Fragment />)
      : loading === false && drivers == null
      ? (list_driver_items = <React.Fragment />)
      : drivers.length > 0
      ? (list_driver_items = drivers.map((driver, i) => (
          <DriverItem
            index={i}
            key={driver._id}
            dd={driver}
            history={this.props.history}
            setDriver={setDriver}
          />
        )))
      : (list_driver_items = <h4>No Drivers where found!</h4>);

    return (
      <React.Fragment>
        {driverDialogue}
        <Page title="Drivers" breadcrumbs={[{ name: 'Drivers', active: true }]}>
          <Row>
            <Col xl={12} lg={12} md={12}>
              <Card>
                <CardHeader>List all movies</CardHeader>
                <CardBody>
                  <Col>
                    <Card body>
                      <Table striped={true} id="driverstable">
                        {/* HEAD */}
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Avatar</th>
                            <th>Full name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Driver Rating</th>
                            <th>Last Seen</th>
                            <th>Home Addreses</th>
                            <th>Driver Details</th>
                          </tr>
                        </thead>

                        {/* DYNAMIC BODY */}
                        {list_driver_items}
                        {/* TRACK */}
                      </Table>
                    </Card>
                  </Col>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Page>
      </React.Fragment>
    );
  }
}

const map_state_to_props = state => ({
  auth: state.auth,
  driver: state.driver,
  loading: state.loading,
});

export default connect(
  map_state_to_props,
  { allDrivers, setDriver },
)(withRouter(ListMovies));
