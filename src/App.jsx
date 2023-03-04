import "bootstrap/dist/css/bootstrap.min.css";
import { Api } from "./components/Api";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Team from "./components/Team";
import { Carrito } from "./components/Carrito";
import { Pie } from "./components/Pie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Api" element={<Api/>}/>
          <Route path="/Team" element={<Team/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
