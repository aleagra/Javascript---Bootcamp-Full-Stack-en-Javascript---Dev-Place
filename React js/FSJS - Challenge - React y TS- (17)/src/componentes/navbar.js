import React from 'react'
import Nav from 'react-bootstrap/Nav'
import "bootstrap/dist/css/bootstrap.min.css"


export function JustifiedExample() {
    return(
        <>
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Challenge 17</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Contactanos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home">Iniciar sesion</Nav.Link>
      </Nav.Item>
      </Nav.Item>
    </Nav>
  </>
  );
}