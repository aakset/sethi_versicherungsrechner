import { useState, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import Erste from "./Pages/Erste";
import Summe from "./Pages/Summe";
import Durchschnitt from "./Pages/Durchschnitt";
import About from './Pages/About';
import Kontakt from './Pages/Kontakt';


function App() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressPercentage = 0;
    switch (location.pathname) {
      case "/erste":
        progressPercentage = 33;
        break;
      case "/summe":
        progressPercentage = 100;
        break;
      case "/durchschnitt":
        progressPercentage = 66;
        break;
      default:
        progressPercentage = 0;
    }
    setProgress(progressPercentage);
  }, [location]);

  return (
    <>
      <ul className="navigation_ul">
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/About">Über uns</Link></li>
        <li> <Link to="/Kontakt">Kontakt</Link></li>
      </ul>

      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/erste" element={<Erste />} />
        <Route path="/summe" element={<Summe />} />
        <Route path="/durchschnitt" element={<Durchschnitt />} />
        <Route path="/about" element={<About />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </>
  );
}

export default App;
