import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../components/core/Components";
import { Title, Paragraph } from "../components/core/Text";
import { PUBLIC_REQUEST } from "../request";
import { addProduct } from "../redux/cart";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: space-between;

  ${tablet({
    flexDirection: "column",
  })}
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 3rem;
  padding-top: 10rem;
  ${tablet({
    columnGap: 0,
    padding: "1rem",
    paddingTop: "4.5rem",
    gridTemplateColumns: "1fr",
    rowGap: "1rem",
  })};
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
  ${mobile({ height: "50vh" })};
`;

const InfoContainer = styled.div`
  grid-column: span 2;
  display: grid;
  gap: 1rem;
  ${tablet({
    columnGap: 0,
  })};
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

  ${mobile({ width: "100%", flexDirection: "column", gap: "1rem" })}
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
  display: ${(props) => (props.device === "desktop" ? "block" : "none")};
  ${tablet({
    display: (props) => (props.device === "tablet" ? "flex" : "none"),
    width: "100%",
    justifyContent: "flex-end",
  })}
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
  font-size: 16px;
  border-radius: 999px;
  border: 1px solid var(--dark-grey);
  padding: 2px 4px;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  width: 50%;

  ${tablet({ width: "100%" })}
`;

// Product Component
const Product = () => {
  const linkLocation = useLocation();
  const Id = linkLocation.pathname.split("/")[2];
  const [prod, setProd] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // Fetch product data
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await PUBLIC_REQUEST.get(`/products/find/${Id}`);
        setProd(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    getProduct();
  }, [Id]);

  // Add product to cart
  const submitCart = () => {
    if (prod) {
      dispatch(addProduct({ ...prod, quantity }));
      setQuantity(1); // Reset quantity after adding to cart
    }
  };

  // Handle quantity changes
  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increase") {
      setQuantity(quantity + 1);
    }
  };

  if (!prod) return <div>Loading...</div>; // Show loading state while fetching data

  return (
    <Wrapper>
      <ImgContainer>
        <Image src={prod.img} alt={prod.title} />
      </ImgContainer>
      <InfoContainer>
        <Title content={prod.title} fontSize={"60px"} />
        <AddContainer device="tablet">
          <Button onClick={submitCart} type="submit" content="ADD TO CART" />
        </AddContainer>
        <Paragraph content={prod.desc} fontSize={"24px"} bold={"bold"} />
        <Price>{prod.price} $</Price>
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
          <AmountContainer>
            <button onClick={() => handleQuantityChange("decrease")}>
              <FaMinus />
            </button>
            <Amount>{quantity}</Amount>
            <button onClick={() => handleQuantityChange("increase")}>
              <FaPlus />
            </button>
          </AmountContainer>
        </FilterContainer>
        <Container>
          <FilterTitle>Tags</FilterTitle>
          <FlexContainer>
            {prod.tags.map((tag, index) => (
              <Tags key={index} to={`../productlist/${tag}`}>
                {tag}
              </Tags>
            ))}
          </FlexContainer>
          <AddContainer device="desktop">
            <Button onClick={submitCart} type="submit" content="ADD TO CART" />
          </AddContainer>
        </Container>
      </InfoContainer>
    </Wrapper>
  );
};

export default Product;
