import styled from "styled-components";
import { mobile } from "../responsive";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  background-color: #0a1174;
  color: white;

  ${mobile({ flexDirection: "column" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>POLARIZED.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FaFacebook className="icon-light" />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <FaInstagram className="icon-light" />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <FaTwitter className="icon-light" />
          </SocialIcon>
          <SocialIcon color="E60023">
            <FaPinterest className="icon-light" />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            {" "}
            <Link to={"/"}> Home </Link>{" "}
          </ListItem>
          <ListItem>
            {" "}
            <Link to={"/"}> Cart </Link>{" "}
          </ListItem>
          <ListItem>
            {" "}
            <Link to={"/"}> Man Fashion </Link>{" "}
          </ListItem>
          <ListItem>
            {" "}
            <Link to={"/"}> Woman Fashion </Link>{" "}
          </ListItem>
          <ListItem>
            {" "}
            <Link to={"/"}> Accessories </Link>{" "}
          </ListItem>
          <ListItem>
            {" "}
            <Link to={"/"}> My Account </Link>{" "}
          </ListItem>
          <ListItem>
            {" "}
            <Link to={"/"}> Order Tracking </Link>{" "}
          </ListItem>
          <ListItem>
            {" "}
            <Link to={"/"}> Wishlist </Link>{" "}
          </ListItem>
          <ListItem>
            {" "}
            <Link to={"/"}> Terms </Link>{" "}
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FaLocationDot />
          20 Lala land 2050
        </ContactItem>
        <ContactItem>
          <FaPhoneAlt />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <IoMdMail />
          ibtihel.bensalah@outlook.fr
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
