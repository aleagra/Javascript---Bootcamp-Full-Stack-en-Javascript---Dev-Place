import React from "react";
import { useParams } from "react-router-dom";
import CrearCard from "../Carrousel-cards";
import alldatos from "../data/alldatos";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Search() {
  let { buscar } = useParams();

  return (
    <>
      <section className="carrousel-card">
        <CardGroup className="card-group">
          <Row>
            {alldatos.map((Element) => {
              if (
                Element.title.trim().toLowerCase() ==
                buscar.trim().toLowerCase()
              )
                return (
                  <Col lg={12} sm={12} xl={12}>
                    <CrearCard Element={Element} />
                  </Col>
                );
            })}
          </Row>
        </CardGroup>
      </section>
    </>
  );
}
