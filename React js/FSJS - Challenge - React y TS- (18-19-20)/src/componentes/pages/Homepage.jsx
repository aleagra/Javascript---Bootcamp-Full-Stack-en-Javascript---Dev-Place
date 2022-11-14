import React from "react";
import { Cards } from "../Carrousel-cards";
import { Form } from "../Form";
import { Componentes } from "../Componentes";
import { Carrousel } from "../Carrousel";
import { Acordeon } from "../Acordeon";
import { General } from "../General";
export function Homepage() {
  return (
    <>
      <Carrousel />
      <Cards />
      <General />
      <Componentes />
      <Form />
      <Acordeon />
    </>
  );
}
