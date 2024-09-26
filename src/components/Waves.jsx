// AnimatedWaves.js
import React from "react";
import styled, { keyframes } from "styled-components";

// Animation keyframes
const waveAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Styled components
const WaveContainer = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  top: 80%;
  overflow: hidden;
`;

const Wave = styled.div`
  width: 100%;
  height: 30px;
  background-color: #df7861;
  animation: ${waveAnimation} 2s infinite;
  margin-top: 5px;
`;

const AnimatedWaves = () => {
  return (
    <WaveContainer>
      <Wave />

      <Wave style={{ animationDelay: "0.2s", backgroundColor: "#D2FF72" }} />
      <Wave style={{ animationDelay: "0.2s", backgroundColor: "#FECD70" }} />
      <Wave style={{ animationDelay: "0.4s", backgroundColor: "#E3C770" }} />
    </WaveContainer>
  );
};

export default AnimatedWaves;
