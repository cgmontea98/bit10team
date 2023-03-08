import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import { Api } from "./components/Api";
import { Team } from "./components/Team";
import { Pie } from "./components/Pie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Catalogo" element={<Api />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
      </BrowserRouter>
      <Pie />
    </div>
  );
}

export default App;
