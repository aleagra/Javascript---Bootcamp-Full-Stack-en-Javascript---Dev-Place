import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";

import listaTablets from '../data/datatablets'
export function Tablets() {

  
  return (
    <>
     <section className="carrousel-card">
    <CardGroup className="card-group">
    <Row>
     {listaTablets.map((Element) => ( <Col lg={4} sm={6} xl={2}>
      <CrearCard Element={Element} />
      </Col>
      ))}
  </Row>
    </CardGroup>
    </section>
    </>
  )
}
function CrearCard(props) {
  const [icon, setIcon] = useState("far fa-heart fav");
  function cambiarIcono(e) {
    let contador = 0;
    // eslint-disable-next-line eqeqeq
    if (e.target.classList == "far fa-heart fav") {
      setIcon("fas fa-heart fav");
      contador = contador + 1;
    } else {
      setIcon("far fa-heart fav");
    }
    console.log(contador);
  }
  return (
    <>
      <Card className="text-center card col" key={props.Element.key}>
        <Card.Img src={props.Element.img} alt="logo" />
        <Card.Body>
          <Card.Title> {props.Element.title}</Card.Title>
          <Card.Text>{props.Element.text}</Card.Text>
          <Card.Title> {props.Element.price}</Card.Title>
        </Card.Body>
        <button className="fav-button" onClick={cambiarIcono}>
          <i className={icon}></i>
        </button>
      </Card>
    </>
  );
}
