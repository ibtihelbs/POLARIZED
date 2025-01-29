import { Title, TextStripe, SubTitle, Paragraph } from "./core/Text";
import { InfiniteSlider } from "./InfiniteSlider";
import { Button, Image, Container } from "./core/Components";
import styled from "styled-components";
import { motion, useTransform, useScroll } from "framer-motion";
import { mobile } from "../responsive";
import { useRef, useEffect } from "react";
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
  gap: 3rem;
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
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress.hasAnimated]);

  const { title, copy, img, bg, color, more } = product;
  const scaleArr = index % 2 == 0 ? [1, 0.5] : [0.5, 1.1];
  const rotateArr = index % 2 == 0 ? [0, -5] : [-5, 0];
  const borderRadiusArr = index % 2 == 0 ? [50, 0] : [0, 50];
  const final = index + 1 / 4;
  const start = Math.abs(final - 1);

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], rotateArr);
  const borderRadius = useTransform(scrollYProgress, [0, 1], borderRadiusArr);

  return (
    <Section
      key={index}
      style={(borderRadius, rotate, scale)}
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
        <Paragraph content={copy} color={color} fontSize={"24px"} />
        <Container gap={"12px"}>
          {more?.map((v, index) => (
            <SubTitle
              key={index}
              fontSize={"24px"}
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
