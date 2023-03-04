import React from 'react'
import Portada from "../../img/Portada.png";
import '../css/inicio.css'

function Home() {
  return (
    <div>
      {/* Marquesin con promo*/}
    <div class="container-fluid bg-light border-1">
      <marquee behavior = "scroll" dirección = "scrollamount" class="promo">
        <span class="material-symbols-outlined">
        <i className="fa-solid fa-cart-shopping text-back"></i> Por compras mayores a $100.000 COP el envío es gratis <i className="fa-solid fa-cart-shopping text-back"></i>
          </span>
          </marquee>
    </div>
    {/* Imagen de portada*/}
      <img src={Portada} class="d-block w-100" alt="Portada"/>
      {/* Titulo y descripcion*/}
      <h1>Cervezas</h1>
      <p>¿Busca degustar sabores nuevos para su paladar? En <span>Beers CVJS Dev's</span> aprenderá de la mano de expertos a degustar las mejores <span>cervezas</span> para toda ocasión. Y para tener toda la experiencia en sus manos, usted puede encontrar todos los ingredientes y utensilios básicos para seguir las recetas de cervezas y llevar a cabo su elaboración.</p>
    </div>
  )
}

export default Home