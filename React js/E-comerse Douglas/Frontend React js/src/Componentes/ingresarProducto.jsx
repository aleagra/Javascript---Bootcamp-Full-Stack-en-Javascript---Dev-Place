import React, { useState } from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Swal from "sweetalert2";

const url = "http://localhost:3030/product";
export function Ingresarproducto() {
  const [titulo_producto, setArchivos] = useState("");
  const [precio_producto, setPrecio] = useState("");
  const [imagen_producto, setImagen] = useState("");
  const [tipo_producto, setProducto] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("precio_producto", precio_producto);
      bodyFormData.append("titulo_producto", titulo_producto);
      bodyFormData.append("imagen_producto", imagen_producto[0]);
      bodyFormData.append("tipo_producto", tipo_producto);
      const resp = await axios.post(url, bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };
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
    Swal.fire("Producto creado correctamente", "", "success");
  }
  return (
    <>
      <section className="ingresar p-0">
        <div className="container-ingresar">
          <div>
            <h1 className="ingresar-title">INGRESAR NUEVO PRODUCTO</h1>
          </div>
          <form
            className="formulario session"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <MDBRow className="mb-3 ">
              <MDBCol WS>
                <label className="form-label label-ingresar">
                  NOMBRE DEL PRODUCTO
                </label>
                <input
                  className="form-control ingresar"
                  type="text"
                  value={titulo_producto}
                  onChange={(e) => setArchivos(e.target.value)}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 ">
              <MDBCol>
                <label className="form-label label-ingresar">PRECIO</label>
                <input
                  className="form-control ingresar"
                  type="text"
                  value={precio_producto}
                  onChange={(e) => setPrecio(e.target.value)}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 ">
              <MDBCol>
                <label className="form-label label-ingresar">
                  TIPO DE PRODUCTO
                </label>
                <Form.Select
                  className="select"
                  onChange={(e) => setProducto(e.target.value)}
                >
                  <option value=""></option>
                  <option value="celular">CELULAR</option>
                  <option value="tablet">TABLET</option>
                  <option value="televisor">TELEVISOR</option>
                </Form.Select>
              </MDBCol>
            </MDBRow>

            <MDBRow className="mb-3 ">
              <MDBCol>
                <Form.Group controlId="formFile" className="mb-3 ">
                  <Form.Label className="form-label a label-ingresar">
                    IMAGEN DEL PRODUCTO
                  </Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setImagen(e.target.files)}
                  />
                </Form.Group>
              </MDBCol>
            </MDBRow>
            <div>
              <button
                className=" session-btn"
                type="submit"
                onClick={(e) => {
                  alerta();
                }}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
