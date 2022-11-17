import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export function Componentes() {
  return (
    <>
      <section className="componentes-1">
        <Row>
          <Col lg={5} sm={6} xl={6}>
            <div className="componente-1">
              <img
                src="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_615,h_468,al_t,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg"
                alt=""
              />

              <div className="container-text">
                <h4> Ofertas black friday</h4>
                <h1> Hasta 50% menos</h1>
                <p> Solo en los productos adheridos</p>
                <button className="button1">Ver ahora</button>
              </div>
            </div>
          </Col>
          <Col lg={5} sm={6} xl={6}>
            <div className="componente-1">
              <img
                src="https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_615,h_468,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg"
                alt=""
              />

              <div className="container-text">
                <h4> Recién llegados</h4>
                <h1> Lleva tu sonido donde quieras</h1>
                <p> Mejores marcas de audífonos</p>
                <button className="button2">Reservar</button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}
