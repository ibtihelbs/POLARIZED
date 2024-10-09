import ImagePol from "./core/ImagePol";
import { Paragraph, Title } from "./core/Text";
import styled from "styled-components";
import { Image, Linked } from "./core/Components";
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  backgound-color: ${(props) => (props.bg ? props.bg : "red")};
`;
const Frame = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-row: repeat(2, 1fr);
  gap: 1rem;
  width: 80%;

  padding: 1rem;
`;
const Feature = ({ title, img, paragraph, order, bg }) => {
  return (
    <Section bg={bg}>
      <Frame>
        <ImagePol>
          <Image src={img} alt={title} />
        </ImagePol>

        <div style={{ gridColumn: "span 2", order: order }}>
          <Title content={title} col={"span 2"} />

          <Paragraph content={paragraph} />
          <Linked name={"Shop Now"} link={"/productlist"} />
        </div>
      </Frame>
    </Section>
  );
};

export default Feature;
