import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul
        style={{ backgroundColor: "gray" }}
        className="nav justify-content-center"
      >
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/createPost">
          Create Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
