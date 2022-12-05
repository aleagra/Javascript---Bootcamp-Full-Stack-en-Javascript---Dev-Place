import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import axios from "axios";
const url = "http://localhost:3030/user/login";
export function Sesion() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var bodyFormData = {
        mail: mail,
        password: password,
      };

      const resp = await axios.post(url, bodyFormData);

      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      <section className="form center">
        <div className="div-form sesion">
          <div className="container-h1 session-title">
            <h1>INICIAR SESION</h1>
          </div>
          <form
            className="formulario session"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <MDBRow className="mb-3">
              <MDBCol>
                <label className="form-label">CORREO ELECTRONICO</label>
                <input
                  className="form-control"
                  type="text"
                  id="mail"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 ">
              <MDBCol>
                <label className="form-label">CONTRASEÑA</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </MDBCol>
            </MDBRow>

            <div className="login">
              <button className="btn session-btn" type="submit">
                Enviar
              </button>
              {/* <button onClick={mostrar}>mostrar</button> */}
            </div>
            <div className="text-center margin">
              <p>
                No tienes cuenta? <a href="/register">Registrarse</a>
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
