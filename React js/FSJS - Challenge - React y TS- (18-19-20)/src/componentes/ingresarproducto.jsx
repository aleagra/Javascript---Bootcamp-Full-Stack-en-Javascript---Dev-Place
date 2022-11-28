import React from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
export function Ingresarproducto() {
  return (
    <>
      <section className="form center p-0">
        <div className="div-form  ingresar">
          <div className="">
            <h1 className="ingresar-title">INGRESAR NUEVO PRODUCTO</h1>
          </div>
          <form className="formulario session">
            <MDBRow className="mb-3 center">
              <MDBCol className="text-center">
                <label className="form-label label-ingresar">
                  NOMBRE DEL PRODUCTO
                </label>
                <input className="form-control ingresar" type="text" />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 ">
              <MDBCol className="text-center">
                <label className="form-label label-ingresar">PRECIO</label>
                <input className="form-control ingresar" type="text" />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 ">
              <MDBCol className="text-center">
                <label className="form-label label-ingresar">
                  TIPO DE PRODUCTO
                </label>
                <Form.Select aria-label="Default select example">
                  <option className="form-label"></option>
                  <option value="1">Celular</option>
                  <option value="2">Televisor</option>
                  <option value="3">Tablet</option>
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
              <button className="btn session-btn" type="sumbit">
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
