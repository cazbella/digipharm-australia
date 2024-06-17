import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Header = () => {
    return (
        <div style={{ margin: '20px' }}>
            <Container fluid style={{ borderRadius: '15px', overflow: 'hidden', backgroundColor: '#fff' }}>
                <Navbar expand="lg" className="bg-body-tertiary navbar">
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="DigiPharm Australia" style={{ maxWidth: '270px', marginTop: '10px', marginBottom: '10px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto nav-links">
                            <Nav.Link href="#intro" className="me-5">Intro</Nav.Link>
                            <Nav.Link href="#benefits" className="me-5">Benefits</Nav.Link>
                            <Nav.Link href="#awards" className="me-5">Awards</Nav.Link>
                            <Nav.Link href="#smart-contracts" className="me-5">Smart Contracts</Nav.Link>
                        </Nav>
                        <button className="register-button ms-auto">Register your interest</button>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;
