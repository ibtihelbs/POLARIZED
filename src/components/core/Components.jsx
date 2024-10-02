import styled from "styled-components";
import { Link } from "react-router-dom";
const ImageStyled = styled.img`
  width: 100%;
  border-radius: 30px;
  border: solid var(--dark-grey) 2px;
`;
const StyledButton = styled.button`
  padding: 1rem 2rem;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  border: inherit solid 2px;
  border-radius: 999px;
  background-color: ${(props) => (props.bgc ? props.bgc : "var(--neon)")};
  border: 1px var(--dark-grey) solid;
  box-shadow: 5px 5px 0px var(--dark-grey);
  text-transform: capitalize;
  &:hover {
    background-color: ${(props) =>
      props.bgc ? props.color : "var(--dark-grey)"};
    transform: translate(5px, 5px);
    box-shadow: 0px 0px 0px var(--dark-grey);
    color: ${(props) => (props.bgc ? props.bgc : "var(--neon)")};
    border: ${(props) => (props.bgc ? props.bgc : "var(--neon)")} solid 2px;
  }
`;
const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  float: right;
  border: inherit solid 2px;
  box-shadow: 5px 5px 0px var(--dark-grey);
  border-radius: 999px;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  font-weight: bold;
  background-color: ${(props) => (props.bgc ? props.bgc : "var(--neon)")};
  border: 1px var(--dark-grey) solid;
  &:hover {
    background-color: ${(props) =>
      props.bgc ? props.color : "var(--dark-grey)"};
    transform: translate(5px, 5px);
    box-shadow: 0px 0px 0px var(--dark-grey);
    color: ${(props) => (props.bgc ? props.bgc : "var(--neon)")};
    border: ${(props) => (props.bgc ? props.bgc : "var(--neon)")} solid 2px;
  }
`;
const Image = ({ src, alt }) => {
  return <ImageStyled src={src} alt={alt} />;
};
const Linked = ({ link, name, bg, color }) => {
  return (
    <StyledLink href={link} bgc={bg} color={color}>
      {" "}
      {name}{" "}
    </StyledLink>
  );
};
const Button = ({ type, content, color, bgc, onClick }) => {
  return (
    <StyledButton type={type} color={color} onClick={onClick} bgc={bgc}>
      {" "}
      {content}{" "}
    </StyledButton>
  );
};
export { Image, Linked, Button };
