import React, { useEffect, useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CrearCard from "./Cards";
import axios from "axios";
import { ListProducts } from "./ListProducts";
export function Tshirts() {
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
      <ListProducts />
      <section className="carrousel-card">
        <CardGroup className="card-group">
          <Row>
            {products.map((Element) => {
              if (Element.tipo_producto === "tablet") {
                return (
                  <Col lg={4} sm={6} xl={3} xxl={3}>
                    <CrearCard
                      id={Element._id}
                      item={Element}
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
      </section>
    </>
  );
}
