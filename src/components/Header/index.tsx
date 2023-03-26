import Navbar from "../Navbar";
import { ShoppingCart } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">
        <a href="/">
          <ShoppingCart size={84} color="#fff" />
        </a>
      </div>
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
