// ProductCard.js
import React from "react";
import styled from "styled-components";
import { addProduct } from "../redux/cart";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Styled components
const CardContainer = styled.div`
  position: relative;
  flex: 1 1 300px;
  border: solid #1d4ed8 3px;
  box-shadow: 5px 5px 0px #1d4ed8;
  border-radius: 30px;
  overflow: hidden;
  margin: 16px;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  &:hover {
    transform: translate(5px, 5px);
    box-shadow: 0px 0px 0px #1d4ed8;
    color: #1d4ed8;
  }
`;

const Image = styled.img`
  padding: 0.5rem;
  height: 300px;
  width: 100%;
  border-radius: 30px;
  object-fit: cover;

  tansition: transform 0.9 ease-out, opacity 0.9 ease-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    opacity: 0.5;
  }
`;

const Linked = styled(Link)`
  tansition: text-decoration 0.3 ease-out;
  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 1.2em;
  margin-bottom: 8px;
`;

const Price = styled.p`
  font-size: 1.1em;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const StarIcon = styled.span`
  color: #f39c12;
  margin-right: 4px;
`;
const Button = styled.button`
  border-radius: 15px;
  border: 3px solid #1d4ed8;
  box-shadow: 5px 5px 0px #1d4ed8;
  padding: 0.5rem 1rem;
  background-color: red;
  color: wheat;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  &:hover {
    background-color: pink;
    transform: translate(5px, 5px);
    box-shadow: 0px 0px 0px #1d4ed8;
    color: #1d4ed8;
  }
`;
const generateStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <StarIcon key={i}>&#9733;</StarIcon> // You can replace this with your own star icon or Unicode character
    );
  }
  return stars;
};

// ProductCard component
const ProductCard = ({ product }) => {
  const { title, price, img, rating, _id, categories } = product;
  const dispatch = useDispatch();
  return (
    <CardContainer>
      <Link to={`../Product/${_id}`}>
        <Image src={img} alt={title} />
      </Link>
      <Content>
        <Title>{title}</Title>
        tags:{" "}
        {categories.map((v, i) => (
          <Linked key={i} to={`../productlist/${v}`}>
            {v},{" "}
          </Linked>
        ))}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Price>${price}</Price>
          <RatingContainer>{generateStars(rating || 4)}</RatingContainer>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Linked to={`../Product/${_id}`}>Details</Linked>
          <Button
            onClick={() => {
              dispatch(addProduct({ ...product, quantity: 1 }));
            }}
          >
            add to cart
          </Button>
        </div>
      </Content>
    </CardContainer>
  );
};

export default ProductCard;
