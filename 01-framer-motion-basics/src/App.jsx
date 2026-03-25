import React, { useEffect, useState } from "react";
import { motion, useScroll, hover } from "motion/react";
import CircularProgress from "@mui/material/CircularProgress";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const { scrollYProgress } = useScroll();
  const [info, setInfo] = useState([]);

  const renderCards = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
      );

      const data = await res.json();
      setInfo(data.meals || []);
      console.log(data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    renderCards();
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Red Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress, originX: 0 }}
        className="bg-red-400 w-full h-1 fixed top-0 left-0 z-50 rounded-full"
      ></motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-9 container mx-auto py-13">
        {info.length > 0 ? (
          info.map((meal) => (
            <motion.div
              key={meal.idMeal}
              drag
              dragConstraints={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
              whileHover={{
                scale: 1.2,
                transition: {
                  duration: 0.3,
                },
              }}
              className="bg-white/70 backdrop-blur-lg shadow-2xl p-4 flex flex-col gap-5 justify-between rounded-2xl cursor-pointer"
            >
              {/* Img */}
              <div className="flex flex-col gap-8 items-start">
                <motion.img
                  className="rounded-2xl w-full h-40 object-cover"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  width={200}
                />
              </div>

              {/* Header, price And Rating, Order Button */}
              <div className="flex flex-col justify-between space-y-3">
                <h2 className="text-[14px] font-bold">{meal.strMeal}</h2>

                {/* price And Rating */}
                <div>
                  <p className="font-medium text-[#454545]">
                    price : $
                    {Math.floor(Math.random() * (1000 - 100 + 1)) + 100}
                  </p>

                  <p className="text-yellow-500 text-sm">
                    {"⭐".repeat(Math.floor(Math.random() * 5) + 1)}
                  </p>
                </div>

                {/* Order Button */}
                <motion.button
                  whileTap={{
                    opacity: 0.5,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="w-full px-4 py-3 bg-green-500 rounded-2xl text-white font-semibold cursor-pointer"
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          // Loading Spinner
          <div className=" h-screen w-screen">
            <h3 className=" text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
              <CircularProgress />
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
