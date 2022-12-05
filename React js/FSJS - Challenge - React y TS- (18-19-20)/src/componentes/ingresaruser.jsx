import React, { useState } from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import axios from "axios";

const url = "http://localhost:3030/user/post";
export function IngresarUser() {
  const [nombre, setNNombre] = useState("");
  const [mail, setNMail] = useState("");
  const [password, setNPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var users = {
        nombre: nombre,
        mail: mail,
        password: password,
      };

      const resp = await axios.post(url, users, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <section className="form center p-0">
        <div className="div-form  ingresar">
          <div>
            <h1 className="ingresar-title">INGRESAR NUEVO USUARIO</h1>
          </div>
          <form className="formulario session" onSubmit={handleSubmit}>
            <MDBRow className="mb-3 center">
              <MDBCol className="text-center">
                <label className="form-label label-ingresar">NOMBRE</label>
                <input
                  className="form-control ingresar"
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNNombre(e.target.value)}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 ">
              <MDBCol className="text-center">
                <label className="form-label label-ingresar">MAIL</label>
                <input
                  className="form-control ingresar"
                  type="email"
                  id="mail"
                  value={mail}
                  onChange={(e) => setNMail(e.target.value)}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow className="mb-3 center">
              <MDBCol className="text-center">
                <label className="form-label label-ingresar">CONTRASEÑA</label>
                <input
                  className="form-control ingresar"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setNPassword(e.target.value)}
                />
              </MDBCol>
            </MDBRow>

            <div className="login">
              <button className="btn session-btn" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
