import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import nike from "./img/nike.png";
import carrito from "./img/carrito.png";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
export function Appbar() {
  const [buscar, setBuscar] = useState("");
  var { totalItems } = useCart();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user.data.user);
    }
  }, []);
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
            <Nav>
              <Nav.Link className="li-logo" href="/">
                <img className="logo" src={nike} alt="" />
              </Nav.Link>
            </Nav>
            <div>
              <input
                onChange={(e) => setBuscar(e.target.value)}
                value={buscar}
                type="Search"
                aria-label="Search"
                placeholder="BUSCAR PRODUCTOS "
              />

              <a href={"/Search/" + buscar}>
                <button variant="outline-success" class="search">
                  <i className="fas fa-search"></i>
                </button>
              </a>
            </div>
            <Nav>
              <Nav.Link className="login" eventKey={2} href="/iniciar Sesion">
                {" "}
                {user === null ? (
                  <span>Iniciar Sesion</span>
                ) : (
                  <span>{user.nombre}</span>
                )}
              </Nav.Link>
            </Nav>
            <Nav.Link className="li-logo" href="#features">
              <button className="container-btn-shop">
                <Button className="btn-carrito" href="/Carrito">
                  <img className="carrito-icon" src={carrito} alt="" />
                  <span className="shop-contador">
                    {!user === null ? (totalItems = 0) : totalItems}
                  </span>
                </Button>
              </button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
