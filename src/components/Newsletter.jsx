import styled from "styled-components";
import { mobile } from "../responsive";
import { IoMdMail } from "react-icons/io";
import { Button, TextInput } from "./core/Components";
import { Title } from "./core/Text";
const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 999px;
  box-shadow: 5px 5px 0px var(--dark-grey);
  justify-content: space-between;
  border: 2px solid var(--dark-grey);
  ${mobile({ width: "80%" })}
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
      <Title content={"Newsletter"} />
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <TextInput placeholder="Your email" />
        <Button content={<IoMdMail className="icon-light" />} />
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
