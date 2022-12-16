import React from "react";
import { Cards } from "../Componentes/Cards";
import { Carrousel } from "../Componentes/Carrousel";
import { Acordeon } from "../Componentes/Acordeon";
export function Homepage() {
  return (
    <>
      <Carrousel />
      <Cards />
      <Acordeon />
    </>
  );
}
