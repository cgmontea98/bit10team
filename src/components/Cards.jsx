import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Agregar } from "./Agregar";
import { InputGroup, FormControl, Button } from "react-bootstrap";

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
      {/* SE HACE UNA COMPARACION DONDE LA BUSQUEDA DEL TERMINO ES VACIO; ENTONCES VA HA COLOCAR TODO EN LA VISUAL */}
      {searchTerm === "" ? (
        data.map((dato) => (
          <Card style={{ width: "18rem" }} key={dato.id}>
            <Card.Img variant="top" src={dato.image_url} />
            <Card.Body>
              <Card.Title>{dato.name}</Card.Title>
              <Card.Text>{dato.description}</Card.Text>
              <Agregar />
            </Card.Body>
          </Card>
        ))
      ) : /* Y AQUÍ SE LE PREGUNTA POR LO QUE HAY EN LA BARRA DE BUSQUEDA Y SI EL OBJETO ES MAYOR A 0 VA A RENDERIZAR UNICAMENTE LO QUE HAY DENTRO DE FILTRO */
      filtro && filtro.length > 0 ? (
        filtro.map((dato) => (
          <Card style={{ width: "18rem" }} key={dato.id}>
            <Card.Img variant="top" src={dato.image_url} />
            <Card.Body>
              <Card.Title>{dato.name}</Card.Title>
              <Card.Text>{dato.description}</Card.Text>
              <Agregar />
            </Card.Body>
          </Card>
        ))
      ) : (
        <span>No se encontraron resultados</span>
      )}
    </>
  );
};
