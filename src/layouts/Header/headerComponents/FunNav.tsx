import { NavLink } from "react-router-dom";
import "../../layout.css";

const FunNav = () => {
  return (
    <nav className="d-inline-block align-center">
      <NavLink to="/">
        <span>Home</span>
      </NavLink>
      <NavLink to="/airB">
        <span>Air B&B</span>
      </NavLink>
      <NavLink to="/chill">
        <span>Chilling</span>
      </NavLink>
      <NavLink to="/trip">
        <span>Trip</span>
      </NavLink>
      <NavLink to="/feedback">
        <span>Feedback</span>
      </NavLink>
    </nav>
  );
};

export default FunNav;
