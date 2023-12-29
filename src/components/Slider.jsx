import styled from "styled-components";
import { sliderItems } from "../data";
import { useState } from "react";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow
        style={{ transform: "rotate(180deg)" }}
        onClick={() => handleClick("left")}
      >
        <img src="./icon/icons8-arrow-50-2.png" alt="arrow" />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <div
            style={{
              height: "100vh",
              width: "100vw",
              backgroundColor: "red",
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              display: "flex",
              position: "relative",
              overflow: "hidden",
            }}
            key={item.id}
          >
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </div>
        ))}
      </Wrapper>
      <Arrow style={{ right: "10px" }} onClick={() => handleClick("right")}>
        <img src="./icon/icons8-arrow-50-2.png" alt="arrow" />
      </Arrow>
    </Container>
  );
};
