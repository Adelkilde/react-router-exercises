import { NavLink } from "react-router-dom";
import AuthStatus from "./security/AuthStatus";
import { useAuth } from "./security/AuthProvider";

export default function NavHeader() {
  const auth = useAuth();
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
        {auth.isLoggedIn() && (
          <li>
            <NavLink to="/add">Add Recipe</NavLink>
          </li>
        )}
        {auth.isLoggedInAs(["ADMIN"]) && (
          <li>
            <NavLink to="/addCategory">Add Category</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <AuthStatus />
      </ul>
    </nav>
  );
}
