import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
 
      </ul>
    </>
  );
}
