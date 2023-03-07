import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Agregar } from "./Agregar";
import { Busqueda } from "./Busqueda";

export const Cards = ({ data }) => {
  return (
    <>
      <Busqueda data={data}/>
      {data.map((dato) => (
        <Card style={{ width: "18rem" }} key={dato.id}>
          <Card.Img variant="top" src={dato.image_url} />
          <Card.Body>
            <Card.Title>{dato.name}</Card.Title>
            <Card.Text>{dato.description}</Card.Text>
            <Agregar />
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
