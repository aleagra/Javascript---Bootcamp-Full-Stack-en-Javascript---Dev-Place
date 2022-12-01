import React, { useState } from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import axios from "axios";
const url = "http://localhost:3030/product/post";
export function Ingresarproducto() {
  const [titulo_producto, setArchivos] = useState("");
  const [precio_producto, setPrecio] = useState("");
  const [tipo_producto, setProducto] = useState("celular");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {
        titulo_producto,
        precio_producto,
        tipo_producto,
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
          <div className="">
            <h1 className="ingresar-title">INGRESAR NUEVO PRODUCTO</h1>
          </div>
          <form className="formulario session" onSubmit={handleSubmit}>
            <MDBRow className="mb-3 center">
              <MDBCol className="text-center">
                <label className="form-label label-ingresar">
                  NOMBRE DEL PRODUCTO
                </label>
                <input
                  className="form-control ingresar"
                  type="text"
                  id="titulo_producto"
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
                  id="precio_producto"
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
                  id="tipo_producto"
                  onChange={(e) => {
                    setProducto(e.target.value);
                    console.log(tipo_producto);
                  }}
                >
                  <option className="form-label"></option>

                  <option value="Celular">Celular</option>
                  <option value="Televisor">Televisor</option>
                  <option value="Tablet">Tablet</option>
                </Form.Select>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 ">
              <MDBCol className="text-center">
                <Form.Group controlId="formFile" className="mb-3 ">
                  <Form.Label className="form-label a label-ingresar">
                    IMAGEN DEL PRODUCTO
                  </Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </MDBCol>
            </MDBRow>
            <div className="login">
              <button className="btn session-btn" type="submit">
                Enviar
              </button>
              {/* <button onClick={mostrar}>mostrar</button> */}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
