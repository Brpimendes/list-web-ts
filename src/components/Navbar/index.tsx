import { NavLink } from "react-router-dom";
import { Navbar } from "./styles";

const NavbarContainer = () => {
  return (
    <Navbar>
      <ul className="links_list">
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
    </Navbar>
  );
};

export default NavbarContainer;
