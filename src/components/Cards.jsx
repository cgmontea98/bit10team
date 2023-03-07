import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Agregar } from "./Agregar";
export const Cards = ({ data }) => {
  return (
    <>
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

/*<Card.Img variant="top" src={dato.image_url}
          style={{ maxHeight: "250px", maxWidth: "100px" }}/>
          <Card.Body>
        <Card.Title>{dato.name}</Card.Title>
        <Card.Text>{dato.id}
        </Card.Text>
        <Card.Text>
        {dato.description}
        </Card.Text>
        
      </Card.Body>*/
