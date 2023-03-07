import React,{useState} from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Buscar producto..."
        aria-label="Buscar producto"
        aria-describedby="basic-addon2"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <Button variant="outline-secondary" onClick={handleSearch}>
        Buscar
      </Button>
    </InputGroup>
  );
};
