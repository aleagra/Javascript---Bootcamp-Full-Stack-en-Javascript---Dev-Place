import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import nike from "./img/nike.png";
import Form from "react-bootstrap/Form";
import carrito from "./img/carrito.png";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
export function Appbar() {
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
            <Nav >
              <Nav.Link className="li-logo" href="/">
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
              <Nav.Link className="login" eventKey={2} href="/iniciar Sesion    ">
                Iniciar sesion
              </Nav.Link>
            </Nav>
            <Nav.Link className="li-logo" href="#features">
            <Button className="carrito-button">
             <Badge className="badge" ><img className="carrito" src={carrito} alt="" />1</Badge>
           </Button>
           
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
