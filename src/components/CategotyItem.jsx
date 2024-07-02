import styled, { keyframes } from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  ${mobile({ height: "20vh" })};
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const slideAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const Title = styled.h3`
  white-space: nowrap;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
const Wrap = styled.div`
  display: flex;
  gap: 5px;
  animation: ${slideAnimation} 20s infinite linear reverse;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  background-color: orange;
  width: 100%;
`;
const CategotyItem = ({ item }) => {
  return (
    <Container
      style={{
        transform: `rotate(${item.id % 2 === 0 ? "25deg" : "-25deg"})`,
        borderRadius: "30px",
        border: "solid 3px #1d4ed8",
        boxShadow: "5px 5px 0px #1d4ed8",
      }}
    >
      <Link to={`/ProductList/${item.categories}`}>
        <Image src={item.img} alt={item.title} loading="lazy" />
        <Info>
          <Wrapper>
            <Wrap
              style={{ color: `${item.id % 2 === 0 ? "#f9ffb9" : "#1d4ed8"}` }}
            >
              <Title>{item.title}</Title>
              <Title>{item.title}</Title>
              <Title>{item.title}</Title>
            </Wrap>
            <Wrap
              style={{
                animationDelay: "1s",
                color: `${item.id % 2 === 0 ? "#f9ffb9" : "#1d4ed8"}`,
              }}
            >
              <Title>{item.title}</Title>
              <Title>{item.title}</Title>
              <Title>{item.title}</Title>
            </Wrap>
          </Wrapper>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategotyItem;
