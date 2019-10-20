import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline
} from "react-google-maps";
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const FRAMESPERSEC = 2;
const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
      <GoogleMap
          defaultZoom={12}
          defaultCenter={{ lat: 43.656761, lng: -79.380727 }}
      >
          {props.showDirections ? props.line : null}
          {props.or ? (
              <Marker position={{ lat: props.or[0], lng: props.or[1] }} />
          ) : null}
          {props.des ? (
              <Marker position={{ lat: props.des[0], lng: props.des[1] }} />
          ) : null}
      </GoogleMap> 
  ))
);

let prevTime;
let horizonImgId = 37;
let horizonImgEndId = 107;
let nadirImgId = 93;
let nadirImgEndId = 163;

class Dashboard extends Component {
  constructor() {
      super();
      prevTime = new Date();
      this.state = {
          horizon: "/horizon/37.jpeg",
          nadir: "/nadir/93.jpg",
      }
  }
  componentDidMount() {
      this.setState({})
  }
  render() {
          return (
              <Container fluid={true} style={{ width: "100vw", padding: 0, margin: 0 }}>
                  <Row>
                      <Col xs={8}>
                          <MapWithAMarker
                              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4IOJ-wodRVvaKgYIHTyhDnt3WtVCAGNE&v=3.exp&libraries=geometry,drawing,places"
                              loadingElement={
                                  <div
                                      style={{
                                          height: "100vh",
                                          width: "100%",
                                          display: "flex",
                                          flexFlow: "row nowrap",
                                          justifyContent: "center",
                                          padding: 0
                                      }}
                                  />
                              }
                              containerElement={
                                  <div style={{ width: "100%", marginLeft: 0, marginRight: 0 }} />
                              }
                              mapElement={<div style={{ height: `80vh`, width: `65vw`,padding:0,margin:0 }} />}
                          /></Col>
                      <Col xs={4}>
                          <Row>
                              <img src={process.env.PUBLIC_URL + this.state.nadir} style={{ width:"33vw", height: "40vh", padding:0, margin:0}}/>
                          </Row>
                          <Row>
                              <img src={process.env.PUBLIC_URL + this.state.horizon} style={{ width:"33vw", height: "40vh", padding:0, margin:0}}/>
                          </Row>
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                          <Button>Open Modal</Button></Col>
                      <Col>
                          <p>Time {}</p>
                          <p>Altitude {} </p>
                          <p>Temperature {}</p>
                      </Col>
                  </Row>
              </Container>
          );
  }
}

export default Dashboard;