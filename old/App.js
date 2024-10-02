import { useLocation, Routes, Route } from "react-router-dom";

import GlobalStyles from "./components/core/GlobalStyles";

import { useSelector } from "react-redux";

import { AnimatePresence } from "framer-motion";


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
        <Routes location={location} key={location.pathname}></Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
