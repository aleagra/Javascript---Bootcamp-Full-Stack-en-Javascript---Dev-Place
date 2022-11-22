import React from "react";
import { useParams } from "react-router-dom";
import alldatos from "./data/alldatos";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
export function Detalles() {
  const { id } = useParams();
  return (
    <>
      <Container className="container-details">
        <Row>
          {alldatos.map((Element) => {
            if (Element.id == id) {
              return (
                <>
                  <Col xs={12} sm={12} lg={6} xl={6}>
                    <div className="container-details-img">
                      <img
                        style={{ margin: "auto" }}
                        src={Element.detalle}
                        alt="a"
                      />
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    style={{ textAlign: "center" }}
                  >
                    <h1 className="details-title">{Element.title}</h1>

                    <div className="pagos">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className="envio"
                      >
                        <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm368-48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48z" />
                      </svg>
                      <div>
                        <h6>Medios de envio</h6>
                        <h6>Ver todos los medios de envio</h6>
                      </div>
                    </div>
                    <div className="pagos">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="envio"
                      >
                        <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z" />
                      </svg>
                      <div>
                        <h6>Medios de pagos</h6>
                        <h6>Ver todos los medios de pago</h6>
                      </div>
                    </div>
                    <div className="pagos justify-content-center text-center">
                      <div className="price">
                        <h5>{Element.price} </h5>
                        <div className="garantia"></div>
                        <button className="btn btn-danger">
                          {" "}
                          SUMAR AL CARRITO
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="specs">
                      <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                          <Nav.Link href="/home">Detalles</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="link-1">Consultar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="link-1">
                            Especificaciones
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aliquid eligendi quia eaque laborum
                        necessitatibus, illum velit, fuga ipsam exercitationem
                        error reprehenderit odit? Praesentium delectus placeat
                        deleniti perspiciatis est voluptas error?Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Quis sit
                        provident deleniti recusandae in facere reprehenderit
                        molestiae velit nisi, iure, repellendus magnam expedita
                        ut quisquam perferendis quae dicta dolore quasi.
                      </p>
                    </div>
                  </Col>
                </>
              );
            }
          })}
        </Row>
      </Container>
    </>
  );
}
