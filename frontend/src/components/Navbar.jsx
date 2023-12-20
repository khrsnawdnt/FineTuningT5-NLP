import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="font-weight-bold text-light">
          <span className="text-danger">K3</span> Summary Pro
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="mr-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/history" className="mr-3">History</Nav.Link>
            <Nav.Link as={Link} to="/profile" className="mr-3">Profile</Nav.Link>
            <Nav.Link as={Link} to="/about" className="mr-3">About App</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
