import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




export function JustifiedExample() {
    return(
        <>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">CHALLENGE 18</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">productos</Nav.Link>
            <Nav.Link href="#pricing">general</Nav.Link>
            <Nav.Link href="#pricing">preguntas frecuentes</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Registrarse</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Iniciar sesion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  
  </>
  );
}