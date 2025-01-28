import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import HeroSection from "../components/HeroSection";
import transition from "../transition";
import About from "../components/About";
import NewItem from "./NewItem";
import styled from "styled-components";
import { Title, Paragraph } from "../components/core/Text";
import { Section } from "../components/core/Components";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
const productCopy = [
  {
    title: "Stomp in Style",
    copy: "This is your sign to hop on the burgundy trend—no need to deny it. Make a bold statement with these glossy, chunky-soled boots, complete with sleek zipper accents. The perfect mix of edgy and chic, they’re designed to keep you comfortable while turning heads.",
    img: "/shoes.jpg", // Example image path
    bg: `#800020`,
    color: "var(--bg-color)",
    more: [
      "Size 36 is available—just for you!",
      "Snag them now at an unbeatable price!",
      "Click below to Add to Cart and make them yours today.",
    ],
  },
  {
    title: "100% Leather Products",
    copy: "When quality meets style, you get our 100% leather pieces. Sleek, timeless, and ready for any vibe you’re feeling. Whether you’re rocking something bold or keeping it classic, these handcrafted beauties are built to last and only get better with age. Why settle when you can have it all?",
    img: "/leather.jpg", // Example image path
    bg: `#964B00`,
    color: "var(--bg-color)",
  },
  {
    title: "Light Blue Men's Button-Up",
    copy: "Casual but polished? Nailed it. Our light blue men’s button-up is that perfect 'every occasion' piece, whether you're feeling laid-back or dialed-in. It's as versatile as your mood — wear it your way and own the day.",
    img: "/buttonup.jpg", // Example image path
    bg: "lightblue",
    color: "var(--dark-grey)",
    more: ["100% Cotton", "size 45"],
  },
  {
    title: "Dopamine Décor",
    copy: "Bring on the good vibes with our Dopamine Décor! Bold colors and playful designs that are all about boosting your mood and your space. Because who says your home can’t be as unique and vibrant as your style?",
    img: "/deco.jpg", // Example image path
    bg: "pink",
    color: "var(--dark-grey)",
  },
];

const HomeComponant = () => {
  const container = useRef(null);
  const Page = styled(motion.section)`
    height: 300vh;
    position: relative;
  `;
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  console.log(scrollYProgress);
  return (
    <>
      <HeroSection />
      <About />

      <Section>
        <Title
          content={"OUR LATEST PICKS"}
          align={"center"}
          fontSize={"80px"}
        />
        <Paragraph
          content="curated just for you! From timeless classics to playful treasures, each piece tells a story. Whether you're dressing up or keeping it casual, these unique finds are sure to elevate your style."
          align={"center"}
          bold={"bold"}
        />
        <Products />
      </Section>

      <Page ref={container} as={motion.section}>
        {productCopy.map((v, index) => {
          return (
            <NewItem
              index={index}
              key={index}
              product={v}
              scrollYProgress={scrollYProgress}
            />
          );
        })}
      </Page>
      <Newsletter />
    </>
  );
};
const Home = transition(HomeComponant);
export default Home;
