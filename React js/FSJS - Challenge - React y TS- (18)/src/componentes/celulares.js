import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';


export function Celulares() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let card = [
    {
      id: 1,
      title: "Samsung Galaxy S22 ULTRA  ",
      text: "text",
      price:"$200.000",
      img:"https://images.samsung.com/is/image/samsung/p6pim/ar/2208/gallery/ar-galaxy-z-fold4-f936-429925-sm-f936bzamaro-thumb-533083370?$160_160_PNG$"
    },
    {
      id: 2,
      title: "Samsung Galaxy S20 FE",
      text: "text",
      price:"$150.000",
      img:"https://images.samsung.com/is/image/samsung/p6pim/ar/sm-f711bzebaro/gallery/ar-galaxy-z-flip3-f711-5g-397308-sm-f711bzebaro-thumb-530449363?$160_160_PNG$"
    },
    {
        id: 3,
        title: "Samsung Galaxy A33 ",
        text: "text",
        price:"$90.000",
        img:"https://samsungar.vtexassets.com/arquivos/ids/182150-800-auto?width=800&height=auto&aspect=true"
      },
      {
        id: 4,
        title: "Samsung Galaxy A53 ",
        text: "text",
        price:"$80.000",
        img:"https://samsungar.vtexassets.com/arquivos/ids/182179-800-auto?width=800&height=auto&aspect=true"
      },
      {
        id: 5,
        title: "Samsung Galaxy S22+",
        text: "text",
        price:"$70.000",
        img:"https://samsungar.vtexassets.com/arquivos/ids/177924-800-auto?width=800&height=auto&aspect=true"
      },
  ];
  return (
    <>
    <CardGroup className="card-group">
      {card.map((Element) => (
        <Card className="text-center card" key={Element.id}>
          <Card.Img src={Element.img} alt="logo"/>
          <Card.Body>
            <Card.Title> {Element.title}</Card.Title>
            <Card.Text>{Element.text}</Card.Text>
            <Card.Title> {Element.price}</Card.Title>
            
          </Card.Body>
        </Card>
        
      ))}
    
    </CardGroup>
    <Button variant="dark" className="d-flex m-auto" onClick={handleShow}>
    Resumen de productos
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nombre de los productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {card.map((Element) => (
        <div className="text-center" key={Element.id}>
        <Card.Title> {Element.title}</Card.Title>
        </div>
        
      ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary">Aceptar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
