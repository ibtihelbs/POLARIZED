import ImagePol from "./core/ImagePol";
import { Paragraph, Title } from "./core/Text";
import styled from "styled-components";
import { Image, Linked } from "./core/Components";
import { mobile } from "../responsive";
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
  gap: 3rem;
  width: 80%;
  border-radius: 15px;
  background-color: var(--bg-color);
  padding: 3rem;
  ${mobile({ gridTemplateColumns: "1fr" })}
`;
const Feature = ({ title, img, paragraph, order, bg, color }) => {
  return (
    <Section style={{ background: bg }}>
      <Frame>
        <ImagePol>
          <Image src={img} alt={title} />
        </ImagePol>

        <div
          style={{
            gridColumn: "span 2",
            order: order,
            display: "grid",
            gap: "1rem",
          }}
        >
          <Title content={title} col={"span 2"} color={color} />

          <Paragraph content={paragraph} />
          <Linked name={"Shop Now"} link={"/productlist"} />
        </div>
      </Frame>
    </Section>
  );
};

export default Feature;
