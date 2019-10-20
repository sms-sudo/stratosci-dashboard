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
const intervalVal = 100;
class Dashboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      horizon: 37,
      nadir: 93,
      time: new Date(2017, 3, 9, 5,40,49),
      hCount: 10,
      nCount: 0,
      pause: false,
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }
  handlePlay(){
    prevTime = new Date();
    this.interval = setInterval(() => {
      this.setState({
        time: new Date(this.state.time.getTime() + intervalVal* 600),
        hCount: this.state.hCount + 1,
        nCount: this.state.nCount + 1,
      });
      if(horizonImgId > horizonImgEndId || this.state.pause){
        clearInterval(this.interval);
      }
      if(this.state.count !== 0 && this.state.nCount % 20 === 0){
        this.setState({nadir: this.state.nadir + 1})
      }else if(this.state.count !== 0 && this.state.hCount % 20 === 0) {
        this.setState({horizon: this.state.horizon + 1})
      }
    }, intervalVal)
  }

  handlePause() {
    this.setState({pause: true});
    clearInterval(this.interval);
  }
  componentDidMount() {
    
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const {t} = this.state;
    return (
      <Container fluid={true} style={{ width: "100vw", padding: 0, margin: 0, color: "white"}}>
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
              mapElement={<div style={{ height: `80vh`, width: `65vw`, padding: 0, margin: 0 }} />}
            /></Col>
          <Col xs={4}>
            <Row>
              <img src={process.env.PUBLIC_URL + "/nadir/" + this.state.nadir + ".jpg"} style={{ width: "33vw", height: "40vh", padding: 0, margin: 0 }} />
            </Row>
            <Row>
              <img src={process.env.PUBLIC_URL + "/horizon/" + this.state.horizon + ".jpeg"} style={{ width: "33vw", height: "40vh", padding: 0, margin: 0 }} />
            </Row>
          </Col>
        </Row>
        <Row style={{marginTop: '1rem'}}>
          
          <Col>
            <p>{"Time: " + this.state.time.getFullYear() + "/" + (this.state.time.getMonth() + 1) + "/" + 
            this.state.time.getDate() + " " + this.state.time.getHours() + ":" + this.state.time.getMinutes() 
            + ":" + this.state.time.getSeconds()}</p>
            <p>Altitude {} </p>
            <p>Temperature {}</p>
          </Col>
          
          <Col>
              <Row style={{alignContent: "center"}}>
                <Col xs={4}></Col>
                <Col xs={2}>
                  <Button onClick={this.handlePlay} variant="success">Play</Button>
              </Col>
              <Col xs={2}>
                  <Button onClick={this.handlePause} variant="danger">Pause</Button>
                </Col>
                <Col xs={4}></Col>
              </Row>
          </Col>
          <Col>
            <Button>Open Modal</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;