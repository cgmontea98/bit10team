import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { v4 as uuidv4 } from "uuid";

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

  console.log(data);
  return (
    <div>
      <h1>Bebidas</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Img</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={uuidv4()}>
              <th>{data.id}</th>
              <th>{data.name}</th>
              <th>
                <img src={data.image_url} style={{ width: '5rem' }}></img>{" "}
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
