import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import transition from "../transition";
import { register } from "../redux/apiCall";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  border: 3px solid rgb(29, 78, 216);
  box-shadow: rgb(29, 78, 216) 5px 5px 0px;
  border-radius: 30px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  border: 3px solid rgb(29, 78, 216);
  margin: 20px 10px 0px 0px;
  padding: 10px;
  background-color: transparent;
  border-radius: 999px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  padding: 10px;
  font-weight: 600;
  place-self: start;
  padding: 1rem 4rem;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 0.3s ease-in-out;
  box-shadow: 5px 5px 0px #1d4ed8;
  border-radius: 15px;
  border: 3px solid #1d4ed8;
  &:hover {
    background-color: #1d4ed8;
    color: #f9ffb9;
  }
`;

const ModalBackground = styled.div`
  background-color: rgba(29, 78, 216, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: 50;
  top: 0;
  position: fixed;
  display: ${(props) => (props.visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  height: 50%;
  width: 50%;
  padding: 1rem;
  background-color: #f9ffb9;
  border-radius: 15px;
  border: 5px double #1d4ed8;
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #1d4ed8;
`;

const Modal_ = ({ name, modal, setModal }) => {
  return (
    <ModalBackground visible={modal} onClick={() => setModal(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setModal(false)}>x</CloseButton>
        <h2>Congratulation {name}, you are registered!</h2>
      </Modal>
    </ModalBackground>
  );
};

const Register = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [modal, setModal] = useState(false);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    register(dispatch, input);
    setModal(true);
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleCreate}>
          <Input onChange={handleChange} name="name" placeholder="Name" />
          <Input
            onChange={handleChange}
            name="lastName"
            placeholder="Last Name"
          />
          <Input
            onChange={handleChange}
            name="username"
            placeholder="Username"
          />
          <Input onChange={handleChange} name="email" placeholder="Email" />
          <Input
            onChange={handleChange}
            name="password"
            placeholder="Password"
          />
          <Input
            onChange={handleChange}
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>.
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
      <Modal_ setModal={setModal} name={input.name} modal={modal} />
    </Container>
  );
};

export default transition(Register);
