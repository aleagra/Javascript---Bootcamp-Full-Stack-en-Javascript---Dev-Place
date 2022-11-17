import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React, { useState, useRef } from "react";
export function Sesion() {
  const [enviarInfo1, setEnviarInput1] = useState();
  const [enviarInfo2, setEnviarInput2] = useState();
  const referenciaInput1 = useRef();
  const referenciaInput2 = useRef();

  function enviarDatosInput(e) {
    e.preventDefault();
    setEnviarInput1(referenciaInput1.current.value);
    setEnviarInput2(referenciaInput2.current.value);
  }
  console.log(enviarInfo1, enviarInfo2);
  const mostrar = () => {
    if (enviarInfo1 && enviarInfo2) {
      alert(enviarInfo1 + "\n" + enviarInfo2);
    } else alert("Complete ambos campos");
  };

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
                <input
                  className="form-control"
                  type="text"
                  id="form-1"
                  ref={referenciaInput2}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 ">
              <MDBCol>
                <label className="form-label">CONTRASEÑA</label>
                <input
                  className="form-control"
                  type="text"
                  ref={referenciaInput1}
                />
              </MDBCol>
            </MDBRow>

            <div className="login">
              <button className="btn session-btn" onClick={enviarDatosInput}>
                Enviar
              </button>
              <button onClick={mostrar}>mostrar</button>
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
