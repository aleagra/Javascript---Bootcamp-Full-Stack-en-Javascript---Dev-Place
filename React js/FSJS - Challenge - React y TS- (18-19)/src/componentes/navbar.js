import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import nike from "./img/nike.png";
import Form from "react-bootstrap/Form";
import carrito from "./img/carrito.png";

export function JustifiedExample() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="navbar"
      >
        <Container className="nav">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="li-logo" href="#features">
                <img className="logo" src={nike} alt="" />
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="BUSCAR PRODUCTOS "
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                Iniciar sesion
              </Nav.Link>
            </Nav>
            <Nav.Link className="li-logo" href="#features">
              <img className="carrito" src={carrito} alt="" />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
