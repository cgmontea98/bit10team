import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export const Api = () => {
  const [data, setData] = useState([]);
  const [rows, setRows] = useState(null);
  const [col, setCol] = useState(null);

  useEffect(() => {
    const apiE = async () => {
      try {
        const traer = await fetch(
          "https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6"
        );
        setData(await traer.json());
      } catch (error) {
        alert(error, "no sirve");
      }
    };
    apiE();
  }, []);

  
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};
