import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "react-use-cart";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
const url = "http://localhost:3030/detail";

export default function PaymentMethod() {
  const { cartTotal } = useCart();
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireecion] = useState("");
  const [mail, setMail] = useState("");
  const [tipo_pago, setTipopago] = useState("");
  const [numero_tarjeta, setnumerotarjeta] = useState("");
  const [nombre_tarjeta, setnombretarjera] = useState("");
  const [codigo, setCodigo] = useState("");
  const [expiracion, setExpiracion] = useState("");

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user.data.user);
    }
  }, []);
  useEffect(() => {
    const carrito = window.localStorage.getItem("react-use-cart");

    const product = JSON.parse(carrito);
    setProduct(product.items);
  }, []);
  console.log(product);
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var detail = {
        product: product,
        user: user,
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        mail: mail,
        tipo_pago: tipo_pago,
        numero_tarjeta: numero_tarjeta,
        nombre_tarjeta: nombre_tarjeta,
        codigo: codigo,
        expiracion: expiracion,
        total: cartTotal,
      };

      const resp = await axios.post(url, detail, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <MDBContainer className="py-5 pay">
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <form onSubmit={handleSubmit}>
              <MDBCardHeader className="py-3">
                <h5 className="mb-0">DETALLES DE COMPRA</h5>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput
                      label="Nombre"
                      type="text"
                      className="name"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBInput
                      label="Apellido"
                      type="text"
                      className="name"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Direccion"
                  type="text"
                  value={direccion}
                  onChange={(e) => setDireecion(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />

                <div className="select-pay">
                  <h5 className="mb-4">MEOTODO DE PAGO</h5>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setTipopago(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Paypal">PAYPAL</option>
                    <option value="Debito">TARJETA DE DEBITO</option>
                    <option value="Credito">TARJETA DE CREDITO</option>
                  </Form.Select>
                </div>

                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      label="numero de tarjeta"
                      type="number"
                      id="numero_tarjeta"
                      wrapperClass="mb-4"
                      value={numero_tarjeta}
                      onChange={(e) => setnumerotarjeta(e.target.value)}
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      label="Nombre completo"
                      type="text"
                      wrapperClass="mb-4"
                      value={nombre_tarjeta}
                      onChange={(e) => setnombretarjera(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      label="Fecha de expiracion "
                      type="date"
                      wrapperClass="mb-4"
                      value={expiracion}
                      onChange={(e) => setExpiracion(e.target.value)}
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      label="Codigo de seguridad"
                      type="text"
                      wrapperClass="mb-4"
                      value={codigo}
                      onChange={(e) => setCodigo(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>

                <button type="submit">Enviar</button>
              </MDBCardBody>
            </form>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <h5 className="mb-0">TOTAL</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Productos
                  <span>${cartTotal}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Envio
                  <span>Gratis</span>
                </MDBListGroupItem>
                <hr className="my-2"></hr>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    <strong>Precio total</strong>
                    <strong>
                      <p className="mb-0">(IVA incluido)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>${cartTotal}</strong>
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
