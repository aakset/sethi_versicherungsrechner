import { Link } from "react-router-dom";
import "../App.css";
export function Home() {
  return (
    <div className="start_button_div">
    <Link to="/erste">
      <button className="start_button">Versicherungübernahme berechnen</button>
    </Link>
    </div>
  );
}

