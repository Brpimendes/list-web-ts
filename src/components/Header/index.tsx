import { ShoppingCart } from "@phosphor-icons/react";

import Summary from "../Summary";
import Navbar from "../Navbar";

import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <a href="/">
            <ShoppingCart size={84} color="#fff" />
          </a>
        </div>
        <Summary />
        <Navbar />
      </HeaderContainer>
    </>
  );
};

export default Header;
