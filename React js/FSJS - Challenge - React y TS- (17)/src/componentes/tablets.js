import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';


export function Tablets() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let card = [
    {
      id: 1,
      title: "Galaxy Tab S8 Ultra ",
      text: "text",
      price:"$200.000",
      img:"https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-tab-s8-ultra-wifi-x900-sm-x900nzadaro-530922091?$684_547_PNG$"
    },
    {
      id: 2,
      title: "Galaxy Tab S8+",
      text: "text",
      price:"$150.000",
      img:"https://images.samsung.com/is/image/samsung/p6pim/ar/sm-t733nzkraro/gallery/ar-galaxy-tab-s7-fe-t730-392264-sm-t733nzkraro-532939742?$684_547_PNG$"
    },
    {
        id: 3,
        title: "Galaxy Tab S8",
        text: "text",
        price:"$90.000",
        img:"https://images.samsung.com/is/image/samsung/p6pim/ar/sm-t500nzaearo/gallery/ar-galaxy-tab-a7-t500-sm-t500nzaearo-332818011?$1300_1038_PNG$"
      },
      {
        id: 4,
        title: "Galaxy Tab A7 ",
        text: "text",
        price:"$80.000",
        img:"https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-tab-s8-plus-wifi-x800-sm-x800nzavaro-530921460?$684_547_PNG$"
      },
      {
        id: 5,
        title: "Galaxy Tab S6 Lite",
        text: "text",
        price:"$70.000",
        img:"https://images.samsung.com/is/image/samsung/p6pim/ar/sm-p613nzauaro/gallery/ar-galaxy-tab-s6-lite-p610-432945-sm-p613nzauaro-533369962?$1300_1038_PNG$"
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
