import {
  NavContainer,
  NavContent,
  Logo,
  DetailsContainer,
  NavTextLinkMob,
} from "./styles";
// Logo //
import logo from "../../../assets/img/logo.png";
// Router //
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavContainer>
      <NavContent>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>
        <DetailsContainer>
          <Link to="/about">
            <NavTextLinkMob>About HiBerlin</NavTextLinkMob>
          </Link>
        </DetailsContainer>
      </NavContent>
    </NavContainer>
  );
};

export default Nav;
