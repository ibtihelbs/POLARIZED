import { useSelector } from "react-redux";

const Account = () => {
  const orders = useSelector((state) => state.order.productOrder);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  console.log(orders, user, cart);
  return <div>account</div>;
};

export default Account;
