import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export const Api = () => {
  const [data, setData] = useState([]);

  async function getBeers() {
    const res = await fetch(
      "https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6"
    );
    res = await res.json();
    setData(res);
  }

  useEffect(() => {
    getBeers();
  }, []);

  const handleClick = () => {
    console.log(data);
  };

  return (
    <div>
      <h1>Bebidas</h1>
      <button onClick={() => handleClick()}>click</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dato) => (
            <tr>
              <th>{dato.id}</th>
              <th>{dato.name}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
