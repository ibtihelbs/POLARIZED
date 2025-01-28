import styled from "styled-components";
import { RenderedTitle } from "./core/Text";
import { motion, useScroll, useTransform } from "framer-motion";

const Section = styled(motion.section)`
  background-color: var(--dark-grey);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--bg-color);
`;

const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.1], [5, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.1], [50, 0]);
  return (
    <Section as={motion.section} style={{ scale, rotate, borderRadius }}>
      <RenderedTitle
        fontSize="100px"
        color="var(--bg-color)"
        content={`Each item is crafted with care, offering <span>unique</span>, <span>high-quality</span>  pieces that <span>elevate</span> your style, whether you're dressing up or keeping it casual.`}
      />
    </Section>
  );
};

export default About;
