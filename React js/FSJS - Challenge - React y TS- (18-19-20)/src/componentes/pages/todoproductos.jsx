import { React, useState, useEffect } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CrearCard from "../Carrousel-cards";
import axios from "axios";
import { Categoria } from "../Nav-categoria";
export function Todoslosproductos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function productosDB() {
      const res = await axios.get("http://localhost:3030/product");
      setProducts(res.data);
    }
    productosDB();
  }, []);
  console.log(products);
  return (
    <>
      <Categoria />
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
                {/* {products.sort((a, b) =>
                  a.tipo_producto > b.tipo_producto
                    ? 1
                    : a.tipo_producto < b.tipo_producto
                    ? -1
                    : 0
                )} */}
              </Col>
            ))}
          </Row>
        </CardGroup>
      </section>
    </>
  );
}
