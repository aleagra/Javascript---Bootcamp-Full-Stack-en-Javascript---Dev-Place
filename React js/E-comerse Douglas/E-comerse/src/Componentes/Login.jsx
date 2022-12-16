import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useCart } from "react-use-cart";
import { Form } from "react-bootstrap";
const url = "http://localhost:3030/user/login";
export function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const { totalItems, totalUniqueItems } = useCart();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await axios.post(url, {
        mail: mail,
        password: password,
      });
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      setUser(user.data.user);
      setMail("");
      setPassword("");
      window.location.href = "/";
    } catch (exception) {
      console.log("Error al loguearse");
    }
  };
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user.data.user);
    }
  }, []);

  const hadndleLogout = () => {
    setUser(null);
    window.localStorage.removeItem("loggedNoteappUser");
    window.localStorage.removeItem("react-use-cart");
  };
  console.log(user);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
  function alerta() {
    Swal.fire("Completado", "Usuario creado correctamente", "success");
  }

  const loginForm = () => (
    <section className="ingresar p-0">
      <div className="container-ingresar">
        <div>
          <h1 className="ingresar-title">INICIAR SESION</h1>
        </div>
        <form
          className="fulario session"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <MDBRow className="mb-3 ">
            <MDBCol WS>
              <label className="form-label label-ingresar">
                CORREO ELECTRONICO
              </label>
              <input
                className="form-control ingresar"
                type="mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3 ">
            <MDBCol>
              <label className="form-label label-ingresar">CONTRASEÑA</label>
              <input
                className="form-control ingresar"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </MDBCol>
          </MDBRow>

          <div>
            <button className=" session-btn" onClick={hadndleLogout}>
              iniciar sesion
            </button>
          </div>
          <div className="text-center register">
            <p>
              No tienes cuenta?{" "}
              <span>
                <a href="/Register">Registrarse </a>
              </span>
              O iniciar con:
            </p>

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
  );
  const logoutForm = () => (
    <section className="login">
      <div className="container-login">
        <div className="container-h1 session-title"></div>
        <form
          className="formulario session"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <MDBRow className="mb-3">
            <MDBCol>
              <div className="container-label">
                <label className="form-label">
                  Correo electronico: <span>{user.mail}</span>
                </label>
              </div>
              <div className="container-label">
                <label className="form-label " type="password">
                  Nombre de usuario : <span>{user.nombre}</span>
                </label>
              </div>
            </MDBCol>
          </MDBRow>

          <div className="login-btn">
            <a href="/Iniciar Sesion">
              {" "}
              <button className="btn" onClick={hadndleLogout}>
                cerrar sesion
              </button>
            </a>
            {/* <button onClick={mostrar}>mostrar</button> */}
          </div>
          <div className="login-btn">
            <a href="/Detalles de compra">
              {" "}
              <button className="btn" onClick={hadndleLogout}>
                Ver detalles de compras
              </button>
            </a>
            {/* <button onClick={mostrar}>mostrar</button> */}
          </div>
        </form>
      </div>
    </section>
  );

  return (
    <>
      <div>{user === null ? loginForm() : logoutForm()}</div>
    </>
  );
}
