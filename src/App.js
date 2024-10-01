import Cart from "./pages/Cart";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyles from "./components/core/GlobalStyles";

import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Product from "./pages/Product";
import { useSelector } from "react-redux";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import Account from "./pages/Account";
import ProductFetching from "./productFetching";

function App() {
  const location = useLocation();
  const User = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <GlobalStyles />
      <div className="noise"></div>
      {/**<Preloader /> */}
      <Navbar user={User} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Login" element={User ? <Home /> : <Login />} />
          <Route
            exact
            path="Register"
            element={User ? <Home /> : <Register />}
          />
          <Route exact path="Product/:id" element={<Product />} />
          <Route exact path="Cart" element={<Cart />} />
          <Route exact path="ProductList/:category" element={<ProductList />} />
          <Route exact path="ProductList" element={<ProductList />} />
          <Route exact path="checkout" element={<Checkout />} />
          <Route exact path="account" element={<Account />} />
          <Route exact path="mount" element={<ProductFetching />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
