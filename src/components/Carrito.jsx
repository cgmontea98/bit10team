import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export const Carrito = ({ showCart, cartItems, onHide }) => {
  return (
    <>
      <Button variant="dark" onClick={onHide}>
        <i className="fa-solid fa-cart-shopping text-white"></i>
      </Button>
      <Offcanvas show={showCart} onHide={onHide} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Productos agregados</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems &&
            cartItems.map((item) => (
              <Card style={{ width: "18rem" }} key={item.id}>
                <Card.Img variant="top" src={item.image_url} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
                <Card.Body>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="warning m-2">Left</Button>
                    <Button variant="success m-2">Middle</Button>
                    <Button variant="danger m-2">Right</Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
