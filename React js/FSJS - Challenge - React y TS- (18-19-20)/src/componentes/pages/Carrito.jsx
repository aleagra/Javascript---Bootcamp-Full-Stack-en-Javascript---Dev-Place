import React from "react";
import { useCart } from "react-use-cart";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
function Carrito() {
  const {
    items,
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <div className="shop-empty">
        <h1> EL CARRITO ESTA VACIO </h1>
      </div>
    );
  return (
    <>
      <div className="container-title-shop">
        <h5 className="shop-title">
          {!totalUniqueItems} ITEMS TOTALES: ({totalItems})
        </h5>
      </div>
      <section className="medio ">
        <Container>
          <Row>
            {items.map((Element, index) => {
              return (
                <>
                  <section className="d-flex card-sho ">
                    <Col className="card-shop">
                      <div className="container-img-shop">
                        <img src={Element.img} alt="" />
                      </div>
                    </Col>
                    <div className="shop-text">
                      <Col style={{ flexDirection: "column" }}>
                        <p className="shop-card-title text-center">
                          {Element.title}
                        </p>

                        <p className="shop-card-price text-center">
                          {" "}
                          PRECIO: {Element.price}
                        </p>

                        <p className="shop-amount text-center">
                          CANTIDAD: {Element.quantity}
                        </p>
                      </Col>
                    </div>

                    <div className="shop-buttons">
                      <Col xs={12} sm={12} lg={6} xl={6}>
                        <Button
                          onClick={() =>
                            updateItemQuantity(Element.id, Element.quantity + 1)
                          }
                          className="shop-button"
                          variant="dark"
                        >
                          <i class="fas fa-plus"></i>
                        </Button>

                        <Button
                          className="shop-button"
                          variant="dark"
                          onClick={() =>
                            updateItemQuantity(Element.id, Element.quantity - 1)
                          }
                        >
                          <i class="fas fa-minus"></i>
                        </Button>

                        <Button
                          variant="danger"
                          className="shop-button"
                          onClick={() => removeItem(Element.id)}
                        >
                          Eliminar
                        </Button>
                      </Col>
                    </div>
                  </section>
                </>
              );
            })}
          </Row>

          {/* <section className="shop-code">
            <div className="container-shop-code">
              <h5 className="shop-comentario">DETALLES</h5>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Comentario adicional"
                className="mb-3"
              >
                <Form.Control as="textarea" className="text-area" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Ingrese codigo postal"
                className="mb-3 post-code"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <button>CALCULAR ENVIO</button>
            </div>
          </section> */}
        </Container>
      </section>
      <div className="container-carrito-buy">
        <Button variant="danger" className="carrito-buy">
          COMPRAR
        </Button>
      </div>
    </>
  );
}

export default Carrito;
