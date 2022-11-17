import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import alldatos from "./data/alldatos";
import { React, useState } from "react";
import {useCart} from "react-use-cart";
export function Cards() {

  return (
    <>
      <section className="carrousel-card">
        <Carousel variant="dark" className="mb-5">
          <Carousel.Item>
            <CardGroup className="card-group">
              <Row>
              {alldatos.map((Element) => {
              if(Element.procuto === "carrousel")
              {
                return(
                <Col lg={4} sm={6} xl={2}>
                  <CrearCard Element={Element} />
                </Col>                  
                )

              }
})}
              </Row>
            </CardGroup>
          </Carousel.Item>

          <Carousel.Item>
            <CardGroup className="card-group">
              <Row>
              {alldatos.map((Element) => {
              if(Element.procuto === "carrousel")
              {
                return(
                <Col lg={4} sm={6} xl={2}>
                  <CrearCard Element={Element} />
                </Col>                  
                )

              }
})}
              </Row>
            </CardGroup>
          </Carousel.Item>
          <Carousel.Item>
            <CardGroup className="card-group">
              <Row>
              {alldatos.map((Element) => {
              if(Element.procuto === "carrousel")
              {
                return(
                <Col lg={4} sm={6} xl={2}>
                  <CrearCard Element={Element} />
                </Col>                  
                )

              }
})}
              </Row>
            </CardGroup>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}

export default function CrearCard(props) {
 
  const [icon, setIcon] = useState("fas fa-cart-plus fav");
  var contador = 0;
  function cambiarIcono(e) {
    
    if (e.target.classList == "far fa-heart fav") {
      setIcon("fas fa-cart-plus fav");
      contador = contador + 1;
    } else {
      setIcon("far fa-heart fav");
      contador = contador - 1;
    }
    console.log(contador);
  }

  const{addItem}=useCart();
  return (
    <>
      <Card className="text-center card col" key={props.Element.key}>
        <Card.Img src={props.Element.img} alt="logo" />
        <Card.Body>
          <Card.Title> {props.Element.title}</Card.Title>
          <Card.Text>{props.Element.text}</Card.Text>
          <Card.Title className="price"> {props.Element.price}</Card.Title>
        </Card.Body>
        <button
          className="fav-button"
          onClick={(e) => {cambiarIcono(e);
            addItem(props.Element)}}
        >
          <i className={icon}></i>
        </button>
      </Card>
    </>
  );
}
