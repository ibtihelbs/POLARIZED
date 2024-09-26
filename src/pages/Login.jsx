import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginApi } from "../redux/apiCall";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import transition from "../transition";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 600px;
  box-shadow: 5px 5px 0px #2c3639;
  border-radius: 15px;
  border: 3px solid #2c3639;
  padding: 20px;
  ${mobile({ width: "90%" })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
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

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  box-shadow: 5px 5px 0px #2c3639;
  border-radius: 15px;
  border: 3px solid #2c3639;
  cursor: pointer;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 10px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatcher = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("first");
    loginApi(dispatcher, { username, password });
    console.log(isFetching, error);
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>LOGIN</Button>
          <StyledLink>DO NOT YOU REMEMBER THE PASSWORD?</StyledLink>
          <StyledLink to={"/register"}>CREATE A NEW ACCOUNT</StyledLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

const LoginCom = transition(Login);

export default LoginCom;
