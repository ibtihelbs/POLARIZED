import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import styled from "styled-components";
import { mobile } from "../responsive";
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 3rem;

  position: relative;

  ${mobile({ padding: "0 1rem" })};
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  height: 60px;
  ${mobile({ display: "none" })};
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  color: black;
`;

const StyledLink = styled(Link)`
  font-weight: 600;
`;
const Menudropdown = styled.ul`
  position: absolute;
  z-index: 10;
  top: 100%;
  border: 1px solid #1d4ed8;
  background-color: #f9ffb9;
  padding: 1rem;
  box-shadow: 5px 5px 0px #1d4ed8;
  border-radius: 1rem;
`;
const Li = styled.li`
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;
const Navbar = ({ user }) => {
  const quantity = useSelector((state) => state.cart.quantity);
  const navigate = useNavigate();
  const [searched, setSearched] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const handleSearch = (ev) => {
    ev.preventDefault();
    navigate(`productlist/${searched}`);
  };
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <NavbarContainer>
      <Form className="searchBar">
        <SearchButton type="submit" onClick={handleSearch}>
          <FaSearch className="icon" />
        </SearchButton>
        <SearchInput
          type="search"
          name="search"
          placeholder="Search ......"
          onChange={(e) => setSearched(e.target.value)}
        />
      </Form>
      <StyledLink to={"/"}>
        <h3>polarized</h3>
      </StyledLink>
      <ul style={{ display: "flex", gap: "15px" }}>
        <Li>
          <StyledLink to={"/ProductList"}>shop</StyledLink>
        </Li>
        {user ? (
          <>
            <Li onClick={handleDropDown}>
              <BsFillPersonFill />
            </Li>
            <Menudropdown style={{ display: `${dropDown ? "block" : "none"}` }}>
              <Li>
                <StyledLink to={"/Account"}>Account</StyledLink>
              </Li>
              <Li>
                <StyledLink to={"#"}>Log out</StyledLink>
              </Li>
            </Menudropdown>
          </>
        ) : (
          <>
            <Li onClick={handleDropDown}>
              <BsFillPersonFill />
            </Li>
            <Menudropdown style={{ display: `${dropDown ? "block" : "none"}` }}>
              <Li>
                <StyledLink onClick={handleDropDown} to={"/Login"}>
                  Login
                </StyledLink>
              </Li>
              <Li>
                <StyledLink onClick={handleDropDown} to={"/Register"}>
                  Register
                </StyledLink>
              </Li>
            </Menudropdown>
          </>
        )}
        <Li>
          <StyledLink to={"/Cart"}>
            <FaCartShopping className="icon" />
          </StyledLink>
        </Li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
