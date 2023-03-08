import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Agregar } from "./Agregar";
import { Carrito } from "./Carrito.jsx";

export const Cards = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtro, setFiltro] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const resultado = data.filter((dato) => {
      return dato.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFiltro(resultado);
  }, [searchTerm, data]);

  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item]);
  };

  const handleHideCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Buscar producto..."
          aria-label="Buscar producto"
          aria-describedby="basic-addon2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
      <Button variant="dark" onClick={() => setShowCart(true)}>
        <i className="fa-solid fa-cart-shopping text-white"></i> ({carrito.length})
      </Button>
      <Carrito showCart={showCart} onHide={() => setShowCart(false)} cartItems={carrito} />
      {searchTerm === "" ? (
        data.map((dato) => (
          <Card style={{ width: "18rem" }} key={dato.id}>
            <Card.Img variant="top" src={dato.image_url} />
            <Card.Body>
              <Card.Title>{dato.name}</Card.Title>
              <Card.Text>{dato.description}</Card.Text>
              <Agregar data={dato} onClick={() => agregarAlCarrito(dato)} />
            </Card.Body>
          </Card>
        ))
      ) : filtro && filtro.length > 0 ? (
        filtro.map((dato) => (
          <Card style={{ width: "18rem" }} key={dato.id}>
            <Card.Img variant="top" src={dato.image_url} />
            <Card.Body>
              <Card.Title>{dato.name}</Card.Title>
              <Card.Text>{dato.description}</Card.Text>
              <Agregar data={dato} onClick={() => agregarAlCarrito(dato)} />
            </Card.Body>
          </Card>
        ))
      ) : (
        <span>No se encontraron resultados</span>
      )}
    </>
  );
};