import React from "react";
import "../css/inicio.css";
import Portada from "../../img/Portada.png";

function Inicio() {
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
      {/* Imagen de portada*/}
      <img src={Portada} className="d-block w-100" alt="Portada" />
      {/* Titulo y descripcion*/}
      <h1>Cervezas</h1>
      <p>
        ¿Busca degustar sabores nuevos para su paladar? En{" "}
        <span>Beers CVJS Dev's</span> aprenderá de la mano de expertos a
        degustar las mejores <span>cervezas</span> para toda ocasión.
      </p>
      <h1>Historia</h1>
      <p>
        <span>Beers CVJS Dev's</span> nace de la unión de 4 estudiantes de
        programación con el sueño de crear una página ventas funcional para un
        público joven que esté dispuesto a conocer y desgudtar de una buena
        cerveza.
      </p>
    </div>
  );
}

export default Inicio;
