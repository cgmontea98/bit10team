import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
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
          <h3>{dato.name}</h3>
          <img src={dato.image_url} alt="" />
          <p>{dato.description}</p>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
