import { Link, NavLink } from "react-router-dom";
import AuthStatus from "./security/AuthStatus";

export default function NavHeader() {
  return (
    <nav>
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {/* <a href="/categories">Categories</a> */}
          {/* <Link to="/categories">Categories</Link> */}
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
          {/* <a href="/recipes">Recipes</a> */}
          {/* <Link to="/recipes">Recipes</Link> */}
          <NavLink to="/recipes">Recipes</NavLink>
        </li>
        <li>
          {/* <a href="/add">Add</a> */}
          {/* <Link to="/add">Add</Link> */}
          <NavLink to="/add">Add</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <AuthStatus />
      </ul>
    </nav>
  );
}
