import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginApi } from "../redux/apiCall";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import transition from "../transition";
import { Button } from "../components/core/Components";
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
  box-shadow: 5px 5px 0px var(--dark-grey);
  border-radius: 15px;
  border: 3px solid var(--dark-grey);
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
  border: 3px solid var(--dark-grey);
  margin: 20px 10px 0px 0px;
  padding: 10px;
  background-color: transparent;
  border-radius: 999px;
`;

const StyledLink = styled(Link)`
  margin-bottom: 10px;
  font-size: 12px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatcher = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();

    loginApi(dispatcher, { username, password });
    console.log(isFetching, error);
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleLogin}>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>
            <Button
              //onClick={handleLogin}
              type={"submit"}
              content={"Login"}
              color={"var(--dark-grey)"}
              bgc={"var(--bg-color)"}
            />
          </span>
          <StyledLink>DO NOT YOU REMEMBER THE PASSWORD?</StyledLink>
          <StyledLink to={"/register"}>CREATE A NEW ACCOUNT</StyledLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

const LoginCom = transition(Login);

export default LoginCom;
