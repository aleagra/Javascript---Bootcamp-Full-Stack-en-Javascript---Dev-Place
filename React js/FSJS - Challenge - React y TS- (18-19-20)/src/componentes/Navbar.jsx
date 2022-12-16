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
import { Link } from "react-router-dom";
export function Appbar() {
  const [buscar, setBuscar] = useState("");
  const [first, setFirst] = useState("");
  var { totalItems } = useCart();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user.data.user);
    }
  }, []);
  const [toggle, setToggle] = useState(true);

  const handleSubmit = () => {
    console.log("form submitted ✅");
  };
  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log("User pressed: ", event.key);

      if (event.key === "Enter") {
        event.preventDefault();

        // 👇️ call submit function here
        handleSubmit();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      <div className="cuotes">
        <Navbar bg="light" expand="lg" className="login-o">
          <Link eventKey={2} to="/iniciar Sesion">
            {" "}
            {user === null ? (
              <span>Iniciar Sesion</span>
            ) : (
              <span>{user.nombre}</span>
            )}
          </Link>
        </Navbar>
      </div>
      <Navbar bg="light" expand="lg" className="section-nav">
        <Container fluid>
          <Link className="logo" to="/">
            e-commerce
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className=" justify-content-end">
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
              <Link to="/todoslosproductos">INDUMENTARIA</Link>
              <Link to="/productos">INGRESAR PRODUCTO</Link>
              <Link to="#">CONTACTANOS</Link>
              <Link to="#" className="icons">
                <Button className="btn-carrito">
                  <svg
                    onClick={() => setToggle(!toggle)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </Button>
              </Link>
              <Link className="li-logo icons" to="/Carrito">
                <Button className="btn-carrito" to="/Carrito">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span className="shop-contador">
                    {!user === null ? (totalItems = 0) : totalItems}
                  </span>
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {!toggle && (
        <div className="search">
          <input
            type="Search"
            className="input-search"
            placeholder="BUSCAR PRODUCTOS..."
            value={buscar}
            onChange={(event) => {
              setFirst(event.target.value);
              setBuscar(event.target.value);
            }}
          />
          <i
            className="fas fa-times close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
      )}
      {/* <Navbar
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
      </Navbar> */}
    </>
  );
}
