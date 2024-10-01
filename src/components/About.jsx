import styled from "styled-components";
import { Paragraph } from "./core/Text";
const Section = styled.section`
  background-color: var(--dark-grey);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Frame = styled.div`
  width: 560px;
  border: white 15px solid;
  background-color: var(--bg-color);
  padding: 1rem;
  transform: rotate(-15deg);
  border-radius: 30px;
`;

const About = () => {
  return (
    <Section>
      <Frame>
        <h2>Quality That Matches Your Vibe**</h2>
        <Paragraph
          content={` Every item is crafted with care,
        combining *uniqueness* with *high quality*. Whether you're stepping out
        or keeping it chill, we’ve got the pieces to elevate your look and last
        through the swings.`}
        />
      </Frame>

     
    </Section>
  );
};
/**
 * 
 * 

        <div>
          ### **Slide Into Your Style** Ready to express every side of you?
          Polarized makes it easy. Browse our collections, and let your style
          shine through. Whether you're feeling loud or laid-back, we’re here to
          match your mood.
        </div>

        <div>
          ### **Mood Swings Welcome!** No judgment here. Style changes with the
          moment, and we’re all for it! Let us help you find the perfect match
          for today’s vibe — and tomorrow’s too.
        </div>
 */
export default About;
