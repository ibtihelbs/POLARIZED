//import Categories from "../components/Categories";
//import Products from "../components/Products";
//import Newsletter from "../components/Newsletter";
import HeroSection from "../components/HeroSection";
import transition from "../transition";
import About from "../components/About";
import Feature from "../components/Feature";
const productCopy = [
  {
    product: "100% Leather Products",
    copy: "When quality meets style, you get our 100% leather pieces. Sleek, timeless, and ready for any vibe you’re feeling. Whether you’re rocking something bold or keeping it classic, these handcrafted beauties are built to last and only get better with age. Why settle when you can have it all?",
    img: "/slide1.jpg", // Example image path
  },
  {
    product: "Light Blue Men's Button-Up",
    copy: "Casual but polished? Nailed it. Our light blue men’s button-up is that perfect 'every occasion' piece, whether you're feeling laid-back or dialed-in. It's as versatile as your mood — wear it your way and own the day.",
    img: "/slide2.jpg", // Example image path
  },
  {
    product: "Dopamine Décor",
    copy: "Bring on the good vibes with our Dopamine Décor! Bold colors and playful designs that are all about boosting your mood and your space. Because who says your home can’t be as unique and vibrant as your style?",
    img: "/slide3.jpg", // Example image path
  },
];

const HomeComponant = () => {
  return (
    <>
      <HeroSection />
      <About />
      {productCopy.map((v, index) => {
        const { product, copy, img } = v;
        return (
          <Feature key={index} img={img} title={product} paragraph={copy} />
        );
      })}
      {/*<Products />
      <Categories />
      <Newsletter />*/}
    </>
  );
};
const Home = transition(HomeComponant);
export default Home;
