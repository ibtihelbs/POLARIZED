// Preloader.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration in milliseconds (e.g., 3000 for 3 seconds)

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "red",
        width: "100%",
        height: "100%",
      }}
    >
      {isLoading ? (
        <motion.div
          initial={{ opacity: 1, y: -20 }}
          animate={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            style={{
              fontFamily: "sans-serif",
              fontSize: "1.5em",
              fontWeight: 600,
            }}
          >
            Brewing up your fashion fix! Grab a cup, this loading bar is on an
            espresso shot break.
          </h2>
        </motion.div>
      ) : (
        // Render your main content here once the loading is complete
        <div></div>
      )}
    </div>
  );
};

export default Preloader;
