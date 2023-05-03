import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import Erste from "./Pages/Erste";
import Summe from "./Pages/Summe";
import Durchschnitt from "./Pages/Durchschnitt";

function App() {
  return (
    <>
    <nav>
      <ul className="navigation_ul">
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/erste"> Auswahl </Link></li>
        <li><Link to="/summe"> Summe </Link></li>
        <li><Link to="/durchschnitt"> Schnitt </Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/erste" element={<Erste />} />
      <Route path="/summe" element={<Summe />} />
      <Route path="/durchschnitt" element={<Durchschnitt />} />
    </Routes>
    </>
  );
}

export default App;
