import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/carrusel.css";
export const Carrusel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Carousel>
      {data.map((dato) => (
        <Carousel.Item key={dato.id}>
          <img
            className="d-block mx-auto"
            src={dato.image_url}
            alt=""
            style={{ maxHeight: "250px", maxWidth: "100px" }}
          />
          <h3>{dato.name}</h3>
          <p>{dato.description}</p>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
