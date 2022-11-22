import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import alldatos from "./data/alldatos";
import { React, useState } from "react";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export function Cards() {
  return (
    <>
      <section className="carrousel-card">
        <Carousel variant="dark" className="mb-5">
          <Carousel.Item>
            <CardGroup className="card-group">
              <Row>
                {alldatos.map((Element) => {
                  if (Element.procuto === "carrousel") {
                    return (
                      <Col lg={4} sm={6} xl={2}>
                        <CrearCard Element={Element} />
                      </Col>
                    );
                  }
                })}
              </Row>
            </CardGroup>
          </Carousel.Item>

          <Carousel.Item>
            <CardGroup className="card-group">
              <Row>
                {alldatos.map((Element) => {
                  if (Element.procuto === "carrousel") {
                    return (
                      <Col lg={4} sm={6} xl={2}>
                        <CrearCard Element={Element} />
                      </Col>
                    );
                  }
                })}
              </Row>
            </CardGroup>
          </Carousel.Item>
          <Carousel.Item>
            <CardGroup className="card-group">
              <Row>
                {alldatos.map((Element) => {
                  if (Element.procuto === "carrousel") {
                    return (
                      <Col sm={6} lg={4} xl={2}>
                        <CrearCard Element={Element} />
                      </Col>
                    );
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
    if (e.target.classList == "fas fa-check") {
      setIcon("fas fa-cart-plus fav");

      contador = contador + 1;
    } else {
      setIcon("fas fa-check");
      alerta();
      contador = contador - 1;
    }
    console.log(contador);
  }

  const { addItem } = useCart();
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  function alerta() {
    Toast.fire({
      icon: "success",
      title: "Agregado al carrito",
    });
  }
  return (
    <>
      <Card className="text-center card col" key={props.Element.key}>
        <a href={"/Detalles/" + props.Element.id}>
          {" "}
          <Card.Img src={props.Element.img} alt="logo" />
        </a>
        <Card.Body>
          <Card.Title> {props.Element.title}</Card.Title>
          <Card.Text>{props.Element.text}</Card.Text>
          <Card.Title className="price"> {props.Element.price}</Card.Title>
        </Card.Body>
        <button
          className="fav-button"
          onClick={(e) => {
            cambiarIcono(e);

            addItem(props.Element);
          }}
        >
          <i className={icon}></i>
        </button>
      </Card>
    </>
  );
}
