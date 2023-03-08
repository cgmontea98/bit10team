import React from "react";
import Button from "react-bootstrap/Button";

export const Agregar = ({onClick}) => {
  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <Button onClick={onClick} variant="btn btn-custom">Agregar</Button>
    </div>
  );
};
