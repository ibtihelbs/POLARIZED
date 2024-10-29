import { Linked } from "./core/Components";
import ImagePol from "./core/ImagePol";
import { Title, Paragraph } from "./core/Text";
import styled from "styled-components";
import { mobile } from "../responsive";
const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 30px;
  object-fit: cover;
`;
const Frame = styled.div`
  gap: 3rem;
  width: 80%;
  border-radius: 15px;
  background-color: var(--bg-color);
  padding: 3rem;
  display: flex;
  box-shadow: var(--shadow);
  border: var(--border);
  ${mobile({ flexDirection: "column" })}
`;
const Section = styled.section`
  background-color: #ff9684;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Dopamin = () => {
  return (
    <Section>
      <Frame>
        <div>
          <Title content={"Dopamine Décor"} />

          <ImagePol>
            <Img src="/deco.jpg" alt="deco" />
          </ImagePol>
        </div>
        <div>
          <Paragraph
            content={
              "Bring on the good vibes with our Dopamine Décor! Bold colors and playful designs that are all about boosting your mood and your space. Because who says your home can’t be as unique and vibrant as your style?"
            }
          />
          <img src="/arrow2.png" alt="arrow" />
        </div>
        <Linked link={"/productlist"} self={"end"} name={"click now!"} />
      </Frame>
    </Section>
  );
};

export default Dopamin;
