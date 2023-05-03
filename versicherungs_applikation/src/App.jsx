import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import Erste from "./Pages/Erste";
import Auswahlseite from "./Pages/Auswahlseite";

function App() {
  return (
    <>
    <nav>
      <ul className="navigation_ul">
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/erste"> Erste </Link></li>
        <li><Link to="/auswahlseite"> Auswahlseite </Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/erste" element={<Erste />} />
      <Route path="/auswahlseite" element={<Auswahlseite />} />
    </Routes>
    </>
  );
}

export default App;
