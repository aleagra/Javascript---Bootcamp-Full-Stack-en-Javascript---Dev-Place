import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" className="categoria ">
      <Container className="text-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-categoria">
            <Nav.Link href="#home">Todos los productos</Nav.Link>
            <Nav.Link className="li-categoria" href="#home">
              Celulares
            </Nav.Link>
            <Nav.Link className="li-categoria" href="#link">
              Tablet
            </Nav.Link>
            <Nav.Link className="li-categoria" href="#link">
              Televisores
            </Nav.Link>
            <Nav.Link className="li-categoria" href="#link">
              Tablet
            </Nav.Link>
            <Nav.Link className="li-categoria" href="#link">
              Televisores
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
