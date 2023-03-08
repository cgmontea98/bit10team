import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Agregar } from "./Agregar";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "../css/card.css";

export const Cards = ({ data }) => {
  //PARA LA BARRA DE BUSQUEDA
  const [searchTerm, setSearchTerm] = useState("");

  //PARA GUARDAR DESPUÉS DE LA BUSQUEDA EL UNICO OBJETO
  const [filtro, setFiltro] = useState([]);

  // PARA CONTROLAR EL CAMBIO EN EL CICLO DE VIDA AL INGRESAR COSAS EN EL INPUT
  useEffect(() => {
    //SE GUARDA EN UNA VARIABLE EL FILTRO Y SE RETORNA LA BUSQUEDA UNICAMENTE CON LO QUE SE INCLUYA LA BUSQUEDA
    const resultado = data.filter((dato) => {
      return dato.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    // SE RESETEA FILTRO PARA GUARDAR ESE BUSQUEDA ANTERIOR
    setFiltro(resultado);
    // EN DEPENDENCIAS SE BUSCA QUE ESTE PENDIENTE DE LOS CAMBIOS TAMBIEN FUNCIONA SIN DATA PERO HAY UN ERROR EN AMARILLO
  }, [searchTerm, data]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Busca tu cerveza favorita"
              aria-label="Buscar producto"
              aria-describedby="basic-addon2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>
      {/* SE HACE UNA COMPARACION DONDE LA BUSQUEDA DEL TERMINO ES VACIO; ENTONCES VA HA COLOCAR TODO EN LA VISUAL */}

      <div className="card-container">
        {searchTerm === "" ? (
          data.map((dato) => (
            <Card
              className="card text-bg-light mb-1 m-2 p-2"
              style={{ width: "400px" }}
              key={dato.id}
            >
              <div
                className=""
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card.Img
                  className="text-center"
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
                  style={{
                    justifyContent: "center",
                    width: "400px",
                    marginLeft: "-25px",
                  }}
                >
                  {dato.description}
                </Card.Text>
                <Agregar />
              </Card.Body>
            </Card>
          ))
        ) : /* Y AQUÍ SE LE PREGUNTA POR LO QUE HAY EN LA BARRA DE BUSQUEDA Y SI EL OBJETO ES MAYOR A 0 VA A RENDERIZAR UNICAMENTE LO QUE HAY DENTRO DE FILTRO */
        filtro && filtro.length > 0 ? (
          filtro.map((dato) => (
            <Card
              className="card text-bg-light mb-5 m-2 p-2"
              style={{ width: "400px" }}
              key={dato.id}
            >
              <div
                className=""
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card.Img
                  className="text-center"
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
                  style={{
                    justifyContent: "center",
                    width: "400px",
                    marginLeft: "-25px",
                  }}
                >
                  {dato.description}
                </Card.Text>
                <Agregar />
              </Card.Body>
            </Card>
          ))
        ) : (
          <span>No se encontraron resultados</span>
        )}
      </div>
    </div>
  );
};
