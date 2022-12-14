import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';


export function GroupExample() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let card = [
    {
      id: 1,
      title: '"65" QLED 4K Q65B1',
      text: "text",
      price:"$100.000",
      img:"https://images.samsung.com/is/image/samsung/p6pim/ar/un75bu8000gczb/gallery/ar-uhd-4k-tv-un75bu8000gczb-r-perspective-silver-533403231?$684_547_PNG$"
    },
    {
      id: 2,
      title: '50" Neo QLED 4K QN90B',
      text: "text",
      price:"$100.000",
      img:"https://images.samsung.com/is/image/samsung/p6pim/ar/qn65q80aagczb/gallery/ar-qled-tv-qn65q80aagczb-front-silver-531921679?$1300_1038_PNG$"
    },
    {
        id: 3,
        title: '75" Neo QLED 4K QN85B',
        text: "text",
        price:"$100.000",
        img:"https://images.samsung.com/is/image/samsung/p6pim/ar/qn50qn90bagczb/gallery/ar-qled-qn90b-qn50qn90bagczb-533370314?$684_547_PNG$"
      },
      {
        id: 4,
        title: '75" Crystal UHD BU8000',
        text: "text",
        price:"$100.000",
        img:"https://images.samsung.com/is/image/samsung/p6pim/ar/qn65q70aagczb/gallery/ar-qled-q70a-qn65q70aagczb-493006285?$2052_1641_PNG$"
      },
      {
        id: 5,
        title: '65" QLED 4K Smart TV Q70A',
        text: "text",
        price:"$100.000",
        img:"https://images.samsung.com/is/image/samsung/p6pim/ar/qn65qn85bagczb/gallery/ar-qled-tv-qn65qn85bagczb-front-silver-533402890?$1300_1038_PNG$"
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
