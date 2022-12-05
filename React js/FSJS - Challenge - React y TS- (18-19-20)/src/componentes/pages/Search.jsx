import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CrearCard from "../Carrousel-cards";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
export default function Search() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function productosDB() {
      const res = await axios.get("http://localhost:3030/product");
      setProducts(res.data);
    }
    productosDB();
  }, []);
  let { buscar } = useParams();

  return (
    <>
      <section className="carrousel-card">
        <CardGroup className="card-group">
          <Row>
            {products.map((Element, index) => {
              if (
                Element.titulo_producto.trim().toLowerCase() ==
                buscar.trim().toLowerCase()
              )
                return (
                  <Col lg={12} sm={12} xl={12}>
                    <CrearCard
                      key={index}
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
            })}
          </Row>
        </CardGroup>
      </section>
    </>
  );
}
