import React from "react";
import { useCart } from "react-use-cart";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from "react-bootstrap/Row";

function Carrito() {
  const {
    items,
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <div className="carrito-vacio"><h1> EL CARRITO ESTA VACIO </h1></div>;
  return (
    <>
    <section className="section-carrito">
   
      <section className="carrito">
        <div className="container-title-carrito">
        <h5 className="carrito-title">
          {!totalUniqueItems} ITEMS TOTALES: ({totalItems})
        </h5>
      </div>
      
              {items.map((Element, index) => {
                return (<>
                  <div className="carrito-cards">
                  <table>
                    <tbody>
                  <tr>
                    <td>
                      <div className="container-img-carrito">
                      <img src={Element.img} alt="" />
                      </div>
                    </td>
                    <td className="carrito-card-title text-center">{Element.title}</td>

                    <td className="carrito-card-price text-center"> PRECIO: {Element.price}</td>

                    <td className="carrito-cantidad text-center">CANTIDAD: {Element.quantity}</td>
                  

                    <td   >
                      <div className="td-buttons">
                      <Button
                        onClick={() =>
                          updateItemQuantity(Element.id, Element.quantity + 1)
                        }
                        className="carrito-button" variant="dark"
                      >
                       <i class="fas fa-plus"></i> 
                      </Button>

                      <Button
                        className="carrito-button" variant="dark"
                        onClick={() =>
                          updateItemQuantity(Element.id, Element.quantity - 1)
                        }
                      >
                        <i class="fas fa-minus"></i>
                      </Button>

                      <Button variant="danger" onClick={() => removeItem(Element.id)}>
                        Eliminar
                      </Button>
                      </div>
                    </td>
                  </tr>
                  </tbody>
          </table>
           </div>

       
           </>
                );
              })}
        
      </section>
   
    
      <section className="carrito-code">
            <div className="container-carrito-code">
            <h5 className="carrito-comentario">DETALLES</h5>
            {/* <textarea name="textarea" rows="9" cols="35"></textarea> */}
            <FloatingLabel
        controlId="floatingTextarea"
        label="Comentario adicional"
        className="mb-3"
      >
        <Form.Control as="textarea" className="text-area" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Ingrese codigo postal"
        className="mb-3 post-code"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>

            <button>CALCULAR ENVIO</button>
            </div>
           </section>
        
      
           </section>
    </>
  );
}

export default Carrito;
