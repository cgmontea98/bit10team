import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import CloseButton from "react-bootstrap/CloseButton";
import Card from "react-bootstrap/Card";

export const Carrito = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <i className="fa-solid fa-cart-shopping text-white"></i>
      </Button>
      <Offcanvas
        show={show}
       
        placement="end"
        className="d-flex align-items-center text-center bg-dark"
      >
        <Offcanvas.Header>
          <Offcanvas.Title className="fw-bolder fs-2 text-info">Orden...</Offcanvas.Title>
          <CloseButton  onClick={handleClose} className="mx-5 bg-danger" />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              style={{ width: "18rem" }}
              className="m-2"
              src="https://dummyimage.com/288x288/000/fff"
            />
            <Card.Body>
              <Card.Title>Dato.Name</Card.Title>
              <Card.Text>$$$</Card.Text>
              <ButtonGroup aria-label="Basic example">
                <Button variant="warning" className="m-1">
                  Agregar
                </Button>
                <Button variant="danger" className="m-1">
                  Eliminar
                </Button>
                <Button variant="success" className="m-1">
                  Confirmar
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
