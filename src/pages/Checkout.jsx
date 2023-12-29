import { useSelector, useDispatch } from "react-redux";
import { order } from "../redux/apiCall";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addOrder } from "../redux/order";
const Checkout = () => {
  const user = useSelector((state) => state.user);
  const prod = useSelector((state) => state.cart);
  console.log(useSelector((state) => state));
  const [ordered, setOrdered] = useState(false);
  const dispatch = useDispatch();
  const [contact, setContact] = useState(null);
  const currentUser = user.currentUser;
  const { products, quantity, total } = prod;
  const userId = currentUser._id;
  const handleChange = (e) => {
    setContact((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const prodId = products.map((v) => {
    return { productId: v._id };
  });
  const addOrderFn = (e) => {
    const orderRedux = {
      ...contact,
      userId,
      product: prodId,
      amount: quantity,
    };

    order(dispatch, orderRedux);
    dispatch(addOrder(orderRedux));
    setOrdered(true);
  };
  return (
    <div className="checkout">
      {!ordered ? (
        <div>
          <div className="items-wrap">
            <h2>hello {currentUser.username} ! </h2>
            {products.map((item, i) => (
              <div className="item" key={item._id}>
                <div>
                  <h3 key={i}> {item.title} </h3>
                  <div className="info">
                    <span>size : {item.size || "no size"} </span>
                    <span> price: {item.price} </span>
                  </div>
                </div>
                <img src={item.img} alt={item.title} />
              </div>
            ))}
            <h2>quantity: {quantity}</h2>
            <h2>total : {total} </h2>
          </div>
          <form>
            <h2>hello {currentUser.username} ! </h2>

            <div>
              <label htmlFor="phone number">Phone N°:</label> <br />
              <input
                required
                type="tel"
                pattern="[0-9]{2} [0-9]{3} [0-9]{3}"
                name="phone"
                onChange={handleChange}
                placeholder="+216 22 55 33 44"
              />
            </div>
            <div>
              <label htmlFor="adresse">Adresse</label> <br />
              <input
                required
                type="text"
                name="address"
                onChange={handleChange}
                placeholder="adress, 2050, lala land"
              />
            </div>
            <div className="cta">
              <Link to={"/cart"}>Go back</Link>
              <button onClick={addOrderFn} type="submit">
                Order Now
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div style={{ flexDirection: "column" }}>
          <h3> Your order is confirmed </h3>
          <Link to={"/"}>go home</Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
