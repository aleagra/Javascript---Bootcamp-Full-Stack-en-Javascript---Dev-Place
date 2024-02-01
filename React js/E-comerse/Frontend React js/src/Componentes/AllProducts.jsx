import { React, useState, useEffect } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CrearCard from "./Cards";
import axios from "axios";
import { ListProducts } from "./ListProducts";
export function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function productosDB() {
      const res = await axios.get("http://localhost:3030/product");
      setProducts(res.data);
    }
    productosDB();
  }, []);

  try {
    const response = axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  return (
    <>
      <ListProducts />
      <section className="carrousel-card">
        <CardGroup className="card-group">
          <Row>
            {products.map((Element) => (
              <Col lg={4} sm={6} xl={3}>
                <CrearCard
                  id={Element._id}
                  key={Element.tipo_producto}
                  Element={Element}
                  titulo={Element.titulo_producto}
                  imagen={Element.imagen_producto}
                  precio={Element.precio_producto}
                  texto={Element.texto_producto}
                  tipo={Element.tipo_producto}
                />
              </Col>
            ))}
          </Row>
        </CardGroup>
      </section>
    </>
  );
}
