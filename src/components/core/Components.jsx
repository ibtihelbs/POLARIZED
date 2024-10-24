import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components
const ImageStyled = styled.img`
  width: 100%;
  border-radius: 30px;
  border: 2px solid var(--dark-grey);
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  border: 2px solid var(--dark-grey);
  border-radius: 999px;
  background-color: ${(props) => props.bgc || "var(--neon)"};
  box-shadow: 5px 5px 0px var(--dark-grey);
  text-transform: capitalize;

  &:hover {
    background-color: ${(props) =>
      props.bgc ? props.color : "var(--dark-grey)"};
    transform: translate(5px, 5px);
    box-shadow: none;
    color: ${(props) => (props.bgc ? props.bgc : "var(--neon)")};
    border-color: ${(props) => (props.bgc ? props.bgc : "var(--neon)")};
  }
`;

const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  border: 2px solid var(--dark-grey);
  box-shadow: 5px 5px 0px var(--dark-grey);
  border-radius: 999px;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  font-weight: bold;
  background-color: ${(props) => props.bgc || "var(--neon)"};
  place-self: ${(props) => (props.self ? props.self : "start")};
  &:hover {
    background-color: ${(props) =>
      props.bgc ? props.color : "var(--dark-grey)"};
    transform: translate(5px, 5px);
    box-shadow: none;
    color: ${(props) => (props.bgc ? props.bgc : "var(--neon)")};
    border-color: ${(props) => (props.bgc ? props.bgc : "var(--neon)")};
  }
`;

const StyledInput = styled.input`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  padding: ${(props) => props.padding || "10px"};
  margin: ${(props) => props.margin || "10px 0"};
  border: 3px solid ${(props) => props.borderColor || "var(--dark-grey)"};
  border-radius: ${(props) => props.borderRadius || "999px"};
  background-color: ${(props) => props.bgColor || "transparent"};
  color: ${(props) => props.color || "inherit"};
  font-size: ${(props) => props.fontSize || "16px"};

  &:focus {
    outline: none;
    border-color: ${(props) => props.focusBorderColor || "var(--neon)"};
  }
`;

// Components
const Image = ({ src, alt }) => {
  return <ImageStyled src={src} alt={alt} />;
};

const Linked = ({ link, name, bgc, color, self }) => {
  return (
    <StyledLink to={link} bgc={bgc} color={color} self={self}>
      {name}
    </StyledLink>
  );
};

const Button = ({ type = "button", content, color, bgc, onClick }) => {
  return (
    <StyledButton type={type} color={color} bgc={bgc} onClick={onClick}>
      {content}
    </StyledButton>
  );
};

// Extended Inputs with onChange support
const TextInput = styled(StyledInput).attrs(({ onChange }) => ({
  type: "text",
  onChange,
}))``;

const PasswordInput = styled(StyledInput).attrs(({ onChange }) => ({
  type: "password",
  onChange,
}))``;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: ${(props) => props.marginBottom || "5px"};
  color: ${(props) => props.color || "var(--dark-grey)"};
`;

// Export components
export { Image, Linked, Button, TextInput, Label, PasswordInput };
