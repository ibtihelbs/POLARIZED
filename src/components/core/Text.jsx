import { mobile } from "../../responsive";
import styled from "styled-components";

// Styled Components
const StyledParagraph = styled.p`
  text-align: ${(props) => (props.align ? props.align : "left")};
  grid-column: ${(props) => (props.col ? props.col : "1 / 2")};
  max-width: 560px;
  text-indent: 1rem;
  line-height: 125%;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  letter-spacing: 2%;
  font-weight: ${(props) => (props.bold ? props.bold : "400")};
  color: ${(props) => (props.color ? props.color : "inherit")};
  paint-order: stroke fill;
  -webkit-text-stroke: ${(props) =>
    props.stroke ? props.stroke : "transparent"};
  text-stroke: ${(props) => (props.stroke ? props.stroke : "transparent")};
`;

const StyledTitle = styled.h1`
  paint-order: stroke fill;
  text-decoration: ${(props) => (props.decor ? props.decor : "none")};
  -webkit-text-stroke: ${(props) =>
    props.stroke ? props.stroke : "transparent"};
  text-stroke: ${(props) => (props.stroke ? props.stroke : "transparent")};

  text-align: ${(props) => (props.$align ? props.$align : "left")};
  grid-column: ${(props) => (props.col ? props.col : "1 / 2")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "56px")};
  text-decoration-color: var(--dark-grey);
  line-height: 100%;
  letter-spacing: -10%;
  width: 100%;
  max-width: 60%;
  color: ${(props) => (props.color ? props.color : "inherit")};

  span {
    font-weight: bold;
    font-family: inherit;
    color: var(--neon);
    line-height: 100%;
    -webkit-text-stroke: 2px var(--bg-color);
  }

  ${mobile({
    fontSize: (props) =>
      props.fontSize
        ? parseInt(props.fontSize.replace("px", "")) / 2 + "px"
        : "48px",
  })}
`;

const StyledSubsTitle = styled.h2`
  text-align: ${(props) => (props.align ? props.align : "left")};
  grid-column: ${(props) => (props.col ? props.col : "1 / 2")};
  color: ${(props) => (props.color ? props.color : "inherit")};
  line-height: 90%;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24px")};

  letter-spacing: 1%;
`;

const StripeStyled = styled.div`
  background-color: ${(props) => props.bg || "var(--neon)"};
  width: 100%;
  overflow: hidden;
  z-index: 25;
  white-space: nowrap;
  transform: ${(props) => props.transform || "translateX(0)"};
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top || "0"};
`;

// Functional Components
const Paragraph = ({ content, align, col, bold, color, fontSize, stroke }) => {
  return (
    <StyledParagraph
      align={align}
      col={col}
      bold={bold}
      color={color}
      stroke={stroke}
      fontSize={fontSize}
    >
      {content}
    </StyledParagraph>
  );
};

const Title = ({ content, align, col, fontSize, color, stroke, decor }) => {
  return (
    <StyledTitle
      stroke={stroke}
      $align={align} // Use transient prop
      col={col}
      fontSize={fontSize}
      color={color}
      decor={decor}
    >
      {content}
    </StyledTitle>
  );
};

const RenderedTitle = ({ content, align, col, fontSize, color }) => {
  return (
    <StyledTitle
      $align={align} // Use transient prop
      col={col}
      fontSize={fontSize}
      color={color}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

const SubTitle = ({ content, align, col, color, fontSize }) => {
  return (
    <StyledSubsTitle align={align} col={col} color={color} fontSize={fontSize}>
      {content}
    </StyledSubsTitle>
  );
};

const TextStripe = ({ children, position, top, bg, transform }) => {
  return (
    <StripeStyled position={position} top={top} bg={bg} transform={transform}>
      {children}
    </StripeStyled>
  );
};

// Export Components
export { Paragraph, Title, SubTitle, RenderedTitle, TextStripe };
