import styled from "styled-components";
import { mobile } from "../responsive";
import { IoMdMail } from "react-icons/io";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: var(--dark-grey);
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <hr
        style={{
          backgroundColor: "var(--dark-grey)",
          width: "100%",
          height: "5px",
        }}
      />
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <IoMdMail className="icon-light" />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
