import "./App.css";
import React, { useEffect, useState, useRef } from "react";

function Sumar() {
  let [total, setTotal] = useState(0);

  let resultado = useRef();

  useEffect(() => {
    resultado.current.textContent = total;
  }, [total]);

  let sumar = () => {
    let num1 = document.querySelector("#uno").value;
    let num2 = document.querySelector("#dos").value;
    setTotal(parseInt(num1) + parseInt(num2));
  };

  return (
    <div>
      <h2>Suma</h2>
      <input placeholder="Primer numero" type="number" id="uno"></input>
      <input placeholder="Segundo numero" type="number" id="dos"></input>
      <button onClick={sumar}>Sumar</button>
      <p ref={resultado}>Total: {total}</p>
    </div>
  );
}

function App() {
  const usuarios = [
    { nombre: "lucas ", userId: 5 },
    { nombre: "Juan ", userId: 7 },
    { nombre: "Pedro ", userId: 10 },
    { nombre: "Javier ", userId: 15 },
  ];
  const texto = <h1>Hola JSX</h1>;
  let textoConClase = <h1 className="texto"> Hola JSX con clase</h1>;

  let mostrarUsuarios = (
    <div className="tabla">
      <div>
        <span>Nombre: {usuarios[0].nombre}</span>
        <span>ID: {usuarios[0].userId}</span>
      </div>
      <div>
        <span>Nombre: {usuarios[1].nombre}</span>
        <span>ID: {usuarios[1].userId}</span>
      </div>
      <div>
        <span>Nombre: {usuarios[2].nombre}</span>
        <span>ID: {usuarios[2].userId}</span>
      </div>
    </div>
  );

  return (
    <>
      {texto}
      {mostrarUsuarios}
      {textoConClase}
      <Sumar />
    </>
  );
}
export default App;
