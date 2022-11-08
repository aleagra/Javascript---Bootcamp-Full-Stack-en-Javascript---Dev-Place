import React from 'react'

function Hijo() {
    return <h2>Hijo</h2>;
  }
  function Nieto() {
    return <h3> Nieto</h3>;
  }


export function Padre() {
  return (
    <>
      <h1>Padre</h1>
      <Hijo />
      <Nieto />
    </>
  );
}
    
