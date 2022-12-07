import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useCart } from "react-use-cart";
const url = "http://localhost:3030/user/login";
export function Sesion() {
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

  // const [mail, setMail] = useState("");
  // const [password, setPassword] = useState("");
  // const [status, setStatus] = useState(null);
  // const [resp, setResp] = useState("");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     var bodyFormData = {
  //       mail: mail,
  //       password: password,
  //     };

  //     const resp = await axios.post(url, bodyFormData);
  //     await setStatus(resp.status);

  //     console.log(resp.data);
  //     window.localStorage.setItem("loggedNoteappUser", JSON.stringify(resp));
  //   } catch (error) {
  //     console.log(error.response.status);
  //     await setStatus(error.response.status);
  //   }
  // };
  // console.log(status);
  // useEffect(() => {
  //   const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
  //   if (loggedUserJSON) {
  //     const resp = JSON.parse(loggedUserJSON);
  //     setResp(resp);
  //     console.log(resp);
  //   }
  // }, []);
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </MDBCol>
          </MDBRow>

          <div className="login">
            <a href="/">
              {" "}
              <button className="btn" onClick={hadndleLogout}>
                iniciar sesion
              </button>
            </a>
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
  );

  const logoutForm = () => (
    <section className="form center">
      <div className="div-form sesion">
        <div className="container-h1 session-title"></div>
        <form
          className="formulario session"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <MDBRow className="mb-3">
            <MDBCol>
              <label className="form-label">
                mail: <span>{user.mail}</span>
              </label>

              <label className="form-label " type="password">
                Nombre de usuario : <span>{user.nombre}</span>
              </label>
            </MDBCol>
          </MDBRow>

          <div className="login">
            <a href="/Iniciar Sesion">
              {" "}
              <button className="btn" onClick={hadndleLogout}>
                cerrar sesion
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
