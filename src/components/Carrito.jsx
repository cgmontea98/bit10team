import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export const Carrito = ({ showCart, cartItems, onHide }) => {
  return (
    <>
      <Button variant="dark" onClick={onHide} className="visually-hidden">
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
                style={{ textAlign: "center" }}
                key={item.id}
              >
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  className="col"
                >
                  <Card.Img
                    className="text-center py-3"
                    variant="top"
                    style={{ width: "60px" }}
                    src={item.image_url}
                  />
                </div>
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {item.name}
                  </Card.Title>
                  <Card.Body>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="warning m-2">Left</Button>
                      <Button variant="success m-2">Middle</Button>
                      <Button variant="danger m-2">Right</Button>
                    </ButtonGroup>
                  </Card.Body>
                </Card.Body>
              </Card>
            ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
