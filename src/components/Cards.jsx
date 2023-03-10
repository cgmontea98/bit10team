import React, { useEffect, useState } from "react";
import "../css/card.css";
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
    <div className="container">
      <div className="row">
        <div className="col">
          <InputGroup className="mb-3">
            <FormControl
            className="input--cat"
              placeholder="Busca tu cerveza favorita"
              aria-label="Buscar producto"
              aria-describedby="basic-addon2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button variant="outline-dark" className="btn-custom py-3" onClick={() => setShowCart(true)}>
            <i className="fa-solid fa-cart-shopping text-white"></i> (
            {carrito.length})
          </Button>
          <Carrito
            showCart={showCart}
            onHide={() => setShowCart(false)}
            cartItems={carrito}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col">
          <div className="card-container py-5">
            {searchTerm === "" ? (
              data.map((dato) => (
                <Card
                  className="card text-bg-light mb-1 m-2"
                  style={{ width: "350px", textAlign: "center" }}
                  key={dato.id}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Card.Img
                      className="text-center py-3"
                      variant="top"
                      style={{ width: "100px" }}
                      src={dato.image_url}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>
                      {dato.name}
                    </Card.Title>
                    <Card.Text className="card-texto"
                      style={{
                        justifyContent: "center",
                        width: "100%",
                        marginLeft: "-25px",
                        margin: "5px",
                      }}
                    >
                      {dato.description}
                    </Card.Text>
                    <Agregar
                      data={dato}
                      onClick={() => agregarAlCarrito(dato)}
                    />
                  </Card.Body>
                </Card>
              ))
            ) : filtro && filtro.length > 0 ? (
              filtro.map((dato) => (
                <Card
                  className="card text-bg-light mb-1 m-2"
                  style={{ width: "350px", textAlign: "center" }}
                  key={dato.id}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Card.Img
                      className="text-center py-3"
                      variant="top"
                      style={{ width: "100px" }}
                      src={dato.image_url}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>
                      {dato.name}
                    </Card.Title>
                    <Card.Text
                      ClassName="texto"
                      style={{
                        justifyContent: "center",
                        width: "100%",
                        marginLeft: "-25px",
                        margin: "5px",
                      }}
                    >
                      {dato.description}
                    </Card.Text>
                    <Agregar
                      data={dato}
                      onClick={() => agregarAlCarrito(dato)}
                    />
                  </Card.Body>
                </Card>
              ))
            ) : (
              <span>No se encontraron resultados</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
