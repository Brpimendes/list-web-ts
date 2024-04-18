import { ShoppingCart } from '@phosphor-icons/react';

import Summary from '../Summary';
import Navbar from '../Navbar';

import { HeaderContainer } from './styles';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <NavLink to={'/list-web-ts/'}>
            <ShoppingCart size={66} color="#fff" />
          </NavLink>
        </div>
        <Summary />
        <Navbar />
      </HeaderContainer>
    </>
  );
};

export default Header;
