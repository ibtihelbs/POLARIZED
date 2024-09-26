import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import transition from "../transition";
import { register } from "../redux/apiCall";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 60%;
  padding: 20px;
  border: 3px solid rgb(29, 78, 216);
  box-shadow: rgb(29, 78, 216) 5px 5px 0px;
  border-radius: 30px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Input = styled.input`
  width: 100%;
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
  box-shadow: 5px 5px 0px #2c3639;
  border-radius: 15px;
  border: 3px solid #2c3639;
  &:hover {
    background-color: #2c3639;
    color: #f9ffb9;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #2c3639;
`;

const Register = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    register(dispatch, input);
    console.log(input);
    navigate("/login", { replace: true });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleCreate}>
          <div>
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
          </div>
          <div>
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
          </div>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>.
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default transition(Register);
