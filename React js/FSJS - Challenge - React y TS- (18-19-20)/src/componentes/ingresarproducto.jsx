import React, { useState } from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import axios from "axios";

const url = "http://localhost:3030/product";
export function Ingresarproducto() {
  const [titulo_producto, setArchivos] = useState("");
  const [precio_producto, setPrecio] = useState("");
  const [imagen_producto, setImagen] = useState("");
  const [texto_producto, setTexto] = useState("");
  const [tipo_producto, setProducto] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("precio_producto", precio_producto);
      bodyFormData.append("titulo_producto", titulo_producto);
      bodyFormData.append("imagen_producto", imagen_producto[0]);
      bodyFormData.append("texto_producto", texto_producto);
      bodyFormData.append("tipo_producto", tipo_producto);
      const resp = await axios.post(url, bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" },
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
            <h1 className="ingresar-title">INGRESAR NUEVO PRODUCTO</h1>
          </div>
          <form
            className="formulario session"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <MDBRow className="mb-3 center">
              <MDBCol className="text-center">
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
              <MDBCol className="text-center">
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
              <MDBCol className="text-center">
                <label className="form-label label-ingresar">
                  TIPO DE PRODUCTO
                </label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setProducto(e.target.value)}
                >
                  <option value=""></option>
                  <option value="celular">CELULAR</option>
                  <option value="tablet">TABLET</option>
                  <option value="televisor">TELEVISOR</option>
                </Form.Select>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 center">
              <MDBCol className="text-center">
                <label className="form-label label-ingresar">DESCRIPCION</label>
                <input
                  className="form-control ingresar"
                  type="text"
                  value={texto_producto}
                  onChange={(e) => setTexto(e.target.value)}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 ">
              <MDBCol className="text-center">
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
