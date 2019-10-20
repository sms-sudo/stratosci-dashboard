import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Background from '../earth-horizon.jpg';

class Main extends Component {
    render() {
        return (
            <div style={{ width: '100vw', height: '100vh', backgroundImage: `url(${Background})` }}>
                <div style={{margin: 'auto', paddingTop: '35vh'}}>
                <h1 style={{ fontFamily: 'Consolas', color: 'white', fontSize: '6rem'}}>STRATOSCI</h1>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Choose a balloon
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="dashboard">Australia</Dropdown.Item>
                        <Dropdown.Item href="#/dashboard">Timmins</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            </div>
        );
    }
}

export default Main;