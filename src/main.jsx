import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import GlobalStyles from "./components/core/GlobalStyles";
import { Provider } from "react-redux";
// Define routes with createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "productlist/:category",
        element: <ProductList />,
      },
      {
        path: "productlist",
        element: <ProductList />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
]);
persistor.persist();
// Rendering the app with StrictMode and RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
