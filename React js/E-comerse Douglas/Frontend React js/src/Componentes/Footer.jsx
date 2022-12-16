import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Footer() {
  return (
    <>
      <div className="footer">
        <footer>
          <div className="social">
            <button className="btn">
              <i className="fab fa-google"></i>
            </button>
            <button className="btn">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="btn">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="btn">
              <i className="fab fa-github"></i>
            </button>
            <button className="btn">
              <i className="fab fa-instagram"></i>
            </button>
          </div>
          <Row>
            <Col lg={4} sm={6} xl={3}>
              <div>
                <ul>
                  <li className="list-inline-item">
                    <a href="a" className="footer-title">
                      CONTACTO
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="a">Mar del plata , Buenos aires</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="a">+54 9 223 000-0000</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="a">Aleagra10@gmail.com</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} sm={6} xl={4}>
              <div className="notificaciones">
                <h4>Notificaciones</h4>
                <p>Recibí todas las novedades y beneficios exclusivos.</p>
                <div>
                  <input type="text" />
                  <button>enviar</button>
                </div>
              </div>
            </Col>
          </Row>
          <p className="copyright">© 2022 Company Name</p>
        </footer>
      </div>
    </>
  );
}
