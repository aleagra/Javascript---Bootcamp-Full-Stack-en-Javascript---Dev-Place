import { useState, useEffect } from "react";
import axios from "axios";

export default function DetallesCompra() {
  const [detalles, setProduct] = useState([]);
  useEffect(() => {
    async function productosDB() {
      const detalles = await axios.get(`http://localhost:3030/detail`);
      setProduct(detalles.data);
    }
    productosDB();
  }, []);

  return (
    <div>
      {detalles.map((Element) => {
        return (
          <>
            <div>
              <span>{Element.nombre}</span>
              <span>{Element.apellido}</span>
              <span>{Element.direccion}</span>
              <span>{Element.tipo_pago}</span>
              <span>{Element.numero_tarjeta}</span>
              <span>{Element.nombre_tarjeta}</span>
              <span>{Element.codigo}</span>
              <span>{Element.expiracion}</span>
              <span>{Element.total}</span>
              {detalles[0].user.map((Element) => {
                return (
                  <>
                    <span>{Element.user}</span>
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}

//   <span>{Element.product}</span> */
