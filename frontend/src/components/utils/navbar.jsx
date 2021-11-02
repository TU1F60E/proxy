import * as React from 'react';
import {Button, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function MyNavbar() {
  return (
    <>
        <Navbar variant="dark" expand="lg" className="nav">
          <Container>
            <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Proxy
      </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/student">
                  Student
                </Nav.Link>
                <Nav.Link as={Link} to="/teacher">
                  Teacher
                </Nav.Link>
                <Nav.Link as={Link} to="/timetable">
                  Timetable
                </Nav.Link>
                <Nav.Link as={Link} to="/bugreport">
                  Bug Report
                </Nav.Link>
                <Nav.Link as={Link} to="/aboutus">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/me">
                  Personal Profile
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}
