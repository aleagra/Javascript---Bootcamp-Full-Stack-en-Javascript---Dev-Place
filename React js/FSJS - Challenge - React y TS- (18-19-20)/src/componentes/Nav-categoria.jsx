import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function Categoria() {
  return (
    <Navbar bg="light" expand="lg" className="categoria ">
      <Container className="text-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-categoria">
            <Nav.Link href="/todoslosproductos">Todos los productos</Nav.Link>
            <Nav.Link className="li-categoria" href="/Celulares">
              Celulares
            </Nav.Link>
            <Nav.Link className="li-categoria" href="/Tablets">
              Tablet
            </Nav.Link>
            <Nav.Link className="li-categoria" href="/Televisores">
              Televisores
            </Nav.Link>
            <Nav.Link className="li-categoria" href="/productos">
              Ingresar producto
            </Nav.Link>
            <Nav.Link className="li-categoria" href="#">
              Contactanos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
