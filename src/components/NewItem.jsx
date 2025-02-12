import { Title, TextStripe, SubTitle, Paragraph } from "./core/Text";
import { InfiniteSlider } from "./InfiniteSlider";
import { Button, Image, Container } from "./core/Components";
import styled from "styled-components";
import { motion, useTransform, useScroll } from "framer-motion";
import { mobile } from "../responsive";
import { useRef } from "react";
const Section = styled(motion.section)`
  background-color: ${(props) => (props ? props.bg : "var(--dark-grey)")};
  color: ${(props) => (props.color ? props.color : "var(--dark-grey)")};
  display: grid;
  max-height: 100vh;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  padding: 5rem;
  position: sticky;
  top: 0;
  gap: 2rem;
  ${mobile({
    gridTemplateColumns: "1fr",
    gap: "1rem",
    padding: "1rem",
  })}
`;
const Thumbnail = styled.div`
  position: relative;
  height: 80vh;
  ${mobile({ height: "20vh" })}
`;
const NewItem = ({ product, index }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end end"],
  });

  const { title, copy, img, bg, color, more } = product;
  const rotateArr = index % 2 == 0 ? [15, 0] : [-15, 0];
  console.log(rotateArr, index % 2 == 0, index);
  const scale = useTransform(
    scrollYProgress,
    [index * 0.25, (index + 1) * 0.25],
    [0.5, 1]
  );
  const rotate = useTransform(
    scrollYProgress,
    [index * 0.25, (index + 1) * 0.25],
    rotateArr
  );
  const borderRadius = useTransform(
    scrollYProgress,
    [index * 0.25, (index + 1) * 0.25],
    [50, 0]
  );

  return (
    <Section
      key={index}
      style={{ borderRadius, rotate, scale }}
      as={motion.section}
      bg={bg}
      more={more}
      ref={container}
    >
      <Thumbnail>
        <Image src={img} alt={title} />
        <TextStripe position={"absolute"} bg={bg} top={"80%"}>
          <InfiniteSlider>
            <Title content={"NEW NEW NEW - "} align={"center"} color={color} />
          </InfiniteSlider>
        </TextStripe>
      </Thumbnail>

      <Container>
        <Title fontSize={"100px"} content={title} color={color} />
        <Paragraph content={copy} color={color} fontSize={"20px"} />
        <Container gap={"12px"}>
          {more?.map((v, index) => (
            <SubTitle
              key={index}
              fontSize={"20px"}
              color={"var(--bg-color)"}
              content={v}
            />
          ))}
        </Container>

        <Button content={"Add to cart"} bgc={color} color={bg} />
      </Container>
    </Section>
  );
};

export default NewItem;
