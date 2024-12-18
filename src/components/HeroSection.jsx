import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { InfiniteSlider } from "./InfiniteSlider";
import ImagePol from "./core/ImagePol";
import { Paragraph, Title } from "./core/Text";
import { Linked } from "./core/Components";
import { mobile } from "../responsive";
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
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
  background-image: url(./assets/images/hero/bg-mini.webp);
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
  return (
    <HeroContainer>
      <Container>
        <Title content={"POLARIZED"} fontSize={"88px"} />
        <Paragraph
          bold={"900"}
          fontSize={"24px"}
          content={`Playful or Classic? Why Not Both? `}
        />
        <Paragraph
          bold={"bold"}
          content={` From *bold and playful* pieces to *sleek and timeless
          basics*, we’ve got something for every vibe. Because why choose when
          you can have it all?`}
        />
        <Linked link={"/shop"} name={"Shop Now "} self={"center"} />
      </Container>
      <ImagePol>
        <ImageContainer>
          <Image src="./images/hero/bg.webp" alt="hero image" loading="lazy" />

          <ThemeProvider theme={theme}>
            <Image
              src="./images/hero/skateboard.png"
              alt="hero image"
              loading="lazy"
            />
          </ThemeProvider>
          <Wrap>
            <ThemeProvider theme={TextPositionOne}>
              <TextStripe>
                <InfiniteSlider>
                  <Text>
                    Your style is a mood- And we're here for every swing.
                  </Text>
                </InfiniteSlider>
              </TextStripe>
            </ThemeProvider>
          </Wrap>
          <ThemeProvider theme={themeTwo}>
            <Image
              src="./images/hero/top.png"
              alt="hero image"
              loading="lazy"
            />
          </ThemeProvider>
          <Wrap>
            <ThemeProvider theme={TextPositionTwo}>
              <TextStripe>
                <InfiniteSlider>
                  <Text>
                    Your style is a mood- And we're here for every swing.
                  </Text>
                </InfiniteSlider>
              </TextStripe>
            </ThemeProvider>
          </Wrap>
        </ImageContainer>
      </ImagePol>
    </HeroContainer>
  );
};

export default HeroSection;
