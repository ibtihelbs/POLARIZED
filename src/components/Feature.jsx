import ImagePol from "./core/ImagePol";
import { Paragraph, Title } from "./core/Text";
import styled from "styled-components";
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Frame = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-row: repeat(2, 1fr);
  gap: 1rem;
  width: 60%;
  padding: 1rem;
  background-color: red;
`;
const Feature = ({ title, img, paragraph }) => {
  return (
    <Section>
      <Frame>
        <Title content={title} col={"span 2"} />
        <div style={{ gridRow: "span 2" }}>
          <ImagePol>
            <img src={img} alt={title} />
          </ImagePol>
        </div>
        <Paragraph content={paragraph} col={"span 2"} />
      </Frame>
    </Section>
  );
};

export default Feature;
