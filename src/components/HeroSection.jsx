import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { Paragraph, SubTitle, Title } from "./core/Text";
import { Linked } from "./core/Components";
import { mobile } from "../responsive";
const HeroContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
  background-image: url(./images/hero.png);
  background-size: cover;
  min-height: 100vh;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 30px;
  border: solid 3px var(--dark-grey);
  position: absolute;
  z-index: ${(props) => props.theme.index};
`;
const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  ${mobile({ width: "100%" })}
`;
const theme = {
  index: 20,
};
const themeTwo = {
  index: 50,
};

const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
`;
const TextStripe = styled.div`
  background-color: var(--neon);
  width: 100%;
  overflow: hidden;
  position: absolute;
  z-index: 25;
  white-space: nowrap;
  transform: ${(props) => props.theme.transform};
  top: ${(props) => props.theme.top};
`;

const TextPositionOne = {
  top: "27%",
  transform: "rotate(5deg)",
};
const TextPositionTwo = {
  top: "60%",
  transform: "rotate(-5deg)",
};
const Wrap = styled.div`
  width: 100%;
`;

const Text = styled.h1``;

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.1], [0, -5]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.1], [0, 50]);

  // Debugging logs

  // Add fallback values to prevent NaN
  const safeRotate = isNaN(rotate.get()) ? 0 : rotate.get();
  const safeBorderRadius = isNaN(borderRadius.get()) ? 0 : borderRadius.get();

  return (
    <HeroContainer
      as={motion.div}
      style={{ scale, rotate: safeRotate, borderRadius: safeBorderRadius }}
    >
      <Container>
        <div>
          <Title
            content={"POLARIZED"}
            fontSize={"144px"}
            color={"var(--neon)"}
            shadow={"5px 5px var(--dark-grey)"}
            align={"center"}
          />
          <Paragraph
            bold={"900"}
            fontSize={"32px"}
            color={"var(--neon)"}
            align={"center"}
            stroke={"var(--dark-grey) 3px"}
            content={`STYLE FOR EVERY MOOD,`}
          />
        </div>
        <Linked link={"/ProductList"} name={"Shop Now "} self={"center"} />
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
