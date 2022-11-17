import React from "react";
import { MDBInput, MDBCol, MDBRow } from "mdb-react-ui-kit";
export function Form() {
  return (
    <>
      <section className="form">
        <div className="div-form">
          <div className="container-h1">
            <h1>INICIAR SESION</h1>
          </div>
          <form className="formulario">
            <MDBRow className="mb-3">
              <MDBCol>
                <MDBInput id="form3Example1" label="NOMBRE" />
              </MDBCol>
              <MDBCol>
                <MDBInput id="form3Example2" label="APELLIDO" />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol>
                <MDBInput id="form3Example1" label="MAIL" />
              </MDBCol>
              <MDBCol>
                <MDBInput id="form3Example2" label="PRECIOS" />
              </MDBCol>
            </MDBRow>

            <div className="login">
              <button className="btn">Enviar</button>
            </div>
            <div className="text-center">
              <p>
                No tienes cuenta? <a href="#!">Registrarse</a>
              </p>
              <p>O iniciar con:</p>

              <button className="btn">
                <i className="fab fa-google"></i>
              </button>
              <button className="btn">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="btn">
                <i className="fab fa-twitter"></i>
              </button>
            </div>
          </form>
        </div>
        <img
          className="form-img"
          src="https://media.flixcar.com/f360cdn/Samsung-110230030-ar-feature--533370431--ORIGIN_IMG-.jpg"
          alt=""
        />
      </section>
    </>
  );
}
