import React from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

export function Sesion() {
  return (
    <>
      <section className="form center">
        <div className="div-form sesion">
          <div className="container-h1 session-h1">
            <h1>INICIAR SESION</h1>
          </div>
          <form className="formulario session">
            <MDBRow className="mb-3">
              <MDBCol>
                <label className="form-label">NOMBRE DE USUARIO</label>
                <input className="form-control" type="text" />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 ">
              <MDBCol>
                <label className="form-label">CONTRASEÑA</label>
                <input className="form-control" type="text" />
              </MDBCol>
            </MDBRow>

            <div className="login">
              <button className="btn session-btn">Enviar</button>
            </div>
            <div className="text-center margin">
              <p>
                No tienes cuenta? <a href="#!">Registrarse</a>
              </p>
              <p>O iniciar con:</p>

              <button className="btn">
                <i class="fab fa-google"></i>
              </button>
              <button className="btn">
                <i class="fab fa-facebook-f"></i>
              </button>
              <button className="btn">
                <i class="fab fa-twitter"></i>
              </button>
              <button className="btn">
                <i class="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
