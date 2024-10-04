import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
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

const OrderItem = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid var(--dark-grey);
  border-radius: 10px;
  background-color: var(--light-grey);
`;

const Account = () => {
  const orders = useSelector((state) => state.order.productOrder); // Fetching orders
  const userInfo = useSelector((state) => state.order.userId);
  const user = useSelector((state) => state.user.currentUser); // Fetching user info
  const navigate = useNavigate();
  console.log(orders);
  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect if user is not logged in
    }
  }, [user, navigate]);
  return (
    <Container>
      {user && (
        <>
          <Title>Welcome, {userInfo.username}!</Title>
          <Info>
            <p>
              <strong>Email:</strong> {userInfo.email}
            </p>
            <p>
              <strong>Phone:</strong> {userInfo.phone || "N/A"}
            </p>
            <p>
              <strong>Address:</strong> {userInfo.address || "N/A"}
            </p>
          </Info>

          <OrderList>
            <h2>Your Orders</h2>
            {orders && orders.length > 0 ? (
              orders.map((order, orderIndex) => (
                <div key={orderIndex}>
                  <h1>Total: {order.total}</h1>
                  <h1>Date: {order.date}</h1>
                  {order. prodId.map((product, productIndex) => (
                    <OrderItem key={productIndex}>
                      <p>
                        <strong>Order #{productIndex + 1}:</strong>
                      </p>
                      <ul>
                        {product.productId && (
                          <li>Product ID: {product.productId}</li>
                        )}
                      </ul>
                    </OrderItem>
                  ))}
                </div>
              ))
            ) : (
              <p>No orders yet.</p>
            )}
          </OrderList>
        </>
      )}
    </Container>
  );
};

export default Account;
