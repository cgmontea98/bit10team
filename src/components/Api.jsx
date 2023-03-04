import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { v4 as uuidv4 } from "uuid";
import { Busqueda } from "./Busqueda";
import { Carrusel } from "./Carrusel.jsx";

export const Api = () => {
  const [data, setData] = useState([]);
  async function getBeers() {
    let res = await fetch(
      "https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6"
    );
    res = await res.json();
    setData(res);
  }
  useEffect(() => {
    getBeers();
  }, []);
  console.log(data)
  return (
    <div>
      <h1>Bebidas</h1>
      <Busqueda />
      <Carrusel data={data}/>
    </div>
  );
};
