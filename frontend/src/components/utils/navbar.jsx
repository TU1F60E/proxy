import * as React from 'react';
import {Button, Navbar, Container} from 'react-bootstrap';

export default function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
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
        </Container>
      </Navbar>
    </>
  );
}
