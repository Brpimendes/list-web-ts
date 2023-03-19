import Navbar from "../Navbar";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">
        <img src="#" alt="logo" />
      </div>
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
