import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { useCart } from "react-use-cart";
import axios from "axios";
export function Detalles() {
  const { addItem } = useCart();
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState([]);
  let params = useParams();
  let elemento = params.id;
  useEffect(() => {
    async function productosDB() {
      const res = await axios.get(`http://localhost:3030/product/${elemento}`);
      setProduct(res.data);
    }
    productosDB();
  }, [elemento]);
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);
  const item = {
    id: product._id,
    title: product.titulo_producto,
    price: product.precio_producto,
    text: product.texto,
    type: product.tipo,
    img: product.imagen_producto,
  };

  return (
    <>
      <section className="container-details">
        <Row>
          <>
            <Col xs={12} sm={12} lg={6} xl={6}>
              <div className="container-details-img">
                <img
                  style={{ margin: "auto" }}
                  src={product.imagen_producto}
                  alt="a"
                />
              </div>
            </Col>
            <Col xs={12} sm={12} lg={6} xl={6} style={{ textAlign: "center" }}>
              <div className="details">
                <h2 className="details-title">{product.titulo_producto}</h2>
                <h2 className="details-price">${product.precio_producto}</h2>
                <div className="details-p">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quibusdam corrupti possimus consectetur eaque vel
                    culpa et? Culpa quaerat omnis, explicabo voluptas dolorem
                    sed mollitia ratione laboriosam, eius totam ullam?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis sed laboriosam vero dolore obcaecati molestiae
                    porro ducimus, non harum eveniet iste, ipsam cum, expedita
                    laborum quas perspiciatis in magni. Consectetur!
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    if (user === null) {
                      window.location.href = "/iniciar sesion";
                    } else {
                      addItem(item);
                    }
                  }}
                >
                  añadir al carrito
                </button>
              </div>
            </Col>

            {/* <div className="specs">
              <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home">Detalles</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Consultar</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Especificaciones</Nav.Link>
                </Nav.Item>
              </Nav>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid eligendi quia eaque laborum necessitatibus, illum velit,
                fuga ipsam exercitationem error reprehenderit odit? Praesentium
                delectus placeat deleniti perspiciatis est voluptas error?Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quis sit
                provident deleniti recusandae in facere reprehenderit molestiae
                velit nisi, iure, repellendus magnam expedita ut quisquam
                perferendis quae dicta dolore quasi.
              </p>
            </div> */}
          </>
        </Row>
      </section>
    </>
  );
}
