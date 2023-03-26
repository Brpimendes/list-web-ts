import { NavLink } from "react-router-dom";
import { NavbarContainer } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Criar Lista
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Registrar
          </NavLink>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
