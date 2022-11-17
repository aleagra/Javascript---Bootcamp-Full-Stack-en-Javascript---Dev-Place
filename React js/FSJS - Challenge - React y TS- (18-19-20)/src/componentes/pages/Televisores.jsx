import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import alldatos from "../data/alldatos";
import CrearCard from "../Carrousel-cards";
export function Televisores() {
  return (
    <>
     <section className="carrousel-card">
        <CardGroup className="card-group">
          <Row>
            {alldatos.map((Element) => {
              if(Element.procuto === "televisor")
              {
                return(
                <Col lg={4} sm={6} xl={2}>
                  <CrearCard Element={Element} />
                </Col>                  
                )

              }
})}
          </Row>
        </CardGroup>
      </section>
    </>
  );
}