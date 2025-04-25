import React from "react";
import styled from "styled-components";
import { addProduct } from "../redux/cart";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./core/Components";

// Styled components
const CardContainer = styled.div`
  position: relative;
  border: solid var(--dark-grey) 3px;
  box-shadow: 5px 5px 0px var(--dark-grey);
  border-radius: 30px;
  overflow: hidden;
  margin: 16px;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  &:hover {
    transform: translate(5px, 5px);
    box-shadow: 0px 0px 0px var(--dark-grey);
    color: var(--dark-grey);
  }
`;

const Container = styled.div`
  min-width: 300px;
`;

const Image = styled.img`
  padding: 0.5rem;
  height: 300px;
  width: 100%;
  border-radius: 30px;
  object-fit: cover;
  transition: transform 0.9s ease-out, opacity 0.9s ease-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    opacity: 0.5;
  }
`;

const Linked = styled(Link)`
  transition: text-decoration 0.3s ease-out;
  &:hover {
    text-decoration: underline;
  }
`;

const Span = styled.span`
  font-size: 8px;
`;

const Content = styled.div`
  position: relative;
  padding: 16px;
  display: grid;
  gap: 4px;
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

const Tags = styled(Link)`
  font-size: 8px;
  border-radius: 999px;
  border: 1px solid var(--dark-grey);
  padding: 2px 4px;
  max-width: 80px; /* Set a max-width to control tag size */
  overflow: hidden; /* Hide overflowed text */
  white-space: nowrap; /* Prevent text from wrapping */
  text-overflow: ellipsis; /* Add ellipsis for overflowed text */
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
`;

const InfoGrid = styled.div`
  display: grid;
  gap: 8px;
`;

const DetailsLink = styled(Linked)`
  align-self: flex-start;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Helper function to generate stars
const generateStars = (rating) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <StarIcon key={i}>&#9733;</StarIcon> // You can replace this with your own star icon or Unicode character
    );
  }
  return stars;
};

// ProductCard component
const ProductCard = ({ product }) => {
  const { title, price, img, rate, _id, tags, category } = product;
  const dispatch = useDispatch();

  return (
    <CardContainer>
      <Link to={`../Product/${_id}`}>
        <Image src={img} alt={title} loading="lazy" />
      </Link>
      <Content>
        <Title>{title}</Title>
        <p> {category} </p>
        <ProductInfo>
          <InfoGrid>
            <FlexContainer>
              {tags?.slice(0, 3).map((v, index) => (
                <Tags key={index} to={`../productlist/${v}`}>
                  {v}
                </Tags>
              ))}
            </FlexContainer>
            <Price>${price}</Price>
          </InfoGrid>
          <DetailsLink to={`../Product/${_id}`}>Details</DetailsLink>
        </ProductInfo>
        <RatingWrapper>
          <RatingContainer>
            {generateStars(Math.round(rate) || 4)}
            <Span>{rate}/5</Span>
          </RatingContainer>
          <Button
            content={"add to cart"}
            onClick={() => {
              dispatch(addProduct({ ...product, quantity: 1 }));
            }}
          />
        </RatingWrapper>
      </Content>
    </CardContainer>
  );
};

export default ProductCard;
