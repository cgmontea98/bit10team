import React, { useState } from "react";
export const Busqueda = ({ data }) => {
  const [search, setSearch] = useState('');
  const updateInput = (e) => {
    setSearch(e.target.value);
  };
  const results = !search
    ? data
    : data.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
  return <input type="text" value={search} onInput={updateInput} placeholder="Buscar tu cerveza favorita"/>;
};