import styled from "styled-components";
import { mobile } from "../responsive";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  background-color: var(--dark-grey);
  align-items: center;
  color: var(--bg-color) !important;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

const Logo = styled.h1``;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
      <Logo>POLARIZED.</Logo>

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
    </Container>
  );
};

export default Footer;
