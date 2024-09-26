import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { InfiniteSlider } from "./InfiniteSlider";
import ImagePol from "../components/ImagePol";

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a1174;
  font-size: 3rem;
  gap: 2rem;
  padding: 2rem 3rem;
`;

const Title = styled.h1`
  margin: 0;
`;

const Subtitle = styled.h4`
  margin-top: -40px;
  margin-bottom: 50px;
  width: 600px;
  line-height: 0.9;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 30px;
  border: solid 3px #2c3639;
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
  background-color: rgb(210, 255, 114);
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
  background-color: rgb(210, 255, 114);
  width: 100%;
  position: absolute;
  z-index: 25;
`;
const HeroSection = () => {
  return (
    <HeroContainer>
      <div>
        <Title>polarized</Title>
        <Subtitle>
          Where we get it — your style is a mood, and we're here for every
          swing.
        </Subtitle>
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
      {/*
      <AboutText id="about">
       

        <div>
          ### **Playful or Classic? Why Not Both?** Our collection is all about
          options. From *bold and playful* pieces to *sleek and timeless
          basics*, we’ve got something for every vibe. Because why choose when
          you can have it all?
        </div>

        <div>
          ### **Quality That Matches Your Vibe** Every item is crafted with
          care, combining *uniqueness* with *high quality*. Whether you're
          stepping out or keeping it chill, we’ve got the pieces to elevate your
          look and last through the swings.
        </div>

        <div>
          ### **Slide Into Your Style** Ready to express every side of you?
          Polarized makes it easy. Browse our collections, and let your style
          shine through. Whether you're feeling loud or laid-back, we’re here to
          match your mood.
        </div>

        <div>
          ### **Mood Swings Welcome!** No judgment here. Style changes with the
          moment, and we’re all for it! Let us help you find the perfect match
          for today’s vibe — and tomorrow’s too.
        </div>
      </AboutText>  <AboutText id="about">
        <div>
          ### **Welcome to POLARIZED** Where we get it — your style is a mood,
          and we're here for every swing.
        </div>

        <div>
          ### **Playful or Classic? Why Not Both?** Our collection is all about
          options. From *bold and playful* pieces to *sleek and timeless
          basics*, we’ve got something for every vibe. Because why choose when
          you can have it all?
        </div>

        <div>
          ### **Quality That Matches Your Vibe** Every item is crafted with
          care, combining *uniqueness* with *high quality*. Whether you're
          stepping out or keeping it chill, we’ve got the pieces to elevate your
          look and last through the swings.
        </div>

        <div>
          ### **Slide Into Your Style** Ready to express every side of you?
          Polarized makes it easy. Browse our collections, and let your style
          shine through. Whether you're feeling loud or laid-back, we’re here to
          match your mood.
        </div>

        <div>
          ### **Mood Swings Welcome!** No judgment here. Style changes with the
          moment, and we’re all for it! Let us help you find the perfect match
          for today’s vibe — and tomorrow’s too.
        </div>
      </AboutText>
    */}
    </HeroContainer>
  );
};

export default HeroSection;
