import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";

export const Busqueda = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtro, setFiltro] = useState([]);

  const uno = () => {
    if (filtro.length > 0) {
      return filtro.map((dato) => {
        return <span key={dato.id}>{dato.name}</span>;
      });
    } else {
      return <span>Error</span>;
    }
  };

  useEffect(() => {
    const resultado = data.filter((dato) => {
      return dato.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFiltro(resultado);
  }, [searchTerm, data]);

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      {uno()}
    </div>
  );
};
