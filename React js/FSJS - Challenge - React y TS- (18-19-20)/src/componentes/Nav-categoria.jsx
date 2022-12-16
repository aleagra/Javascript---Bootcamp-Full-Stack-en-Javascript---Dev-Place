import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export function Categoria() {
  return (
    <Navbar bg="light" expand="lg" className="categoria ">
      <Container className="text-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-categoria d-flex justify-content-start">
            <Link
              className="li-categoria d-flex justify-content-start"
              to="/todoslosproductos"
            >
              VER TODOS LOS PRODUCTOS
            </Link>
          </Nav>
          <Nav className="nav-categoria">
            <Link className="li-categoria" to="/Celulares">
              BUZOS
            </Link>
            <Link className="li-categoria" to="/Tablets">
              REMERAS
            </Link>
            <Link className="li-categoria" to="/Televisores">
              PANTALONES
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
