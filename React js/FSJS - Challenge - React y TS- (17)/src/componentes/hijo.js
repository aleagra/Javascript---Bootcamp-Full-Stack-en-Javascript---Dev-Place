import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';

function Hijo() {
    return <h2>Hijo</h2>;
  }
  function Nieto() {
    return <h3> Nieto</h3>;
  }

   function VerHora() {
      const [fecha, setFecha] = React.useState();
  
      function btnFecha() {
          let dia = new Date();
          let ahora = dia.toLocaleString();
          setFecha(ahora);
      }
      return (
          <>
              <Button variant='dark' className='fecha' onClick={btnFecha}>¿Que fecha es?</Button>
              <p className='hora'>{fecha}</p>
          </>
      );
  }


export function Padre() {
  return (
    <>
      <h1>Padre</h1>
      <Hijo />
      <Nieto />
      <VerHora />
    </>
  );
}
    
