import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import HeroSection from "../components/HeroSection";
import transition from "../transition";
import About from "../components/About";
import Feature from "../components/Feature";
import { Title, TextStripe } from "../components/core/Text";
const productCopy = [
  {
    product: "100% Leather Products",
    copy: "When quality meets style, you get our 100% leather pieces. Sleek, timeless, and ready for any vibe you’re feeling. Whether you’re rocking something bold or keeping it classic, these handcrafted beauties are built to last and only get better with age. Why settle when you can have it all?",
    img: "/leather.jpg", // Example image path
    bg: `inherit`,
    color: "inherit",
  },
  {
    product: "Light Blue Men's Button-Up",
    copy: "Casual but polished? Nailed it. Our light blue men’s button-up is that perfect 'every occasion' piece, whether you're feeling laid-back or dialed-in. It's as versatile as your mood — wear it your way and own the day.",
    img: "/buttonup.jpg", // Example image path
    bg: "lightblue",
    color: "inherit",
  },
];
import { InfiniteSlider } from "../components/InfiniteSlider";
import Dopamin from "../components/Dopamin";

const HomeComponant = () => {
  return (
    <>
      <HeroSection />
      <TextStripe>
        <InfiniteSlider>
          <Title
            content={"NEW NEW NEW - NEW NEW NEW - NEW NEW NEW - "}
            align={"center"}
          />
        </InfiniteSlider>
      </TextStripe>

      <Products />

      <About />
      <Dopamin />
      {productCopy.map((v, index) => {
        const { product, copy, img, bg, color } = v;
        return (
          <Feature
            order={index % 2}
            key={index}
            img={img}
            title={product}
            paragraph={copy}
            bg={bg}
            color={color}
          />
        );
      })}
      <Newsletter />
    </>
  );
};
const Home = transition(HomeComponant);
export default Home;
