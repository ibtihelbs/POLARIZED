import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import CircularSticker from "../components/CircularSticker";
const Root = () => {
  return (
    <>
      <div className="noise"></div>

      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
