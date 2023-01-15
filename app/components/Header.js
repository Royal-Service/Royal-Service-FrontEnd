import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import Logo from '../assets/Logo.png'

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            alt="logo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            
            <Nav.Link href="#support">Support</Nav.Link>
            <Nav.Link href="/afterlogin">About</Nav.Link>
          </Nav>
          <Button className="d-flex me-2" variant="outline-success">Log in</Button>
          <Button className="d-flex me-2" variant="outline-success">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
