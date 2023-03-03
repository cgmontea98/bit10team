import "bootstrap/dist/css/bootstrap.min.css";
import { Api } from "./components/Api";
import { Carrito } from "./components/Carrito";
import { Pie } from "./components/Pie";

function App() {
  return (
    <div className="App">
      <h1>CVJS Dev's</h1>
      <p className="read-the-docs">Consultoria</p>
      <Carrito />
      <Api />
      <Pie /> 
    </div>
  );
}

export default App;