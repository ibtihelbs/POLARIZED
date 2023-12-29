// CircularSticker.js
import React from "react";
import styled from "styled-components";

const StickerContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #1d4ed8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
`;

const ContourText = styled.span`
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
`;

const CenterText = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const CircularSticker = () => {
  return (
    <StickerContainer>
      <ContourText>trendy</ContourText>
      <CenterText>hello</CenterText>
    </StickerContainer>
  );
};

export default CircularSticker;
