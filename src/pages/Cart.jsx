import styled from "styled-components";
import { mobile } from "../responsive";
import transition from "../transition";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { deleteProduct, updateQuantity } from "../redux/cart";
import { MdDelete } from "react-icons/md";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  box-shadow: 5px 5px 0px #1d4ed8;
  border-radius: 15px;
  border: 3px solid #1d4ed8;

  &:hover {
    background-color: #1d4ed8;
    color: #f9ffb9;
  }
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  padding: 1rem;
  border: blue solid 1px;
  border-radius: 8px;

  justify-content: space-between;
  margin-bottom: 20px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  gap: 1rem;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.h2`
  font-weight: 600;
  font-size: 24px;
`;

const ProductId = styled.span`
  color: #777;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
  color: #777;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  justify-content: space-around;
`;

const AmountButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  outline: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #1d4ed8;
  }
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 0 15px;
  ${mobile({ fontSize: "12px" })}
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h2`
  font-weight: 500;
  margin-bottom: 20px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "20px"};
  margin-bottom: 10px;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 0.3s ease-in-out;
  box-shadow: 5px 5px 0px #1d4ed8;
  border-radius: 15px;
  border: 3px solid #1d4ed8;
  &:hover {
    background-color: #1d4ed8;
  }
`;

const Cart = () => {
  const prod = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  console.log(prod);
  const currentUser = user.currentUser;
  const dispatch = useDispatch();
  const remove = (v) => {
    dispatch(deleteProduct(v));
  };
  const update = (v, newQuantity) => {
    dispatch(updateQuantity({ ...v, newQuantity }));
  };
  return (
    <Container>
      <Wrapper>
        {prod.products.length !== 0 ? (
          <>
            <Title>Your Bag</Title>
            <Top>
              <TopButton>
                <Link to={"/ProductList"}>Continue Shopping</Link>
              </TopButton>
              <TopTexts>
                <TopText>Shopping Bag ({prod.products.length})</TopText>
                <TopText>Your Wishlist (0)</TopText>
              </TopTexts>
              <Link to={currentUser ? "/checkout" : "/login"}>
                <TopButton type="filled">Checkout Now</TopButton>
              </Link>
            </Top>
            <Bottom>
              <Info>
                {prod.products.map((v, i) => (
                  <Product key={i}>
                    <ProductDetail>
                      <Details>
                        <Image src={v.img} alt={v.title} />
                        <ProductAmountContainer>
                          <AmountButton>
                            <FaMinus
                              onClick={() => {
                                if (v.quantity === 1) return;

                                let newQuantity = v.quantity - 1;
                                update(v, newQuantity);
                              }}
                            />
                          </AmountButton>
                          <ProductAmount>{v.quantity}</ProductAmount>
                          <AmountButton>
                            <FaPlus
                              onClick={() => {
                                let newQuantity = v.quantity + 1;
                                update(v, newQuantity);
                              }}
                            />
                          </AmountButton>
                        </ProductAmountContainer>
                      </Details>
                      <Details>
                        <ProductName>{v.title}</ProductName>
                        <ProductId>ID: {v._id}</ProductId>
                        <ProductColor color="gray" />
                        <ProductSize>Size: {v.size || "Standard"} </ProductSize>
                      </Details>
                    </ProductDetail>

                    <PriceDetail>
                      <MdDelete
                        onClick={() => {
                          remove(v);
                        }}
                      />
                      <div>
                        <ProductPrice>
                          <p>total price:</p>${Math.round(v.price * v.quantity)}
                        </ProductPrice>
                        <ProductPrice>
                          price: ${Math.round(v.price)}
                        </ProductPrice>
                      </div>
                    </PriceDetail>
                  </Product>
                ))}
                <Hr />
              </Info>
              <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>${Math.round(prod.total)}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>quantity</SummaryItemText>
                  <SummaryItemPrice>
                    ${Math.round(prod.quantity)}
                  </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>-$5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>${Math.round(prod.total)}</SummaryItemPrice>
                </SummaryItem>
                <CheckoutButton>Checkout Now</CheckoutButton>
              </Summary>
            </Bottom>
          </>
        ) : (
          <Title>Your cart is empty</Title>
        )}
      </Wrapper>
    </Container>
  );
};

export default transition(Cart);
