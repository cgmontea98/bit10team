import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import "../css/inicio.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Badge from "react-bootstrap/Badge";
import uuid4 from "uuid4";

export const Carrito = ({ showCart, cartItems, onHide }) => {
  const [add, setAdd] = useState(0);
  const [color, setColor] = useState("");
  const [eliminar, setEliminar] = useState("");

  useEffect(() => {
    if (add > 0) {
      setColor("bg-success");
    } else if (add < 0) {
      setColor("bg-danger");
    } else {
      setColor("bg-secondary");
    }
  }, [add]);
 
  return (
    <>
      <Button variant="dark" onClick={onHide} className="visually-hidden">
        <i className="fa-solid fa-cart-shopping text-white"></i>
      </Button>
      <Offcanvas show={showCart} onHide={onHide} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h1>Productos agregados</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems &&
            cartItems.map((item) => {
        
            return <Card
                className="card text-bg-light mb-1 m-2 text-center d-flex align-items-center justify-content-center"
                style={{ textAlign: "center", width: "300px" }}
                key={uuid4()}
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
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>{item.name}</Card.Title>
                  <div>
                    <Badge className={color}>{add}</Badge>
                  </div>
                </Card.Body>
                <Card.Body>
                  <ButtonGroup
                    aria-label="Basic example"
                    className="container--fluid d-flex justify-content-center align-items-center"
                  >
                    <Row className="p-3">
                      <Col>
                        <Button
                          variant="success"
                          onClick={() => setAdd(add+1)}
                        >
                          +
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          variant="warning"
                          onClick={() => setAdd(add-1)}
                        >
                          -
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          variant="danger"
                          onClick={() => setEliminar([cartItems.shift()])}
                        >
                          Eliminar
                        </Button>
                      </Col>
                    </Row>
                  </ButtonGroup>
                  <Button variant="outline-dark" className="btn-custom">
                    Confirmar
                  </Button>
                </Card.Body>
              </Card>})}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
