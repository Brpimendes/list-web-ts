import Navbar from "../Navbar";
import { ShoppingCart } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";
import Summary from "../Summary";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <a href="/">
            <ShoppingCart size={84} color="#fff" />
          </a>
        </div>
        <Navbar />
      </HeaderContainer>
      <Summary />
    </>
  );
};

export default Header;
