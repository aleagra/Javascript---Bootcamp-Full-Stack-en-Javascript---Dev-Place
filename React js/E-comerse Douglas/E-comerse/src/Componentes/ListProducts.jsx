import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export function ListProducts() {
  return (
    <Navbar bg="light" expand="lg" className="categoria ">
      <Container className="text-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-categoria d-flex justify-content-start">
            <Link
              className="li-categoria d-flex justify-content-start"
              to="/AllProducts"
            >
              ALL PRODUCTS
            </Link>
          </Nav>
          <Nav className="nav-categoria">
            <Link className="li-categoria" to="/Hoddies">
              HODDIES
            </Link>
            <Link className="li-categoria" to="/Tshirts">
              T-SHIRTS
            </Link>
            <Link className="li-categoria" to="/Jeans">
              JEANS
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
