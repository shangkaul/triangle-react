import "./styles.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="Nav">
      <div className="tabBar">
        <Link to="/">
          <li className="navHead">Fun with Triangles</li>
        </Link>
        <Link to="/quiz">
          <li className="navItem">Quiz</li>
        </Link>
        <Link to="/hypotenuse">
          <li className="navItem">Hypotenuse</li>
        </Link>
        <Link to="/istriangle">
          <li className="navItem">Is Triangle</li>
        </Link>
        <Link to="/area">
          <li className="navItem">Area of Triangle</li>
        </Link>
      </div>
    </div>
  );
}
