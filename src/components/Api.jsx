import React, { useEffect, useState } from "react";
import { Cards } from "./Cards.jsx";

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
  return (
    <div>
      {/* Marquesin con promo*/}
      <div className="container-fluid bg-light border-1">
        <marquee behavior="scroll" dirección="scrollamount" className="promo">
          <span className="material-symbols-outlined">
            <i className="fa-solid fa-cart-shopping text-back"></i> Por compras
            mayores a $100.000 COP el envío es gratis
            <i className="fa-solid fa-cart-shopping text-back"></i>
          </span>
        </marquee>
      </div>
      <h1>Bebidas</h1>
      <Cards data={data} />
    </div>
  );
};
