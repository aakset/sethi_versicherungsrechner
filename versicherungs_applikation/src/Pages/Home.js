import { Link } from "react-router-dom";
import "../App.css";
export function Home() {
  return (
    <Link to="/erste">
      <button className="start_button">Versicherungübernahme berechnen</button>
    </Link>
  );
}
