//import Categories from "../components/Categories";
//import Products from "../components/Products";
//import Newsletter from "../components/Newsletter";
import HeroSection from "../components/HeroSection";
import transition from "../transition";
import styled from "styled-components";

const HomeComponant = () => {
  return (
    <>
      <HeroSection />

      {/*<Products />
      <Categories />
      <Newsletter />*/}
    </>
  );
};
const Home = transition(HomeComponant);
export default Home;
