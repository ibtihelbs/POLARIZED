import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/core/Components";
import { Title, Paragraph } from "../components/core/Text";
import { useState } from "react";
import { PUBLIC_REQUEST } from "../request";
import { addProduct } from "../redux/cart";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  gap: 3rem;
  ${tablet({
    padding: "10px",
    flexDirection: "column",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 75vh;
  object-fit: cover;
  border: var(--dark-grey) 3px solid;
  border-radius: 30px;
  box-shadow: 5px 5px 0px var(--dark-grey);
  ${mobile({ height: "30vh" })};
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 999px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Tags = styled(Link)`
  font-size: 12px;
  border-radius: 999px;
  border: 1px solid var(--dark-grey);
  padding: 2px 4px;
`;
const FlexContainer = styled.div`
  display: flex;
  gap: 4px;
`;
const Product = () => {
  const linkLocation = useLocation();
  const Id = linkLocation.pathname.split("/")[2];
  const [prod, setProd] = useState();
  const [quantity, setQuantity] = useState(1);
  const dispatcher = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      const item = await PUBLIC_REQUEST.get(`/products/find/${Id}`);
      setProd(item.data);
    };
    getProduct();
  }, [Id]);
  const submitCart = () => {
    dispatcher(addProduct({ ...prod, quantity }));
    setQuantity(1);
  };
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={prod?.img} />
        </ImgContainer>
        <InfoContainer>
          <Title content={prod?.title} fontSize={"40px"} />
          <Paragraph content={prod?.desc} />
          <Price>{prod?.price} $</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <Container>
            <FilterTitle>Tags </FilterTitle>
            <FlexContainer>
              {prod?.tags.map((v, index) => (
                <Tags key={index} to={`../productlist/${v}`}>
                  {" "}
                  {v}{" "}
                </Tags>
              ))}
            </FlexContainer>
          </Container>
          <AddContainer>
            <AmountContainer>
              <button
                onClick={() => {
                  if (quantity === 0) return;
                  setQuantity(quantity - 1);
                }}
              >
                <FaMinus />
              </button>
              <Amount>{quantity}</Amount>
              <button onClick={() => setQuantity(quantity + 1)}>
                {" "}
                <FaPlus />{" "}
              </button>
            </AmountContainer>
            <Button
              onClick={submitCart}
              type={"submit"}
              content={"ADD TO CART"}
            />
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
