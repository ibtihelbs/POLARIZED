import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../../responsive";
// Styled Components
const ImageStyled = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  border: 2px solid var(--dark-grey);
`;
const StyledContainer = styled.div`
  display: grid;
  gap: ${(props) => (props.gap ? props.gap : "24px")};
  order: ${(props) => (props.order ? props.order : "initial")};
  justify-items: ${(props) => (props.justity ? props.justity : "start")};
  ${tablet({
    gap: (props) =>
      props.fontSize
        ? parseInt(props.fontSize.replace("px", "")) / 4 + "px"
        : "8px",
  })}
`;
const StyledButton = styled.button`
  padding: 1rem 2rem;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  border: 2px solid ${(props) => props.color || "var(--dark-grey)"};
  border-radius: 999px;
  background-color: ${(props) => props.bgc || "var(--neon)"};
  box-shadow: 5px 5px 0px ${(props) => props.color || "var(--dark-grey)"};
  text-transform: capitalize;
  font-weight: bold;

  letter-spacing: 5%;
  font-size: 24px;
  color: ${(props) => props.color || "var(--dark-grey)"};
  &:hover {
    background-color: ${(props) =>
      props.bgc ? props.color : "var(--dark-grey)"};
    transform: translate(5px, 5px);
    box-shadow: none;
    color: ${(props) => (props.bgc ? props.bgc : "var(--neon)")};
    border-color: ${(props) => (props.bgc ? props.bgc : "var(--neon)")};
  }
  ${mobile({
    fontSize: "12px",
    padding: ".5rem 1rem",
  })}
`;
const SectionStyled = styled.section`
  background-color: ${(props) => (props ? props.bg : "var(--dark-grey)")};
  color: ${(props) => (props.color ? props.color : "var(--dark-grey)")};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 5rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  ${tablet({ padding: 0, paddingTop: "1rem" })};
`;
const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  border: 2px solid var(--dark-grey);
  box-shadow: 5px 5px 0px var(--dark-grey);
  border-radius: 999px;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  font-weight: bold;
  letter-spacing: 5%;
  font-size: 24px;
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
  ${mobile({
    fontSize: "12px",
    padding: ".5rem 1rem",
  })}
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
const Container = ({ gap, children, justity, order }) => {
  return (
    <StyledContainer gap={gap} order={order}>
      {children}
    </StyledContainer>
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
const Section = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>;
};
// Export components
export {
  Image,
  Linked,
  Button,
  Container,
  Section,
  TextInput,
  Label,
  PasswordInput,
};
