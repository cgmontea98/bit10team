import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";

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
              <Card
                className="card text-bg-light mb-1 m-2"
                style={{ width: "350px", textAlign: "center" }}
                key={item.id}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Card.Img
                    className="text-center py-3"
                    variant="top"
                    style={{ width: "100px" }}
                    src={item.image_url}
                  />
                </div>
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {item.name}
                  </Card.Title>
                  <Card.Text
                    style={{
                      justifyContent: "center",
                      width: "310px",
                      marginLeft: "-25px",
                      margin: "5px",
                    }}
                  >
                    {item.description}
                  </Card.Text>
                  <Agregar data={dato} onClick={() => agregarAlCarrito(dato)} />
                </Card.Body>
              </Card>
            ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
