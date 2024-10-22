import styled from "styled-components";

const StyledParagraph = styled.p`
  align-text: ${(props) => (props.align ? props.align : "left")};
  grid-column: ${(props) => (props.col ? props.col : "1 / 2")};
  max-width: 560px;
  text-indent: 1rem;
  line-height: 25px;
  font-size: 16px;
  letter-spacing: 1px;
`;
const StyledTitle = styled.h1`
  align-text: ${(props) => (props.align ? props.align : "left")};
  grid-column: ${(props) => (props.col ? props.col : "1 / 2")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "56px")};
  line-height: 100%;
  letter-spacing: 1px;
  color: ${(props) => (props.color ? props.color : "inherit")};
  span {
    font-weight: bold;
    font-family: inherit;
    color: var(--neon);
    line-height: 100%;
    -webkit-text-stroke: 2px var(--bg-color);
  }
`;
const StyledSubsTitle = styled.h2`
  align-text: ${(props) => (props.align ? props.align : "left")};
  grid-column: ${(props) => (props.col ? props.col : "1 / 2")};
  line-height: 25px;
  font-size: 20px;
  letter-spacing: -1px;
`;
const Paragraph = ({ content, align, col }) => {
  return (
    <StyledParagraph align={align} col={col}>
      {" "}
      {content}{" "}
    </StyledParagraph>
  );
};

const Title = ({ content, align, col, fontSize, color }) => {
  return (
    <StyledTitle align={align} col={col} fontSize={fontSize} color={color}>
      {" "}
      {content}{" "}
    </StyledTitle>
  );
};
const RenderedTitle = ({ content, align, col, fontSize, color }) => {
  return (
    <StyledTitle
      align={align}
      col={col}
      fontSize={fontSize}
      color={color}
      
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
const SubTitle = ({ content, align, col }) => {
  return (
    <StyledSubsTitle align={align} col={col}>
      {" "}
      {content}{" "}
    </StyledSubsTitle>
  );
};
export { Paragraph, Title, SubTitle, RenderedTitle };
