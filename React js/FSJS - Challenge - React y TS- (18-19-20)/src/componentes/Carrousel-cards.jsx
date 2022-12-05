import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
export function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function productosDB() {
      const res = await axios.get("http://localhost:3030/product");
      setProducts(res.data);
    }
    productosDB();
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={6}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper carrousel-cards"
      >
        {products.map((Element) => {
          return (
            <SwiperSlide>
              <CrearCard
                id={Element._id}
                titulo={Element.titulo_producto}
                imagen={Element.imagen_producto}
                precio={Element.precio_producto}
                texto={Element.texto_producto}
                tipo={Element.tipo}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <section className="carrousel-card">
        <Carousel variant="dark" className="mb-5">
          <Carousel.Item>
            <CardGroup className="card-group">
              <Row>
                {products.map((Element) => {
                  if (Element.tipo_producto === "carrousel") {
                    return (
                      <Col lg={4} sm={6} xl={2}>
                        <CrearCard
                          id={Element._id}
                          titulo={Element.titulo_producto}
                          imagen={Element.imagen_producto}
                          precio={Element.precio_producto}
                          texto={Element.texto_producto}
                          tipo={Element.tipo}
                        />
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
                {products.map((Element) => {
                  if (Element.tipo_producto === "carrousel") {
                    return (
                      <Col lg={4} sm={6} xl={2}>
                        <CrearCard
                          id={Element._id}
                          titulo={Element.titulo_producto}
                          imagen={Element.imagen_producto}
                          precio={Element.precio_producto}
                          texto={Element.texto_producto}
                          tipo={Element.tipo}
                        />
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
                {products.map((Element) => {
                  if (Element.tipo_producto === "carrousel") {
                    return (
                      <Col sm={6} lg={4} xl={2}>
                        <CrearCard
                          id={Element._id}
                          titulo={Element.titulo_producto}
                          imagen={Element.imagen_producto}
                          precio={Element.precio_producto}
                          texto={Element.texto_producto}
                          tipo={Element.tipo}
                        />
                      </Col>
                    );
                  }
                })}
              </Row>
            </CardGroup>
          </Carousel.Item>
        </Carousel>
      </section> */}
    </>
  );
}

export default function CrearCard(props) {
  const [icon, setIcon] = useState("fas fa-cart-plus fav");
  var contador = 0;
  const item = {
    id: props.id,
    title: props.titulo,
    price: props.precio,
    text: props.texto,
    type: props.tipo,
    img: props.imagen,
  };
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
    position: "top-right",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
  function alerta() {
    Toast.fire({
      icon: "success",
      title: "Agregado al carrito",
    });
  }
  return (
    <>
      <Card className="text-center card col" tipo={props.tipo_producto}>
        <a href={"/Detalles/" + props.id}>
          {" "}
          <Card.Img src={props.imagen} alt="logo" />
        </a>
        <Card.Body>
          <Card.Title> {props.titulo}</Card.Title>
          <Card.Text>{props.texto}</Card.Text>
          <Card.Title className="price">$ {props.precio}</Card.Title>
        </Card.Body>
        <button
          className="fav-button"
          onClick={(e) => {
            console.log(item);
            cambiarIcono(e);
            addItem(item);
          }}
        >
          <i className={icon}></i>
        </button>
      </Card>
    </>
  );
}
