import {
  Title,
  TextStripe,
  SubTitle,
  Paragraph,
} from "../components/core/Text";
import { InfiniteSlider } from "../components/InfiniteSlider";
import { Button, Image, Container } from "../components/core/Components";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

const Section = styled(motion.section)`
  background-color: ${(props) => (props ? props.bg : "var(--dark-grey)")};
  color: ${(props) => (props.color ? props.color : "var(--dark-grey)")};
  display: grid;
  max-height: 100vh;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  padding: 5rem;
  gap: 3rem;
`;
const Thumbnail = styled.div`
  position: relative;
  height: 80vh;
`;
const NewItem = ({ product, index, scrollYProgress }) => {
  const { title, copy, img, bg, color, more } = product;
  const scaleArr = index % 2 == 1 ? [0.9, 1] : [1, 0.9];
  const rotateArr = index % 2 == 1 ? [-5, 0] : [5, 0];
  const borderRadiusArr = index % 2 == 1 ? [50, 0] : [0, 50];

  const scale = useTransform(scrollYProgress, [0, 1], scaleArr);
  const rotate = useTransform(scrollYProgress, [0, 1], rotateArr);
  const borderRadius = useTransform(scrollYProgress, [0, 1], borderRadiusArr);

  console.log({ scrollYProgress });
  return (
    <Section
      key={index}
      as={motion.section}
      bg={bg}
      style={{ scale, rotate, borderRadius }}
      more={more}
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
