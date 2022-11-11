import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <section className="formulario">
        <div>
          <h1>INICIAR SESION</h1>
        </div>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="form"
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="50" controlId="validationCustom01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>
            <Form.Group as={Col} md="50" controlId="">
              <Form.Label>Apellido</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>
            <Form.Group as={Col} md="50" controlId="validationCustomUsername">
              <InputGroup hasValidation>
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="50 " controlId="validationCustom03">
              <Form.Label>Mail</Form.Label>
              <Form.Control type="mail" required />

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div>
            <Button type="submit">Submit form</Button>
          </div>
        </Form>
      </section>
    </>
  );
}
