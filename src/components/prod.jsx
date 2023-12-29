// ProductCard.js
import React from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

// Styled components
const CardContainer = styled.div`
  position: relative;
  width: 30%;
  border: solid #1d4ed8 3px;
  box-shadow: 5px 5px 0px #1d4ed8;
  border-radius: 30px;
  overflow: hidden;
  margin: 16px;
`;

const Image = styled.img`
  padding: 0.5rem;
  height: 300px;
  width: 100%;
  border-radius: 30px;
  object-fit: cover;

  // Overlay styles
  position: relative;

  &:hover {
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 133, 0.5);
      z-index: 1;
    }
  }
`;

const OverlayLink = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  text-decoration: none;
  font-size: 1.5em;
  display: none;
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
  const { title, price, img, rating, _id } = product;
  console.log(product);
  return (
    <CardContainer>
      <Link to={`Product/${_id}`}>
        <Image src={img} alt={title} />
      </Link>
      <OverlayLink to={`Product/${_id}`}>View Details</OverlayLink>
      <Content>
        <Title>{title}</Title>

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
      </Content>
    </CardContainer>
  );
};

export default ProductCard;
