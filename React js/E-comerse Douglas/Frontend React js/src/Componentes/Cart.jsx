import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
function Cart() {
  const [user, setUser] = useState(null);
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
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);
  if (isEmpty)
    return (
      <div className="shop-empty">
        <h1> EL CARRITO ESTA VACIO </h1>
      </div>
    );
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  function alerta() {
    swalWithBootstrapButtons
      .fire({
        title: "Estas seguro?",
        text: "No se puede revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, comprar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Completado",
            "Compra realizada",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Operacion cancelada",
            "error"
          );
        }
      });
  }

  const cart = () => (
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
                          variant="primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 12h-15"
                            />
                          </svg>
                        </Button>

                        <Button
                          className="shop-button"
                          variant="primary"
                          onClick={() =>
                            updateItemQuantity(Element.id, Element.quantity - 1)
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
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
        </Container>
      </section>
      <Link to="/PaymentMethod" className="carrito-buy">
        <div className="container-carrito-buy">COMPRAR</div>
      </Link>
    </>
  );
  return <>{user === null ? console.log("error") : cart()}</>;
}
export default Cart;
