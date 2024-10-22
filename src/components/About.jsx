import styled from "styled-components";
import { RenderedTitle } from "./core/Text";

const Section = styled.section`
  background-color: var(--dark-grey);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--bg-color);
`;

const Frame = styled.div`
  width: 60%;
`;

const About = () => {
  return (
    <Section>
      <Frame>
        <RenderedTitle
          align={"justify"}
          fontSize="48px"
          color="var(--bg-color)"
          content={`Each item is crafted with care, offering <span>unique</span>, <span>high-quality</span>  pieces that <span>elevate</span> your style, whether you're dressing up or keeping it casual.`}
        />
      </Frame>
    </Section>
  );
};

export default About;
