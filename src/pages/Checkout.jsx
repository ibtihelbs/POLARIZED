import { useSelector, useDispatch } from "react-redux";
import { order } from "../redux/apiCall";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addOrder } from "../redux/order";
import { validProduct } from "../redux/cart";
import { Button, TextInput, Label } from "../components/core/Components";

const Checkout = () => {
  const user = useSelector((state) => state.user);
  const prod = useSelector((state) => state.cart);
  const [ordered, setOrdered] = useState(false);
  const [contact, setContact] = useState({
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const currentUser = user.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/ProductList");
    }
  }, [currentUser, navigate]);

  const { products, quantity, total } = prod;

  // Handle input changes
  const handleChange = (e) => {
    setContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const prodId = products.map((v) => ({
    productId: v._id,
    img: v.img,
    title: v.title,
    price: v.price,
  }));

  // Handle order submission
  const addOrderFn = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderRedux = {
      userId: { ...contact, ...currentUser },
      product: { prodId, total, date: new Date().toISOString() }, // Save the current date
      amount: quantity,
    };

    try {
      await order(dispatch, orderRedux);
      dispatch(addOrder(orderRedux));
      dispatch(validProduct());
      setOrdered(true);
    } catch (error) {
      console.error("Failed to place order:", error);
      // Optionally, you could handle error state here
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout">
      {!ordered ? (
        <div>
          <div className="items-wrap">
            <h2>Hello {currentUser?.username}!</h2>
            {products.map((item) => (
              <div className="item" key={item._id}>
                <div>
                  <h3>{item.title}</h3>
                  <div className="info">
                    <span>Size: {item.size || "No size"}</span>
                    <span>Price: {item.price}</span>
                  </div>
                </div>
                <img src={item.img} alt={item.title} />
              </div>
            ))}
            <h2>Quantity: {quantity}</h2>
            <h2>Total: {total}</h2>
          </div>

          <form onSubmit={addOrderFn}>
            <div>
              <Label htmlFor="phone">Phone N°:</Label>
              <TextInput
                required
                type="tel"
                name="phone"
                onChange={handleChange} // Handle input change
                placeholder="+216 22 55 33 44"
                bgc={"var(--dark-grey)"}
                focusbgc={"var(--primary-color)"}
              />
            </div>

            <div>
              <Label htmlFor="address">Address:</Label>
              <TextInput
                required
                type="text"
                name="address"
                onChange={handleChange} // Handle input change
                placeholder="Address, 2050, lala land"
                bgc="var(--dark-grey)"
                focusbgc="var(--primary-color)"
              />
            </div>

            <div className="cta">
              <Link to="/cart">Go back</Link>
              <Button
                content={loading ? "Ordering..." : "Order Now"}
                type="submit"
                bgc="var(--red)"
                color="var(--bg-color)"
                disabled={loading} // Disable the button while loading
              />
            </div>
          </form>
        </div>
      ) : (
        <div style={{ flexDirection: "column" }}>
          <h3>Your order is confirmed</h3>
          <Link to="/">Go home</Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
