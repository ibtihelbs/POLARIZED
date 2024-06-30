import React from "react";
import styled from "styled-components";
import AnimatedWaves from "./Waves";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #0a1174;
  font-size: 3rem;
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
  text-align: center;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 30px;
  border: solid 3px #1d4ed8;
  box-shadow: 5px 5px 0px #1d4ed8;
`;

const AboutText = styled.h2`
  text-align: center;

  span {
    color: #1d4ed8;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Title>polarized</Title>
      <Subtitle>we are where for your mood swings</Subtitle>
      <AnimatedWaves />
      <Image src="./bg.jpg" alt="slide" loading="lazy" />
      <AboutText id="about">
        Welcome to <span>POLARIZED</span> <br /> — where we're here for your
        mood swigs!
        <br /> Whether you're feeling bold, chill, or anything in between, our
        pieces are your perfect companion. <br />
        <span>Embrace the swings</span>,
        <br /> and let us match your vibe!
      </AboutText>
    </HeroContainer>
  );
};

export default HeroSection;
