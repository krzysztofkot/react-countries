import { NavLink } from "react-router-dom";
import { IoMdGlobe } from "react-icons/io";
import { StyledHeader, StyledNav } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <NavLink to="/">
        <IoMdGlobe size={42} />
        <h1>Countries</h1>
      </NavLink>
      <StyledNav>
        <input type="checkbox" name="hamburger" id="hamburger" />
        <label htmlFor="hamburger">&nbsp;</label>
        <ul>
          <li>
            <NavLink to="search">Search countries</NavLink>
          </li>
          <li>
            <NavLink to="all">Browse countries</NavLink>
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
