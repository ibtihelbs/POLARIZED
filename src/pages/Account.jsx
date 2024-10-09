import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 2rem;
  max-width: 880px;
  margin: 0 auto;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 1.5rem;
`;

const Info = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid var(--dark-grey);
  border-radius: 10px;
`;

const OrderList = styled.div`
  width: 100%;
`;

const OrderItem = styled(Link)``;

const Li = styled.li`
  display: flex;
  padding: 1rem;
  border: 5px solid var(--dark-grey);
  border-radius: 10px;
  background-color: var(--light-grey);
  height: 150px;
  align-items: center;
  gap: 1rem;
  width: auto;
  box-shadow: 5px 5px 0px var(--dark-grey);
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
`;
const Summary = styled.summary`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem;
  box-shadow: 5px 5px 0px var(--dark-grey);
  border-radius: 10px;
  border: 5px solid var(--dark-grey);
  
`;
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
const Account = () => {
  const orders = useSelector((state) => state.order.productOrder); // Fetching orders
  const userInfo = useSelector((state) => state.order.userId);
  const user = useSelector((state) => state.user.currentUser); // Fetching user info
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect if user is not logged in
    }
  }, [user, navigate]);

  if (!user) return null; // Avoid rendering if no user

  return (
    <Container>
      <div>
        <Title>Welcome, {userInfo?.username}!</Title>
        <Info>
          <p>
            <strong>Email:</strong> {userInfo?.email}
          </p>
          <p>
            <strong>Phone:</strong> {userInfo?.phone || "N/A"}
          </p>
          <p>
            <strong>Address:</strong> {userInfo?.address || "N/A"}
          </p>
        </Info>
      </div>

      <OrderList>
        <h2>Your Orders</h2>
        {orders && orders.length > 0 ? (
          orders.map((order, orderIndex) => (
            <details key={orderIndex}>
              <Summary>
                <h3>Total: {order.total} $</h3>
                <h3>Date: {formatDate(order.date)}</h3>
                &#x25BC;
              </Summary>
              {order.prodId.map((product, productIndex) => (
                <OrderItem
                  to={`../Product/${product.productId}`}
                  key={productIndex}
                >
                  <ul>
                    {product.productId && (
                      <Li>
                        <Image src={product.img} alt={product.name} />
                        <div>
                          <h3>{product.title}</h3>
                          <p>{product.price} $</p>
                        </div>
                      </Li>
                    )}
                  </ul>
                </OrderItem>
              ))}
            </details>
          ))
        ) : (
          <p>No orders yet.</p>
        )}
      </OrderList>
    </Container>
  );
};

export default Account;
