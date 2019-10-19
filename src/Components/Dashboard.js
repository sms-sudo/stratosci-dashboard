import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    Polyline
} from "react-google-maps";
import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

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

class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Row>
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
              mapElement={<div style={{ height: `80vh`, width: "100%" }} />}
            />
            </Row>
            <Row>
                <Button>Open Modal</Button>
            </Row>
            </Container>
        );
    }
}

export default Dashboard;