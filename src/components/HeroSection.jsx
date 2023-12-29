import React from "react";
import AnimatedWaves from "./Waves";

const HeroSection = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#0a1174",
        fontSize: "3rem",
        padding: "2rem 3rem",
      }}
    >
      <h1>polarized</h1>
      <h4
        style={{
          marginTop: "-40px",
          marginBottom: "50px",
          width: "600px",
          lineHeight: "0.9",
          textAlign: "center",
        }}
      >
        we are where for your mood swings
      </h4>
      <AnimatedWaves />
      <img
        src="./bg.jpg"
        alt="slide"
        style={{
          width: "500px",
          borderRadius: "30px",
          border: "solid 3px #1d4ed8",
          boxShadow: "5px 5px 0px #1d4ed8",
        }}
      />
      <h2 id="about">
        Welcome to <span>POLARIZED</span> <br /> — where we're here for your
        mood swigs!
        <br /> Whether you're feeling bold, chill, or anything in between, our
        pieces are your perfect companion. <br />{" "}
        <span>Embrace the swings</span>,
        <br /> and let us match your vibe!
      </h2>
    </div>
  );
};

export default HeroSection;
