import { NavLink } from 'react-router-dom';
import { NavbarContainer } from './styles';
import { List } from '@phosphor-icons/react';

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="hamburguer">
        <List size={40} />
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Criar Lista
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Registrar
          </NavLink>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
