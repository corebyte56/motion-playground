import { motion, useScroll, hover } from "motion/react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Red Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress, originX: 0 }}
        className="bg-red-400 w-full h-1 fixed top-0 left-0 z-50 rounded-full"
      ></motion.div>

      {/* Hero */}
      <Hero />
    </>
  );
};

export default App;
