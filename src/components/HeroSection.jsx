import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { InfiniteSlider } from "./InfiniteSlider";
import ImagePol from "./core/ImagePol";
import { Paragraph } from "./core/Text";
import { Linked } from "./core/Components";
const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a1174;

  gap: 2rem;
  padding: 2rem 3rem;
`;

const Title = styled.h1`
  margin: 0;
`;

const Subtitle = styled.h4`
  margin-top: -40px;
  margin-bottom: 50px;
  max-width: 560px;
  line-height: 0.9;
  font-size: 3rem;
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
  height: 50px;
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

const Text = styled.h3`
  eight: 50px;
  background-color: var(--neon);
  width: 100%;
  position: absolute;
  z-index: 25;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <div>
        <Title>POLARIZED</Title>
        <Subtitle className="signature">
          Where we get it — your style is a mood, and we're here for every
          swing.
        </Subtitle>
        <Paragraph
          content={`Playful or Classic? Why Not Both?** Our collection is all about
          options. From *bold and playful* pieces to *sleek and timeless
          basics*, we’ve got something for every vibe. Because why choose when
          you can have it all?`}
        />
        <Linked link={"/shop"} name={"Shop Now "} />
      </div>

      <ImagePol>
        <ImageContainer>
          <Image
            src="./assets/images/hero/bg.webp"
            alt="hero image"
            loading="lazy"
          />

          <ThemeProvider theme={theme}>
            <Image
              src="./assets/images/hero/skateboard.png"
              alt="hero image"
              loading="lazy"
            />
          </ThemeProvider>
          <Wrap>
            <ThemeProvider theme={TextPositionOne}>
              <TextStripe>
                <InfiniteSlider>
                  <Text>first line - first line</Text>
                </InfiniteSlider>
              </TextStripe>
            </ThemeProvider>
          </Wrap>
          <ThemeProvider theme={themeTwo}>
            <Image
              src="./assets/images/hero/top.png"
              alt="hero image"
              loading="lazy"
            />
          </ThemeProvider>
          <Wrap>
            <ThemeProvider theme={TextPositionTwo}>
              <TextStripe>
                <InfiniteSlider>
                  <Text>first line - first line</Text>
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
