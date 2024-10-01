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
  line-height: 25px;
  font-size: 56px;
  letter-spacing: -1px;
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
const Title = ({ content, align, col }) => {
  return (
    <StyledTitle align={align} col={col}>
      {" "}
      {content}{" "}
    </StyledTitle>
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
export { Paragraph, Title, SubTitle };
