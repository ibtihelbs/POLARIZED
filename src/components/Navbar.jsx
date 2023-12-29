import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const tt = useSelector((state) => state.cart);
  console.log(quantity, tt);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        height: "80px",
        alignItems: "center",
        padding: "0 3rem",
      }}
    >
      <div
        className="searchBar"
        style={{
          display: "flex",
          gap: "5px",
          alignItems: "center",
        }}
        height={60}
      >
        <button>
          <FaSearch className="icon" />
        </button>
        <input
          type="search"
          name="search"
          placeholder="Search ......."
          style={{
            border: "none",
            backgroundColor: "transparent",
            color: "black",
          }}
        />
      </div>
      <Link to={"/"}>
        <h3>polarized</h3>
      </Link>
      <ul style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <li>
          <Link to={"/Login"}>Login</Link>
        </li>
        <li>
          <Link to={"/Register"}>Register</Link>
        </li>
        <li>
          <Link to={"/Cart"}>
            <FaCartShopping className="icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
